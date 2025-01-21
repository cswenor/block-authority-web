// components/services/strategic-consulting.tsx
import { Brain } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function StrategicConsulting() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Brain className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Strategic Consulting</h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Our strategic consulting service helps organizations navigate the complexities 
              of blockchain adoption. We combine deep technical expertise with business 
              acumen to create actionable strategies that drive real value.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What We Offer</h3>
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <span className="font-medium">Technology Assessment</span>
                    <p className="mt-1 text-muted-foreground">
                      We evaluate various blockchain platforms and protocols to find 
                      the perfect fit for your use case.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <span className="font-medium">Implementation Strategy</span>
                    <p className="mt-1 text-muted-foreground">
                      Develop a clear roadmap for blockchain adoption, including 
                      timelines, resources, and milestones.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="mt-1 h-2 w-2 rounded-full bg-primary" />
                  <div>
                    <span className="font-medium">Risk Assessment</span>
                    <p className="mt-1 text-muted-foreground">
                      Comprehensive analysis of technical, operational, and regulatory 
                      risks with mitigation strategies.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <Button asChild size="lg">
              <Link href="/consultation?type=strategic-consulting">
                Get Started with Consulting
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-8 text-card-foreground">
            <h3 className="text-xl font-semibold">Engagement Process</h3>
            <div className="mt-8 space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Discovery Phase (Week 1)</h4>
                  <p className="text-sm text-muted-foreground">
                    Initial assessment of your business needs, objectives, and current 
                    technical infrastructure.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Analysis Phase (Week 2)</h4>
                  <p className="text-sm text-muted-foreground">
                    Deep dive into technical feasibility, market analysis, and 
                    regulatory requirements.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Strategy Development (Week 3-4)</h4>
                  <p className="text-sm text-muted-foreground">
                    Creation of comprehensive implementation plan and presentation 
                    of findings and recommendations.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-muted p-4">
              <p className="font-medium">Typical Engagement: 2-4 weeks</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Flexible scheduling based on project scope and requirements
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}