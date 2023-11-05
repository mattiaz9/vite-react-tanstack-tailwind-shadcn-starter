import { type UseQueryOptions } from "@tanstack/react-query"
import { Route } from "@tanstack/react-router"

import { layoutRoute as postsLayoutRoute } from "../route"
import Error from "./error"
import Loading from "./loading"
import Page from "./page"
import { fetchPost } from "@/queries/fetch-post"

import type { inferRouteProps } from "@/types/router"

export const route = new Route({
  path: "$postId",
  getParentRoute: () => postsLayoutRoute,
  beforeLoad: ({ params: { postId } }) => {
    const queryOptions = {
      queryKey: ["posts", postId],
      queryFn: () => fetchPost(postId),
      enabled: !!postId,
    } satisfies UseQueryOptions

    return { queryOptions }
  },
  loader: async ({ context: { queryClient, queryOptions } }) => {
    await new Promise((resolve) => setTimeout(resolve, 2000))
    await queryClient.ensureQueryData(queryOptions)
  },
  component: (props) => <Page {...props} />,
  errorComponent: () => <Error />,
  pendingComponent: Loading,
})

export type PostRoute = typeof route
export type PostRouteProps = inferRouteProps<PostRoute>
