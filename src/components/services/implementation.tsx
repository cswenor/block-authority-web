import { Cog, Gauge, Lock, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Implementation() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <Cog className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Implementation</h2>
            </div>

            <p className="text-lg text-muted-foreground">
              We handle the critical process of deploying your blockchain solution 
              to production. Our implementation service ensures a smooth transition 
              from development to live operations with maximum security and performance.
            </p>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold">Implementation Pillars</h3>
              <div className="grid gap-6 sm:grid-cols-2">
                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Network className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Infrastructure Setup</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Scalable node deployment, network configuration, and monitoring setup.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Lock className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Security Measures</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Comprehensive security audits, penetration testing, and key management.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Gauge className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Performance Tuning</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Optimization for high throughput, low latency, and efficient resource usage.
                  </p>
                </div>

                <div className="rounded-lg border p-4">
                  <div className="flex items-center gap-3">
                    <div className="rounded-lg bg-primary/10 p-2">
                      <Cog className="h-5 w-5 text-primary" />
                    </div>
                    <h4 className="font-medium">Integration</h4>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">
                    Seamless integration with existing systems and third-party services.
                  </p>
                </div>
              </div>
            </div>

            <Button asChild size="lg">
              <Link href="/consultation?type=implementation">
                Begin Implementation
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-8 text-card-foreground">
            <h3 className="text-xl font-semibold">Implementation Phases</h3>
            <div className="mt-8 space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Environment Setup (2-3 weeks)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Infrastructure provisioning</li>
                    <li>• Network configuration</li>
                    <li>• Security baseline establishment</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Testing & Optimization (1-2 months)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Performance testing</li>
                    <li>• Security audits</li>
                    <li>• Load testing and optimization</li>
                  </ul>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Production Deployment (2-3 months)</h4>
                  <ul className="mt-2 space-y-2 text-sm text-muted-foreground">
                    <li>• Phased rollout</li>
                    <li>• Monitoring setup</li>
                    <li>• Documentation and training</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="mt-8 rounded-lg bg-muted p-4">
              <p className="font-medium">Post-Implementation Support</p>
              <p className="mt-2 text-sm text-muted-foreground">
                Dedicated support team, 24/7 monitoring, and regular maintenance 
                updates ensure your blockchain solution runs smoothly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}