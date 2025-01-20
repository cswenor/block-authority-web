import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { Button } from "@/components/ui/button"
  import { 
    Brain, 
    CodeSquare, 
    Cog, 
    GraduationCap,
    ArrowRight 
  } from "lucide-react"
  
  const services = [
    {
      title: "Strategic Consulting",
      description: "Expert guidance on blockchain strategy and implementation",
      icon: Brain,
      features: [
        "Blockchain feasibility assessment",
        "Technology selection",
        "Implementation roadmap",
        "2-4 week engagement"
      ],
      cta: "Learn More"
    },
    {
      title: "Solution Development",
      description: "Custom blockchain development and integration",
      icon: CodeSquare,
      features: [
        "Smart contract development",
        "DApp creation",
        "System integration",
        "3-6 month engagement"
      ],
      cta: "Start Building"
    },
    {
      title: "Implementation",
      description: "End-to-end blockchain solution deployment",
      icon: Cog,
      features: [
        "Production deployment",
        "Security audits",
        "Performance optimization",
        "6+ month engagement"
      ],
      cta: "Deploy Now"
    },
    {
      title: "Training & Education",
      description: "Comprehensive blockchain technology training",
      icon: GraduationCap,
      features: [
        "Technical workshops",
        "Team training",
        "Documentation",
        "Flexible scheduling"
      ],
      cta: "Start Learning"
    }
  ]
  
  export function Services() {
    return (
      <section className="container space-y-6 bg-slate-50 py-8 dark:bg-slate-900 md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h2 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Services
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Comprehensive blockchain solutions tailored to your business needs
          </p>
        </div>
  
        <div className="mx-auto grid justify-center gap-4 sm:grid-cols-2 md:max-w-[64rem] lg:grid-cols-4">
          {services.map((service) => (
            <Card key={service.title} className="flex flex-col">
              <CardHeader>
                <service.icon className="h-10 w-10 text-primary" />
                <CardTitle>{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-1">
                <ul className="space-y-2 text-sm">
                  {service.features.map((feature) => (
                    <li key={feature} className="flex items-center">
                      <ArrowRight className="mr-2 h-4 w-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full">{service.cta}</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>
    )
  }