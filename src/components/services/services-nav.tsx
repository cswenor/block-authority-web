"use client"

import { cn } from "@/lib/utils"
import { useEffect, useState } from "react"

const services = [
  {
    id: "strategic-consulting",
    name: "Strategic Consulting",
  },
  {
    id: "solution-development",
    name: "Solution Development",
  },
  {
    id: "implementation",
    name: "Implementation",
  },
  {
    id: "training",
    name: "Training & Education",
  },
]

export function ServicesNav() {
  const [activeSection, setActiveSection] = useState("")

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      {
        rootMargin: "-50% 0px -50% 0px",
      }
    )

    services.forEach(({ id }) => {
      const element = document.getElementById(id)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <div className="w-full border-b bg-background">
      <nav className="container">
        <ul className="flex h-14 items-center gap-8">
          {services.map(({ id, name }) => (
            <li key={id}>
              <a
                href={`#${id}`}
                className={cn(
                  "inline-block text-sm transition-colors hover:text-primary",
                  activeSection === id
                    ? "text-primary"
                    : "text-muted-foreground"
                )}
                onClick={(e) => {
                  e.preventDefault()
                  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                {name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}