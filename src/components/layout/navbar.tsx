// components/layout/navbar.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Link href="/" className="text-xl font-semibold">
            Block Authority
          </Link>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="/about" className="text-sm hover:text-primary">
              About
            </Link>
            <Link href="/case-studies" className="text-sm hover:text-primary">
              Case Studies
            </Link>
            <Link href="/services" className="text-sm hover:text-primary">
              Services
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Button asChild variant="default" className="hidden md:inline-flex">
            <Link href="/consultation">
              Get Started
            </Link>
          </Button>
          <ThemeToggle />
        </div>
      </div>
    </header>
  )
}