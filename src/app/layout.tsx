import "./globals.css"
import { Inter } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Navbar } from "@/components/layout/navbar"
import { Footer } from "@/components/layout/footer"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: {
    default: "Block Authority - Enterprise Blockchain Solutions",
    template: "%s | Block Authority"
  },
  description: "Enterprise blockchain solutions built by founders, delivering cutting-edge technology and strategic implementation.",
  keywords: [
    "Blockchain",
    "Enterprise Solutions",
    "Web3",
    "Consulting",
    "Development"
  ],
  authors: [
    {
      name: "Block Authority"
    }
  ],
  creator: "Block Authority",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://blockauthority.com",
    title: "Block Authority - Enterprise Blockchain Solutions",
    description: "Enterprise blockchain solutions built by founders",
    siteName: "Block Authority"
  },
  twitter: {
    card: "summary_large_image",
    title: "Block Authority",
    description: "Enterprise blockchain solutions built by founders",
    creator: "@blockauthority"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.className
      )}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="relative flex min-h-screen flex-col antialiased">
            <Navbar />
            <main className="flex-1">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}