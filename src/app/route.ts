import { Route } from "@tanstack/react-router"

import { root } from "."
import Page from "./page"

import type { inferRouteProps } from "@/types/router"

export const route = new Route({
  path: "/",
  getParentRoute: () => root,
  component: Page,
})

export type HomeRoute = typeof route
export type HomeRouteProps = inferRouteProps<HomeRoute>
