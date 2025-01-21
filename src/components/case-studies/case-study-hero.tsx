export function CaseStudyHero() {
    return (
      <section className="border-b bg-muted/50">
        <div className="container py-20 lg:py-32">
          <div className="flex flex-col gap-8 lg:gap-12">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Our Success Stories
              </h1>
              <p className="max-w-[60ch] text-lg text-muted-foreground">
                Explore how we&apos;ve helped businesses transform their operations with blockchain technology.
                Each case study represents a unique challenge solved with innovative solutions.
              </p>
            </div>
            <div className="flex flex-col gap-2 md:flex-row md:gap-4">
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">20+</span>
                <span className="text-sm text-muted-foreground">Projects Delivered</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">$100M+</span>
                <span className="text-sm text-muted-foreground">Managed on Chain</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-3xl font-bold">4</span>
                <span className="text-sm text-muted-foreground">Major Platforms Built</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }