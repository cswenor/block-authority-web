import { Metadata } from "next"
import { AboutHero } from "@/components/about/about-hero"
import { OurStory } from "@/components/about/our-story"
import { FounderHighlights } from "@/components/about/founder-highlights"
import { FounderProfiles } from "@/components/about/founder-profiles"

export const metadata: Metadata = {
  title: "About Us | Block Authority",
  description: "Meet the founders behind Block Authority and learn about our mission to transform enterprise blockchain.",
}

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <OurStory />
      <FounderHighlights />
      <FounderProfiles />
    </div>
  )
}