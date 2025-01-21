// components/layout/navbar.tsx
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { 
  Sheet, 
  SheetContent, 
  SheetTrigger,
  SheetTitle
} from "@/components/ui/sheet"
import { Menu } from "lucide-react"

export function Navbar() {
  return (
    <header className="border-b">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-6">
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="w-[300px]">
              <SheetTitle>Navigation Menu</SheetTitle>
              <div className="mt-6 flex flex-col space-y-6">
                <Link href="/" className="text-lg font-semibold">
                  Block Authority
                </Link>
                <div className="flex flex-col space-y-4">
                  <Link href="/about" className="text-sm hover:text-primary">
                    About
                  </Link>
                  <Link href="/case-studies" className="text-sm hover:text-primary">
                    Case Studies
                  </Link>
                  <Link href="/services" className="text-sm hover:text-primary">
                    Services
                  </Link>
                  <Link href="/consultation">
                    <Button className="w-full">Get Started</Button>
                  </Link>
                </div>
              </div>
            </SheetContent>
          </Sheet>

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