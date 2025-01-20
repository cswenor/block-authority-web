import { Badge } from "@/components/ui/badge"
import { ScrollText, Layers, ArrowUpRight, GamepadIcon } from "lucide-react"

const experiences = [
  {
    title: "Layer 1 Blockchain",
    description: "Built and launched a high-performance blockchain network",
    icon: Layers,
    tags: ["Consensus", "Network Design", "Tokenomics"]
  },
  {
    title: "Development Platform",
    description: "Created tools and frameworks for blockchain developers",
    icon: ScrollText,
    tags: ["SDK", "Smart Contracts", "Documentation"]
  },
  {
    title: "Decentralized Exchange",
    description: "Launched a DEX with advanced trading features",
    icon: ArrowUpRight,
    tags: ["DeFi", "AMM", "Liquidity"]
  },
  {
    title: "Gaming Platform",
    description: "Founded a blockchain gaming ecosystem",
    icon: GamepadIcon,
    tags: ["NFTs", "GameFi", "Web3"]
  }
]

export function Experience() {
  return (
    <section className="container py-8 md:py-12 lg:py-24">
      <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
        <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
          Our Experience
        </h2>
        <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
          Track record of successful blockchain ventures and innovations
        </p>
      </div>

      <div className="mx-auto mt-16 grid max-w-5xl gap-6 sm:grid-cols-2">
        {experiences.map((exp) => (
          <div
            key={exp.title}
            className="group relative overflow-hidden rounded-lg border bg-background p-6 hover:border-primary"
          >
            <div className="flex items-center gap-4">
              <exp.icon className="h-10 w-10 text-primary" />
              <div>
                <h3 className="font-semibold">{exp.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {exp.description}
                </p>
              </div>
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {exp.tags.map((tag) => (
                <Badge key={tag} variant="secondary">
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}