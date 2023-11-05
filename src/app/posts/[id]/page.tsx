import { useQuery } from "@tanstack/react-query"

import type { PostRouteProps } from "./route"

export default function Page({ useRouteContext }: PostRouteProps) {
  const { queryOptions } = useRouteContext()
  const postQuery = useQuery(queryOptions)

  return (
    <div className="space-y-10">
      <h1 className="mb-8 text-2xl font-bold">{postQuery.data?.title}</h1>
      <article className="whitespace-pre">
        <p>{postQuery.data?.body}</p>
      </article>
    </div>
  )
}
