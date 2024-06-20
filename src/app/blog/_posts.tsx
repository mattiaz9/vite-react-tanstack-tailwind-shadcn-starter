import { createFileRoute, Outlet } from "@tanstack/react-router"

export const Route = createFileRoute("/blog/_posts")({
  component: PostsLayout,
})

function PostsLayout() {
  return (
    <div className="w-full space-y-12">
      <header className="border-b bg-card py-12">
        <div className="container">
          <h1 className="text-3xl">Blog</h1>
        </div>
      </header>
      <div className="container">
        <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
          <Outlet />
        </div>
      </div>
    </div>
  )
}
