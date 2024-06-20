import { createRootRoute, Outlet } from "@tanstack/react-router"

import "unfonts.css"
import "./globals.css"

export const Route = createRootRoute({
  component: RootLayout,
  notFoundComponent: () => {
    return (
      <p className="flex h-dvh w-full items-center justify-center bg-background text-foreground">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl">404</h1>
          <span className="h-10 w-px bg-accent" />
          <span className="text-sm">This page could not be found</span>
        </div>
      </p>
    )
  },
})

export default function RootLayout() {
  return (
    <div className="min-h-dvh w-full">
      <Outlet />
    </div>
  )
}
