import React from "react"
import ReactDOM from "react-dom/client"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { createRouter, RouterProvider } from "@tanstack/react-router"

import { routeTree } from "./routes.gen"

// Set up a Router instance
const isBotAgent = /bot|googlebot|crawler|spider|robot|crawling/i.test(
  navigator.userAgent,
)
const router = createRouter({
  routeTree,
  defaultPreload: "intent",
  defaultPendingMinMs: isBotAgent ? 100 : 0,
})

// Register things for typesafety
declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
})

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>,
)
