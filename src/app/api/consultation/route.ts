// app/api/consultation/route.ts
import { NextResponse } from "next/server"
import { Resend } from "resend"
import { consultationFormSchema } from "@/lib/schema"
import { render } from "@react-email/render"
import { TeamNotificationEmail } from "@/components/emails/team-notification-email"
import { ClientConfirmationEmail } from "@/components/emails/client-confirmation-email"
import { serverAnalytics } from "@/lib/analytics/server"
import { projectTypeLabels } from "@/lib/constants"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const body = await request.json()
    
    const result = consultationFormSchema.safeParse(body)
    if (!result.success) {
      console.error("Validation error:", result.error)
      return NextResponse.json(
        { error: "Invalid form data", details: result.error.errors },
        { status: 400 }
      )
    }

    const { name, email, phone, company, projectType, message } = result.data

    serverAnalytics.track("consultation_form_submitted", {
      projectType,
      hasCompany: !!company,
      hasPhone: !!phone,
    })

    try {
      // Create email components
      const teamEmail = TeamNotificationEmail({ 
        name, 
        email,
        phone, 
        company, 
        projectType, 
        message 
      })

      const clientEmail = ClientConfirmationEmail({ 
        name,
        projectType
      })

      // Render to HTML
      const [teamEmailHtml, clientEmailHtml] = await Promise.all([
        render(teamEmail),
        render(clientEmail)
      ])

      // Send emails
      await Promise.all([
        resend.emails.send({
          from: "Block Authority <notifications@blockauthority.com>",
          to: ["contact@voi.network"],
          subject: `New Consultation Request - ${projectTypeLabels[projectType]}`,
          html: teamEmailHtml,
          replyTo: email,
        }),

        resend.emails.send({
          from: "Block Authority <notifications@blockauthority.com>",
          to: [email],
          subject: "Thank you for your interest in Block Authority",
          html: clientEmailHtml,
        })
      ])

      return NextResponse.json({ 
        success: true, 
        message: "Consultation request received"
      })
    } catch (emailError) {
      console.error("Email sending error:", emailError)
      return NextResponse.json(
        { error: "Failed to send email notification" },
        { status: 500 }
      )
    }
  } catch (error) {
    console.error("API route error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}