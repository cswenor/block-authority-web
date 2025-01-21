import { CodeSquare, GitBranch, Boxes, Shield } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function SolutionDevelopment() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="grid gap-16 lg:grid-cols-2">
          <div className="space-y-8">
            <div className="flex items-center gap-4">
              <div className="rounded-lg bg-primary/10 p-2">
                <CodeSquare className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold">Solution Development</h2>
            </div>

            <p className="text-lg text-muted-foreground">
              Our expert development team builds custom blockchain solutions that solve 
              real business challenges. From smart contracts to complete decentralized 
              applications, we deliver secure, scalable, and maintainable code.
            </p>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">Core Development Services</h3>
              <ul className="grid gap-6">
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <GitBranch className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Smart Contract Development</span>
                    <p className="mt-1 text-muted-foreground">
                      Custom smart contracts optimized for security and gas efficiency. 
                      Full testing suite and documentation included.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Boxes className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">DApp Development</span>
                    <p className="mt-1 text-muted-foreground">
                      Full-stack decentralized applications with modern front-end 
                      interfaces and robust back-end architecture.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="rounded-lg bg-primary/10 p-2">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <span className="font-medium">Security & Best Practices</span>
                    <p className="mt-1 text-muted-foreground">
                      Industry-leading security practices, code audits, and 
                      extensive testing to ensure robust, production-ready solutions.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <Button asChild size="lg">
              <Link href="/consultation?type=solution-development">
                Start Your Development
              </Link>
            </Button>
          </div>

          <div className="rounded-lg border bg-card p-8 text-card-foreground">
            <h3 className="text-xl font-semibold">Development Lifecycle</h3>
            <div className="mt-8 space-y-8">
              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Technical Specification (2-3 weeks)</h4>
                  <p className="text-sm text-muted-foreground">
                    Detailed technical planning, architecture design, and specification 
                    documentation.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="absolute left-0 top-0 h-full w-px bg-border" />
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Development & Testing (2-3 months)</h4>
                  <p className="text-sm text-muted-foreground">
                    Iterative development with continuous testing, security audits, 
                    and client feedback loops.
                  </p>
                </div>
              </div>

              <div className="relative pl-8">
                <div className="space-y-2">
                  <div className="absolute left-0 top-2 -ml-1.5 h-3 w-3 rounded-full border-2 border-background bg-primary" />
                  <h4 className="font-medium">Deployment & Support (1+ months)</h4>
                  <p className="text-sm text-muted-foreground">
                    Careful deployment process, thorough documentation, and ongoing 
                    technical support.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4">
              <div className="rounded-lg bg-muted p-4">
                <p className="font-medium">Technologies We Work With:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Ethereum</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Solidity</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">Web3.js</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">IPFS</span>
                  <span className="rounded-full bg-primary/10 px-3 py-1 text-sm">React</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}