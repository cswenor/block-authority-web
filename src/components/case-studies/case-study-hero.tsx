export function CaseStudyHero() {
    return (
      <section className="relative border-b bg-muted/50 overflow-hidden">
        {/* Background SVG */}
        <div className="absolute right-0 top-1/2 -translate-y-1/2 opacity-10 md:opacity-20">
          <svg
            width="300"
            height="300"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-primary w-[200px] h-[200px] sm:w-[300px] sm:h-[300px] md:w-[400px] md:h-[400px] lg:w-[600px] lg:h-[600px]"
          >
            {/* Chart-like elements */}
            <path d="M3 3v18h18" />
            
            {/* Rising steps representing success/growth */}
            <path d="M6 15l4-4 4 4 4-4" />
            
            {/* Success indicators */}
            <circle cx="6" cy="15" r="1" className="fill-primary/10" />
            <circle cx="10" cy="11" r="1" className="fill-primary/10" />
            <circle cx="14" cy="15" r="1" className="fill-primary/10" />
            <circle cx="18" cy="11" r="1" className="fill-primary/10" />
            
            {/* Additional metric visualization elements */}
            <path d="M6 18v-6" strokeDasharray="2 2" />
            <path d="M10 18v-10" strokeDasharray="2 2" />
            <path d="M14 18v-6" strokeDasharray="2 2" />
            <path d="M18 18v-10" strokeDasharray="2 2" />
          </svg>
        </div>
  
        {/* Content */}
        <div className="container relative py-20 lg:py-32">
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