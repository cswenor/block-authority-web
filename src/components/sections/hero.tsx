// components/sections/hero.tsx
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="container py-24 md:py-32">
      <div className="space-y-10 md:space-y-12">
        <div className="space-y-8">
          <h1 className="max-w-3xl text-4xl md:text-6xl font-bold leading-tight tracking-tight">
            Enterprise{'\n'}
            Blockchain{' '}
            <span className="text-primary">Built By{'\n'}
            Founders</span>
          </h1>
          <p className="max-w-[600px] text-lg text-muted-foreground">
            From ideation to implementation, we transform businesses through blockchain innovation. 
            Expertise that comes from building and scaling successful blockchain ventures.
          </p>
        </div>
        <div className="flex flex-wrap gap-4">
          <Button
            size="lg"
            className="rounded-full bg-primary hover:bg-primary/90"
          >
            Schedule a Consultation
          </Button>
          <Button
            variant="outline"
            size="lg"
            className="rounded-full"
          >
            View Our Work
          </Button>
        </div>
      </div>
    </div>
  )
}