import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { LinkedinIcon } from "lucide-react"

const founders = [
  {
    name: "Chris Swenor",
    role: "Founder & CEO",
    image: "/api/placeholder/400/400",
    initials: "CS",
    bio: [
      "Chris is a serial entrepreneur with over 15 years of experience in blockchain and software development. Prior to Block Authority, he founded and scaled multiple successful blockchain ventures, including a leading Layer 1 blockchain platform.",
      "His expertise spans technical architecture, business strategy, and team building. Chris is passionate about helping enterprises understand and implement blockchain technology in ways that create real business value."
    ],
    expertise: [
      "Blockchain Architecture",
      "Enterprise Strategy",
      "Product Development",
      "Team Leadership"
    ],
    achievements: [
      "Built and sold two blockchain startups",
      "Developed enterprise blockchain solutions for Fortune 500 companies",
      "Regular speaker at major blockchain conferences",
      "Advisor to multiple blockchain ventures"
    ],
    linkedin: "https://linkedin.com/in/chrisswenor"
  },
  {
    name: "William Price",
    role: "Founder & CAO",
    image: "/api/placeholder/400/400",
    initials: "WP",
    bio: [
      "William brings deep technical expertise in blockchain architecture and implementation. With a background in cryptography and distributed systems, he has been at the forefront of blockchain technology since 2013.",
      "His focus on security and scalability has been instrumental in developing robust enterprise blockchain solutions that stand the test of time."
    ],
    expertise: [
        "Strategic Planning",
        "Enterprise Consulting",
        "Market Analysis",
        "Risk Management"
      ],
    achievements: [
      "Led development of multiple consensus protocols",
      "Published research on blockchain scalability",
      "Core contributor to major blockchain projects",
      "Patent holder for blockchain security innovations"
    ],
    linkedin: "https://linkedin.com/in/williamprice"
  },
  {
    name: "Benedict Dixon",
    role: "Founder & CEccoO",
    image: "/api/placeholder/400/400",
    initials: "BD",
    bio: [
      "Benedict's background in strategy consulting and blockchain technology makes him uniquely qualified to help enterprises navigate their blockchain journey. He has advised numerous Fortune 500 companies on blockchain adoption.",
      "His approach combines deep technical understanding with practical business acumen, ensuring solutions that deliver measurable value."
    ],
    expertise: [
        "System Architecture",
        "Smart Contracts",
        "Security",
        "Consensus Mechanisms"
    ],
    achievements: [
      "Former blockchain strategy lead at major consulting firm",
      "Developed blockchain strategies for multiple industries",
      "Published author on enterprise blockchain adoption",
      "Recognized thought leader in blockchain space"
    ],
    linkedin: "https://linkedin.com/in/benedictdixon"
  },
  {
    name: "Shanthi Purushotham",
    role: "Founder & COO",
    image: "/api/placeholder/400/400",
    initials: "SP",
    bio: [
      "Shanthi's expertise in operations and scaling blockchain businesses has been crucial to Block Authority's success. Her experience in both traditional enterprise and blockchain startups provides a valuable perspective on organizational transformation.",
      "She is passionate about building efficient processes and teams that can deliver complex blockchain projects successfully."
    ],
    expertise: [
      "Operations Management",
      "Project Delivery",
      "Team Building",
      "Process Optimization"
    ],
    achievements: [
      "Scaled multiple blockchain organizations",
      "Led successful enterprise blockchain implementations",
      "Developed blockchain training programs",
      "Built global blockchain development teams"
    ],
    linkedin: "https://linkedin.com/in/shanthipurushotham"
  }
]

export function FounderProfiles() {
  return (
    <section className="py-24">
      <div className="container">
        <div className="space-y-24">
          {founders.map((founder) => (
            <div 
              key={founder.name}
              id={founder.name.toLowerCase().replace(" ", "-")}
              className="scroll-m-20"
            >
              <Card>
                <CardContent className="p-8">
                  <div className="grid gap-8 lg:grid-cols-[240px_1fr]">
                    <div className="space-y-4 text-center lg:text-left">
                      <Avatar className="h-40 w-40 mx-auto lg:mx-0">
                        <AvatarImage src={founder.image} alt={founder.name} />
                        <AvatarFallback>{founder.initials}</AvatarFallback>
                      </Avatar>
                      <div>
                        <h3 className="text-xl font-bold">{founder.name}</h3>
                        <p className="text-muted-foreground">{founder.role}</p>
                      </div>
                      <a
                        href={founder.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary"
                      >
                        <LinkedinIcon className="h-4 w-4" />
                        LinkedIn Profile
                      </a>
                    </div>

                    <div className="space-y-8">
                      <div className="space-y-4">
                        {founder.bio.map((paragraph, i) => (
                          <p key={i} className="text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Areas of Expertise</h4>
                        <div className="flex flex-wrap gap-2">
                          {founder.expertise.map((item) => (
                            <Badge key={item} variant="secondary">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>

                      <div className="space-y-4">
                        <h4 className="font-semibold">Key Achievements</h4>
                        <ul className="grid gap-2 sm:grid-cols-2">
                          {founder.achievements.map((achievement) => (
                            <li 
                              key={achievement}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <div className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}