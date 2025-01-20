import { Hero } from "@/components/sections/hero"
import { Features } from "@/components/sections/features"
import { Services } from "@/components/sections/services"
import { Experience } from "@/components/sections/experience"
import { CTA } from "@/components/sections/cta"

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Services />
      <Experience />
      <CTA />
    </>
  )
}