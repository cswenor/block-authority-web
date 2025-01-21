import { Metadata } from "next"
import { CaseStudyGrid } from "@/components/case-studies/case-study-grid"
import { CaseStudyHero } from "@/components/case-studies/case-study-hero"

export const metadata: Metadata = {
  title: "Case Studies | Block Authority",
  description: "Explore our successful blockchain implementations and solutions across various industries.",
}

export default function CaseStudiesPage() {
  return (
    <div className="flex flex-col gap-16 pb-20">
      <CaseStudyHero />
      <CaseStudyGrid />
    </div>
  )
}