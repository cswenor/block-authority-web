import { Button } from "@/components/ui/button"
import Link from "next/link"

export function OurStory() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="mb-8 text-3xl font-bold">Our Story</h2>
          <div className="space-y-6 text-lg text-muted-foreground">
            <p>
              Block Authority was born from a shared vision among four blockchain industry veterans. 
              Having individually built successful blockchain ventures, we recognized a critical gap 
              in the enterprise space: the need for experienced founders who understand both the 
              technical complexities and business implications of blockchain technology.
            </p>
            <p>
              Our journey began in 2021 when we came together to create a different kind of 
              blockchain consultancy. One that doesn&apos;t just implement technology, but truly 
              understands the founder&apos;s perspective and the challenges of building successful 
              blockchain ventures.
            </p>
            <p>
              Today, we&apos;re proud to have helped numerous enterprises successfully navigate their 
              blockchain journey, bringing our founder&apos;s experience and battle-tested expertise 
              to every project we undertake.
            </p>
          </div>
          <div className="mt-12">
            <Button asChild>
              <Link href="/case-studies">View Our Success Stories</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}