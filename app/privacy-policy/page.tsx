import { PageHero } from "@/components/site/PageHero";
import { Section } from "@/components/site/Section";

export const metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for The Suit Depot marketing website.",
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero title="Privacy Policy" text="A plain-language website policy draft for client review before launch." />
      <Section title="Website privacy">
        <div className="grid gap-6 text-lg leading-8 text-slate">
          <p>
            This website collects information submitted through the contact form, including name, phone, email, and message details. The information is used to respond to inquiries and provide showroom support.
          </p>
          <p>
            The site may use basic analytics, embedded maps, and external links to The Suit Depot&apos;s Shopify store and social profiles. Those services may process information under their own policies.
          </p>
          <p>
            This policy is a launch draft and should be reviewed by the client before publication.
          </p>
        </div>
      </Section>
    </>
  );
}
