"use client"

import { ReactNode } from "react"
import Link from "next/link"
import { clientAnalytics as analytics } from "@/lib/analytics/client"

interface AnalyticsLinkProps {
  href: string
  eventName: string
  eventData?: Record<string, any>
  children: ReactNode
  className?: string
}

export function AnalyticsLink({
  href,
  eventName,
  eventData,
  children,
  className
}: AnalyticsLinkProps) {
  const handleClick = () => {
    analytics.track(eventName, eventData)
  }

  return (
    <Link href={href} onClick={handleClick} className={className}>
      {children}
    </Link>
  )
}