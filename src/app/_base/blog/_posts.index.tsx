import { createFileRoute, Link } from "@tanstack/react-router"

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"

export const Route = createFileRoute("/_base/blog/_posts/")({
  component: PostsListPage,
  pendingComponent: () => (
    <>
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
      <Skeleton className="h-20 w-full" />
    </>
  ),
  loader: async () => {
    await new Promise((resolve) => setTimeout(resolve, 1500))
    return Array.from({ length: 10 }, (_, i) => ({
      id: i + 1,
      title: `Post ${i + 1}`,
      description: `Description ${i + 1}`,
    }))
  },
})

function PostsListPage() {
  const posts = Route.useLoaderData()

  return posts.map((post) => (
    <Card key={post.id} asChild>
      <Link
        to="/blog/$postId"
        params={{
          postId: post.id,
        }}
      >
        <CardHeader>
          <CardTitle>{post.title}</CardTitle>
          <CardDescription>{post.description}</CardDescription>
        </CardHeader>
      </Link>
    </Card>
  ))
}
