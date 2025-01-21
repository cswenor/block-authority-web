import { Metadata } from "next"
import { ServicesNav } from "@/components/services/services-nav"
import { ServiceHero } from "@/components/services/service-hero"
import { StrategicConsulting } from "@/components/services/strategic-consulting"
import { SolutionDevelopment } from "@/components/services/solution-development"
import { Implementation } from "@/components/services/implementation"
import { Training } from "@/components/services/training"

export const metadata: Metadata = {
  title: "Services | Block Authority",
  description: "Comprehensive blockchain solutions and services for enterprises",
}

export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      <ServiceHero />
      <ServicesNav />
      <div className="flex flex-col divide-y">
        <section id="strategic-consulting">
          <StrategicConsulting />
        </section>
        <section id="solution-development">
          <SolutionDevelopment />
        </section>
        <section id="implementation">
          <Implementation />
        </section>
        <section id="training">
          <Training />
        </section>
      </div>
    </div>
  )
}