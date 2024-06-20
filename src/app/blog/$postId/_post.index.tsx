import { createFileRoute } from "@tanstack/react-router"
import { z } from "zod"

import { Skeleton } from "@/components/ui/skeleton"
import { fetchPost } from "@/queries/fetch-post"

export const Route = createFileRoute("/blog/$postId/_post/")({
  parseParams: (params) =>
    z.object({ postId: z.coerce.number().int() }).parse(params),
  stringifyParams: ({ postId }) => ({ postId: `${postId}` }),
  loader: async ({ params }) => {
    const post = await fetchPost({ id: params.postId })
    return {
      post,
    }
  },
  component: PostPage,
  pendingComponent: () => (
    <>
      <Skeleton className="h-10 w-full" />
      <Skeleton className="h-10 w-2/3" />
    </>
  ),
})

function PostPage() {
  const { post } = Route.useLoaderData()

  return <article className="prose">{post.body}</article>
}
