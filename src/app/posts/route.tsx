import { type UseQueryOptions } from "@tanstack/react-query"
import { Route } from "@tanstack/react-router"

import Error from "./error"
import Layout from "./layout"
import LayoutLoading from "./layout.loading"
import Loading from "./loading"
import Page from "./page"
import { root } from "@/app"
import { fetchPosts } from "@/queries/fetch-posts"

import type { inferRouteProps } from "@/types/router"

export const layoutRoute = new Route({
  path: "posts",
  getParentRoute: () => root,
  beforeLoad: () => {
    const queryOptions = {
      queryKey: ["posts"],
      queryFn: () => fetchPosts(),
    } satisfies UseQueryOptions

    return { queryOptions }
  },
  loader: async ({ context: { queryClient, queryOptions } }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await queryClient.ensureQueryData(queryOptions)
  },
  component: (props) => <Layout {...props} />,
  pendingComponent: LayoutLoading,
})

export const route = new Route({
  path: "/",
  getParentRoute: () => layoutRoute,
  component: (props) => <Page {...props} />,
  errorComponent: () => <Error />,
  pendingComponent: Loading,
})

export type PostsLayoutRoute = typeof layoutRoute
export type PostsLayoutRouteProps = inferRouteProps<PostsLayoutRoute>
export type PostsRoute = typeof route
export type PostsRouteProps = inferRouteProps<PostsRoute>
