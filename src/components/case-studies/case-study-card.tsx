import type { LucideIcon } from 'lucide-react'
import { Badge } from "@/components/ui/badge"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface Metric {
  label: string
  value: string
}

interface CaseStudyCardProps {
  title: string
  description: string
  icon: LucideIcon
  tags: string[]
  metrics: Metric[]
  challenge: string
  solution: string
  slug: string
}

export function CaseStudyCard({
  title,
  description,
  icon: Icon,
  tags,
  metrics,
  challenge,
  solution,
  slug
}: CaseStudyCardProps) {
  return (
    <Card className="group overflow-hidden">
      <div className="border-b p-6">
        <div className="flex items-start gap-4">
          <div className="rounded-lg bg-primary/10 p-2">
            <Icon className="h-6 w-6 text-primary" />
          </div>
          <div className="space-y-1">
            <h3 className="font-semibold leading-tight">{title}</h3>
            <p className="text-sm text-muted-foreground">{description}</p>
          </div>
        </div>
      </div>
      <div className="space-y-4 p-6">
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Badge key={tag} variant="secondary">
              {tag}
            </Badge>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3">
          {metrics.map((metric) => (
            <div key={metric.label} className="space-y-1">
              <p className="text-xl font-semibold">{metric.value}</p>
              <p className="text-xs text-muted-foreground">{metric.label}</p>
            </div>
          ))}
        </div>
        <div className="space-y-2">
          <div>
            <span className="text-sm font-medium">Challenge:</span>
            <p className="text-sm text-muted-foreground">{challenge}</p>
          </div>
          <div>
            <span className="text-sm font-medium">Solution:</span>
            <p className="text-sm text-muted-foreground">{solution}</p>
          </div>
        </div>
        <Button asChild className="w-full" variant="outline">
          <Link href={`/case-studies/${slug}`}>
            Read Full Case Study
          </Link>
        </Button>
      </div>
    </Card>
  )
}