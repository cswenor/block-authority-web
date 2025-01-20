import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Code2, BarChart, Lightbulb, Rocket, Target } from "lucide-react"
  
  const features = [
    {
      title: "Founded Multiple Successful Ventures",
      description: "Built and scaled multiple blockchain platforms from ground up, including Layer 1 solutions and DeFi protocols.",
      icon: Rocket,
    },
    {
      title: "Deep Technical Expertise",
      description: "Our team combines blockchain architecture expertise with enterprise-grade development experience.",
      icon: Code2,
    },
    {
      title: "Industry-Focused Solutions",
      description: "Custom blockchain solutions designed for your specific industry challenges and opportunities.",
      icon: Target,
    },
    {
      title: "Proven Innovation Track Record",
      description: "Consistently delivered cutting-edge solutions across DeFi, Gaming, and Enterprise blockchain applications.",
      icon: Lightbulb,
    },
    {
      title: "Full-Service Capability",
      description: "End-to-end service from strategy and development to deployment and maintenance.",
      icon: BarChart,
    },
  ]
  
  export function Features() {
    return (
      <section className="container space-y-6 py-8 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Why Choose Block Authority
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            We bring real-world blockchain experience to your business challenges.
          </p>
        </div>
  
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] md:grid-cols-3">
          {features.map((feature) => (
            <Card key={feature.title}>
              <CardHeader>
                <feature.icon className="h-10 w-10 text-primary" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    )
  }