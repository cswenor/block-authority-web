// components/services/training.tsx
import { GraduationCap, Users, Code2, Target } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Training() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <GraduationCap className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Training & Education</h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Transform your team&apos;s blockchain capabilities with our comprehensive training programs. 
              We offer customized workshops and courses designed to bridge the knowledge gap and 
              empower your organization with practical blockchain expertise.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Training Modules</h3>
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Technical Development</span>
                    <p className="mt-1 text-muted-foreground">
                      Hands-on training in smart contract development, blockchain architecture, 
                      and decentralized application building.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Target className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Business Strategy</span>
                    <p className="mt-1 text-muted-foreground">
                      Understanding blockchain&apos;s business impact, use case identification, 
                      and implementation strategy.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Users className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Team Workshops</span>
                    <p className="mt-1 text-muted-foreground">
                      Interactive sessions focused on your team&apos;s specific needs and 
                      project requirements.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <Button asChild size="lg">
              <Link href="/consultation?type=training">
                Start Learning
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-8 text-card-foreground">
            <h3 className="text-xl font-semibold">Training Approach</h3>
            <div className="mt-8 space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Assessment & Planning</h4>
                  <p className="text-sm text-muted-foreground">
                    We evaluate your team&apos;s current knowledge and design a customized 
                    training program that aligns with your goals.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Interactive Learning</h4>
                  <p className="text-sm text-muted-foreground">
                    Hands-on workshops, real-world projects, and practical exercises 
                    ensure effective skill development.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Ongoing Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Continuous guidance and resources to support your team&apos;s learning journey.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium">Training Formats</p>
                <div className="mt-2 space-y-2 text-sm text-muted-foreground">
                  <p>• On-site workshops and training sessions</p>
                  <p>• Virtual instructor-led training</p>
                  <p>• Self-paced learning modules</p>
                  <p>• Custom curriculum development</p>
                </div>
              </div>

              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium">Duration & Flexibility</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Programs can be structured as intensive boot camps (1-2 weeks) or 
                  extended courses (4-12 weeks) based on your needs and schedule.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}