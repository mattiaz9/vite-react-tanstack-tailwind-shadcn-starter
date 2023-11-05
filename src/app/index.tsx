import { QueryClient } from "@tanstack/react-query"
import { Router, RouterContext } from "@tanstack/react-router"

import Layout from "./layout"
import { route as postRoute } from "./posts/[id]/route"
import {
  layoutRoute as postsLayoutRoute,
  route as postsRoute,
} from "./posts/route"
import { route as homeRoute } from "./route"

export const queryClient = new QueryClient()

const routerContext = new RouterContext<{
  queryClient: typeof queryClient
}>()

export const root = routerContext.createRootRoute({
  component: Layout,
})

export const routeTree = root.addChildren([
  homeRoute,
  postsLayoutRoute.addChildren([postsRoute, postRoute]),
])

export const router = new Router({
  routeTree,
  defaultPreload: "intent",
  context: {
    queryClient,
  },
})

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router
  }
}
