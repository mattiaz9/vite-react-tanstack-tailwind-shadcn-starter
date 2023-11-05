import type { PostsRouteProps } from "./route"

export default function Page({}: PostsRouteProps) {
  return (
    <div className="m-auto text-lg text-muted-foreground">
      Select a post from the sidebar
    </div>
  )
}
