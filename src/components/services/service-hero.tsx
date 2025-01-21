export function ServiceHero() {
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
            {/* Main service cycle circle */}
            <circle cx="12" cy="12" r="8" />
            
            {/* Service connection points */}
            <circle cx="12" cy="4" r="1" className="fill-primary/10" />
            <circle cx="20" cy="12" r="1" className="fill-primary/10" />
            <circle cx="12" cy="20" r="1" className="fill-primary/10" />
            <circle cx="4" cy="12" r="1" className="fill-primary/10" />
            
            {/* Inner service elements */}
            <path d="M12 8v8" />
            <path d="M8 12h8" />
            
            {/* Outer service connections */}
            <path d="M12 2v2" strokeDasharray="2 2" />
            <path d="M22 12h-2" strokeDasharray="2 2" />
            <path d="M12 22v-2" strokeDasharray="2 2" />
            <path d="M2 12h2" strokeDasharray="2 2" />
            
            {/* Curved service flow indicators */}
            <path d="M15.5 8.5a5 5 0 01-7 7" />
            <path d="M8.5 8.5a5 5 0 017 7" />
          </svg>
        </div>
  
        {/* Content */}
        <div className="container relative py-20 lg:py-32">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
                Blockchain Services
              </h1>
              <p className="max-w-[60ch] text-lg text-muted-foreground">
                From strategy to implementation, we provide end-to-end blockchain solutions 
                designed to transform your business operations and unlock new opportunities.
              </p>
            </div>
          </div>
        </div>
      </section>
    )
  }