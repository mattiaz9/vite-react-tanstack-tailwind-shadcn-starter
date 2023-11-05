import { useMemo } from "react"
import { useQuery } from "@tanstack/react-query"
import { Link, Outlet } from "@tanstack/react-router"

import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

import type { PostsLayoutRouteProps } from "./route"

export default function Layout({ useRouteContext }: PostsLayoutRouteProps) {
  const { queryOptions } = useRouteContext()
  const postQuery = useQuery(queryOptions)
  const postsWithNonFound = useMemo(
    () => [
      {
        id: 99999,
        title: "NOT FOUND!!!",
        body: "",
        userId: 0,
      },
      ...(postQuery.data ?? []),
    ],
    [postQuery.data],
  )

  return (
    <>
      <aside className="w-96 rounded-lg bg-muted p-6">
        <ScrollArea className="-mr-3 h-full" type="always">
          <div className="pr-3">
            {postsWithNonFound.map((post) => (
              <Button
                className="w-full justify-start whitespace-normal text-left text-base font-semibold text-muted-foreground data-[status=active]:bg-accent data-[status=active]:text-foreground"
                variant={"ghost"}
                key={post.id}
                asChild
              >
                <Link
                  to="/posts/$postId"
                  params={{ postId: post.id.toString() }}
                >
                  <span className="line-clamp-1 text-left">{post.title}</span>
                </Link>
              </Button>
            ))}
          </div>
        </ScrollArea>
      </aside>
      <div className="flex w-full flex-col pl-8">
        <Outlet />
      </div>
    </>
  )
}
