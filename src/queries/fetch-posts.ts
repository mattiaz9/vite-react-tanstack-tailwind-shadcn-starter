import { z } from "zod"

export async function fetchPosts() {
  const resp = await fetch("https://jsonplaceholder.typicode.com/posts")
  const data = await resp.json()
  const posts = z
    .array(
      z.object({
        id: z.number(),
        title: z.string(),
        body: z.string(),
        userId: z.number(),
      }),
    )
    .parse(data)
  return posts
}
