// components/about/about-hero.tsx
export function AboutHero() {
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
            <circle cx="12" cy="12" r="3" />
            <path d="M12 9v-6" />
            <path d="M12 21v-6" />
            <path d="M9 12h-6" />
            <path d="M21 12h-6" />
            <circle cx="12" cy="3" r="1.5" className="fill-primary/10" />
            <circle cx="12" cy="21" r="1.5" className="fill-primary/10" />
            <circle cx="3" cy="12" r="1.5" className="fill-primary/10" />
            <circle cx="21" cy="12" r="1.5" className="fill-primary/10" />
            <path d="M18.364 5.636a9 9 0 010 12.728" strokeDasharray="2 4" />
            <path d="M5.636 5.636a9 9 0 000 12.728" strokeDasharray="2 4" />
          </svg>
        </div>
  
        {/* Content */}
        <div className="container relative py-20 lg:py-32">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Building the Future of Enterprise Blockchain
            </h1>
            <p className="mt-6 text-lg text-muted-foreground">
              Four founders united by a vision to transform how enterprises leverage blockchain technology. 
              Meet the team driving innovation in the blockchain space.
            </p>
          </div>
        </div>
      </section>
    )
  }