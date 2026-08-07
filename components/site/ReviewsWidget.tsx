import { getGoogleReviews } from "@/lib/google-reviews";
import { Testimonials } from "./Testimonials";

/**
 * Server component: fetches live Google reviews (cached hourly) and renders
 * them through the Testimonials carousel. Falls back to curated testimonials
 * when the Places API key/Place ID are not configured.
 */
export async function ReviewsWidget() {
  const { summary, reviews } = await getGoogleReviews();
  return <Testimonials summary={summary} reviews={reviews} />;
}
