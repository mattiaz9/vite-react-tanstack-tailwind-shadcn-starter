import { useLocation } from "@tanstack/react-router"

import { APP_NAME } from "@/lib/consts"

import type { PropsWithChildren } from "react"

interface SeoProps extends PropsWithChildren {
  title?: string
  description?: string
  defaultTitle?: string
  separator?: string
  keywords?: string[]
}

export function Seo({
  children,
  title,
  description,
  defaultTitle = APP_NAME,
  separator = " | ",
}: SeoProps) {
  const location = useLocation()
  const pageTitle = [title, defaultTitle].filter(Boolean).join(separator)

  return (
    <head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={title || defaultTitle} />
      <meta property="og:description" content={description} />
      <link
        rel="canonical"
        href={`${window.location.origin}${location.href}`}
      />
      {children}
    </head>
  )
}
