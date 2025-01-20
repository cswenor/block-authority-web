import * as z from "zod"

export const consultationFormSchema = z.object({
    name: z.string().min(2, {
      message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
      message: "Please enter a valid email address.",
    }),
    phone: z.string().optional(),
    company: z.string().optional(),
    projectType: z.enum(["strategic-consulting", "solution-development", "implementation", "training", "other"], {
      required_error: "Please select a project type.",
    }),
    message: z.string().min(10, {
      message: "Message must be at least 10 characters.",
    }).max(1000, {
      message: "Message must not be longer than 1000 characters.",
    }),
  })

  export type ConsultationFormValues = z.infer<typeof consultationFormSchema>