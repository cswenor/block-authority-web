import { ScrollText, Layers, ArrowUpRight, GamepadIcon} from "lucide-react"
import { CaseStudyCard } from "./case-study-card"

const caseStudies = [
  {
    title: "High-Performance Layer 1 Blockchain",
    shortTitle: "Layer 1 Blockchain",
    description: "Built and launched a high-performance blockchain network capable of processing 50,000 transactions per second",
    icon: Layers,
    tags: ["Consensus", "Network Design", "Tokenomics"],
    metrics: [
      { label: "TPS Achieved", value: "50,000" },
      { label: "Network Nodes", value: "1,000+" },
      { label: "Market Cap", value: "$100M+" }
    ],
    challenge: "Creating a scalable blockchain infrastructure that maintains decentralization while achieving high throughput",
    solution: "Implemented a novel consensus mechanism and optimized network architecture",
    slug: "layer-1-blockchain"
  },
  {
    title: "Enterprise Blockchain Development Platform",
    shortTitle: "Development Platform",
    description: "Created comprehensive tools and frameworks enabling rapid blockchain development for enterprise clients",
    icon: ScrollText,
    tags: ["SDK", "Smart Contracts", "Documentation"],
    metrics: [
      { label: "Active Developers", value: "5,000+" },
      { label: "Projects Built", value: "200+" },
      { label: "Time Saved", value: "60%" }
    ],
    challenge: "Simplifying blockchain development for enterprise teams while maintaining security and compliance",
    solution: "Developed an intuitive SDK with built-in security features and comprehensive documentation",
    slug: "dev-platform"
  },
  {
    title: "Advanced Decentralized Exchange",
    shortTitle: "Decentralized Exchange",
    description: "Launched a DEX featuring innovative trading mechanisms and deep liquidity pools",
    icon: ArrowUpRight,
    tags: ["DeFi", "AMM", "Liquidity"],
    metrics: [
      { label: "Daily Volume", value: "$10M+" },
      { label: "Total Liquidity", value: "$50M+" },
      { label: "Active Users", value: "10,000+" }
    ],
    challenge: "Building a high-performance DEX with minimal slippage and maximum security",
    solution: "Implemented advanced AMM algorithms and robust security measures",
    slug: "dex-platform"
  },
  {
    title: "Web3 Gaming Ecosystem",
    shortTitle: "Gaming Platform",
    description: "Founded a comprehensive blockchain gaming platform with integrated NFT marketplace",
    icon: GamepadIcon,
    tags: ["NFTs", "GameFi", "Web3"],
    metrics: [
      { label: "Monthly Players", value: "100,000+" },
      { label: "NFTs Minted", value: "1M+" },
      { label: "Games Hosted", value: "25+" }
    ],
    challenge: "Creating an engaging gaming experience while maintaining true asset ownership",
    solution: "Developed a seamless integration between traditional gaming and blockchain technology",
    slug: "gaming-platform"
  }
]

export function CaseStudyGrid() {
  return (
    <div className="container">
      <div className="grid gap-8 md:grid-cols-2">
        {caseStudies.map((study) => (
          <CaseStudyCard key={study.slug} {...study} />
        ))}
      </div>
    </div>
  )
}