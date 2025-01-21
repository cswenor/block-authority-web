// components/sections/hero.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <div className="relative overflow-hidden">
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
          {/* Central hexagon representing blockchain */}
          <path d="M12 2l4.5 2.6v5.2L12 12.4l-4.5-2.6V4.6z" />
          <path d="M16.5 4.6l4.5 2.6v5.2L16.5 15l-4.5-2.6V7.2z" />
          <path d="M7.5 4.6l4.5 2.6v5.2L7.5 15 3 12.4V7.2z" />
          <path d="M12 12.4l4.5 2.6v5.2L12 22.8l-4.5-2.6v-5.2z" />
          
          {/* Connection points */}
          <circle cx="12" cy="2" r="1" className="fill-primary/10" />
          <circle cx="21" cy="7.2" r="1" className="fill-primary/10" />
          <circle cx="21" cy="16.8" r="1" className="fill-primary/10" />
          <circle cx="12" cy="22" r="1" className="fill-primary/10" />
          <circle cx="3" cy="16.8" r="1" className="fill-primary/10" />
          <circle cx="3" cy="7.2" r="1" className="fill-primary/10" />
          
          {/* Decorative dotted connections */}
          <path d="M12 2l9 5.2" strokeDasharray="2 2" />
          <path d="M21 7.2v9.6" strokeDasharray="2 2" />
          <path d="M21 16.8l-9 5.2" strokeDasharray="2 2" />
          <path d="M12 22l-9-5.2" strokeDasharray="2 2" />
          <path d="M3 16.8v-9.6" strokeDasharray="2 2" />
          <path d="M3 7.2l9-5.2" strokeDasharray="2 2" />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative py-24 md:py-32">
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
              asChild
              size="lg"
              className="rounded-full bg-primary hover:bg-primary/90"
            >
              <Link href="/consultation">
                Schedule a Consultation
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="rounded-full"
            >
              <Link href="/case-studies">
                View Our Work
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}