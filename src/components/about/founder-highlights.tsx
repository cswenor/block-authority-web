import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import Link from "next/link"

const founders = [
  {
    name: "Chris Swenor",
    role: "Founder & CEO",
    image: "/api/placeholder/400/400",
    initials: "CS",
  },
  {
    name: "William Price",
    role: "Founder & CTO",
    image: "/api/placeholder/400/400",
    initials: "WP",
  },
  {
    name: "Benedict Dixon",
    role: "Founder & CSO",
    image: "/api/placeholder/400/400",
    initials: "BD",
  },
  {
    name: "Shanthi Purushotham",
    role: "Founder & COO",
    image: "/api/placeholder/400/400",
    initials: "SP",
  },
]

export function FounderHighlights() {
  return (
    <section className="border-t bg-muted/50 py-24">
      <div className="container">
        <div className="text-center">
          <h2 className="mb-16 text-3xl font-bold">Meet Our Founders</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {founders.map((founder) => (
              <Link 
                key={founder.name} 
                href={`#${founder.name.toLowerCase().replace(" ", "-")}`}
                className="group"
              >
                <Card className="overflow-hidden p-6 transition-colors hover:bg-accent">
                  <div className="flex flex-col items-center gap-4">
                    <Avatar className="h-32 w-32">
                      <AvatarImage src={founder.image} alt={founder.name} />
                      <AvatarFallback>{founder.initials}</AvatarFallback>
                    </Avatar>
                    <div className="text-center">
                      <h3 className="font-semibold">{founder.name}</h3>
                      <p className="text-sm text-muted-foreground">{founder.role}</p>
                    </div>
                  </div>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}