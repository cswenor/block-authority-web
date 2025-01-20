// app/consultation/page.tsx
import { Metadata } from "next"
import { ConsultationForm } from "@/components/consultation-form"
import { type ProjectType } from "@/lib/constants"

export const metadata: Metadata = {
  title: "Schedule a Consultation | Block Authority",
  description: "Schedule a consultation to discuss your blockchain needs",
}

export const viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "white" },
    { media: "(prefers-color-scheme: dark)", color: "black" }
  ]
}

interface PageProps {
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function ConsultationPage({
  searchParams,
}: PageProps) {
  const projectType = searchParams?.type as ProjectType | undefined

  return (
    <div className="container max-w-2xl py-20">
      <div className="space-y-8">
        <div className="space-y-2">
          <h1 className="text-3xl font-bold">Schedule a Consultation</h1>
          <p className="text-muted-foreground">
            Tell us about your project and we'll get back to you within 24 hours.
          </p>
        </div>
        <ConsultationForm defaultType={projectType || "other"} />
      </div>
    </div>
  )
}