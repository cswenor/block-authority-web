import Link from "next/link"

export default function NotFound() {
    return (
      <div className="container flex h-[calc(100vh-8rem)] items-center justify-center">
        <div className="space-y-4 text-center">
          <h1 className="text-4xl font-bold">404</h1>
          <p className="text-lg text-muted-foreground">
            Page not found
          </p>
          <Link
            href="/"
            className="inline-block rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
          >
            Go back home
          </Link>
        </div>
      </div>
    )
  }