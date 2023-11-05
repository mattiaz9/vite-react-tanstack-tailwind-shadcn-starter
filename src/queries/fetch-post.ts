import { z } from "zod"

import { NotFoundError } from "./errors"

export async function fetchPost(id: string) {
  const resp = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)

  if (resp.status === 404) {
    throw new NotFoundError("Post not found")
  }

  const data = await resp.json()
  const post = z
    .object({
      id: z.number(),
      title: z.string(),
      body: z.string(),
      userId: z.number(),
    })
    .parse(data)
  return post
}
