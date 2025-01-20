"use client"

import { useState } from "react"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { toast } from "sonner"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"
import { Loader2 } from "lucide-react"
import { useRouter } from 'next/navigation'
import { consultationFormSchema } from "@/lib/schema"
import type { ConsultationFormValues } from "@/lib/schema"

interface ConsultationFormProps {
  defaultType?: ConsultationFormValues["projectType"]
}

export function ConsultationForm({ defaultType = "other" }: ConsultationFormProps) {
  const [isLoading, setIsLoading] = useState(false)
  const [submitError, setSubmitError] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const router = useRouter()

  const form = useForm<ConsultationFormValues>({
    resolver: zodResolver(consultationFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      projectType: defaultType,
      message: "",
    },
  })

  async function onSubmit(values: ConsultationFormValues) {
    setIsLoading(true)
    setSubmitError(null)
    
    try {
      const response = await fetch('/api/consultation', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong')
      }

      setIsSubmitted(true)
      form.reset()
      toast.success("Request submitted successfully! We'll get back to you within 24 hours.")
      
    } catch (error) {
      setSubmitError(error instanceof Error ? error.message : 'Failed to submit form. Please try again.')
      toast.error("Something went wrong. Please try again or contact us directly.")
    }
    setIsLoading(false)
  }

  if (isSubmitted) {
    return (
      <Alert className="bg-green-50 border-green-200">
        <AlertTitle className="text-green-800">Thank you for your submission!</AlertTitle>
        <AlertDescription className="text-green-700">
          We've received your consultation request and will be in touch within 24 hours.
          In the meantime, if you have any questions, feel free to contact us directly (help@blockauthority.com).
        </AlertDescription>
      </Alert>
    )
  }

  return (
    <div className="space-y-6">
      {submitError && (
        <Alert variant="destructive">
          <AlertTitle>Error</AlertTitle>
          <AlertDescription>{submitError}</AlertDescription>
        </Alert>
      )}
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your phone number" type="tel" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="company"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Company (Optional)</FormLabel>
                <FormControl>
                  <Input placeholder="Your company name" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <FormField
          control={form.control}
          name="projectType"
          render={({ field }) => (
            <FormItem className="space-y-3">
              <FormLabel>Project Type</FormLabel>
              <FormControl>
                <RadioGroup
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                  className="flex flex-col space-y-1"
                >
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="strategic-consulting" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Strategic Consulting
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="solution-development" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Solution Development
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="implementation" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Implementation Services
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="training" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Training & Education
                    </FormLabel>
                  </FormItem>
                  <FormItem className="flex items-center space-x-3 space-y-0">
                    <FormControl>
                      <RadioGroupItem value="other" />
                    </FormControl>
                    <FormLabel className="font-normal">
                      Other / Not Sure Yet
                    </FormLabel>
                  </FormItem>
                </RadioGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Project Details</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Tell us briefly about your project or idea..."
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormDescription>
                Brief overview of your project or requirements
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

            <Button 
                    type="submit" 
                    className="w-full sm:w-auto"
                    disabled={isLoading}
                >
                {isLoading ? (
                <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                </>
                ) : (
                "Submit Request"
                )}
          </Button>
      </form>
    </Form>
    </div>
  )
}