import { reviewSummary, testimonials } from "@/content/testimonials";

export type ReviewSummary = {
  business: string;
  rating: string;
  reviewCount: string;
  source: string;
  thumbnail: string;
};

export type Review = {
  author: string;
  initials: string;
  age: string;
  rating: number;
  verified: boolean;
  quote: string;
  photo: string;
};

export type ReviewsData = {
  summary: ReviewSummary;
  reviews: Review[];
  live: boolean;
};

const fallback: ReviewsData = {
  summary: reviewSummary,
  reviews: testimonials,
  live: false,
};

function initialsFrom(name: string) {
  return name.trim().charAt(0).toUpperCase() || "G";
}

type GooglePlaceReview = {
  author_name: string;
  rating: number;
  text: string;
  relative_time_description: string;
  profile_photo_url?: string;
};

type GooglePlaceResult = {
  result?: {
    name?: string;
    rating?: number;
    user_ratings_total?: number;
    reviews?: GooglePlaceReview[];
  };
  status: string;
};

/**
 * Fetches live Google reviews via the Places Details API.
 * Requires GOOGLE_PLACES_API_KEY and GOOGLE_PLACES_PLACE_ID env vars.
 * Falls back to the curated hard-coded testimonials when unset or on error.
 * Cached for one hour via Next.js fetch revalidation.
 */
export async function getGoogleReviews(): Promise<ReviewsData> {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY;
  const placeId = process.env.GOOGLE_PLACES_PLACE_ID;

  if (!apiKey || !placeId) return fallback;

  try {
    const fields = "name,rating,user_ratings_total,reviews";
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${encodeURIComponent(
      placeId,
    )}&fields=${fields}&reviews_sort=newest&key=${apiKey}`;

    const response = await fetch(url, { next: { revalidate: 3600 } });
    if (!response.ok) return fallback;

    const data = (await response.json()) as GooglePlaceResult;
    if (data.status !== "OK" || !data.result) return fallback;

    const result = data.result;
    const liveReviews = (result.reviews ?? [])
      .filter((review) => review.rating >= 4 && review.text?.trim())
      .slice(0, 5)
      .map((review) => ({
        author: review.author_name,
        initials: initialsFrom(review.author_name),
        age: review.relative_time_description,
        rating: review.rating,
        verified: true,
        quote: review.text,
        photo: review.profile_photo_url || reviewSummary.thumbnail,
      }));

    if (liveReviews.length === 0) return fallback;

    return {
      summary: {
        business: result.name ?? reviewSummary.business,
        rating: (result.rating ?? Number(reviewSummary.rating)).toFixed(1),
        reviewCount: (result.user_ratings_total ?? 0).toLocaleString("en-US"),
        source: "Google",
        thumbnail: reviewSummary.thumbnail,
      },
      reviews: liveReviews,
      live: true,
    };
  } catch {
    return fallback;
  }
}
