import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function CTA() {
  return (
    <section className="border-t bg-slate-50/50 dark:bg-slate-900/50">
      <div className="container flex flex-col items-center justify-center gap-4 py-12 text-center md:py-20">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-5xl">
          Ready to Transform Your Business?
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Schedule a consultation to discuss how blockchain can revolutionize your operations.
        </p>
        <div className="flex flex-col gap-2 sm:flex-row sm:gap-4">
          <Button size="lg" className="gap-2">
            Schedule a Consultation
            <ArrowRight className="h-4 w-4" />
          </Button>
          <Button size="lg" variant="outline">
            Download Resources
          </Button>
        </div>
      </div>
    </section>
  )
}