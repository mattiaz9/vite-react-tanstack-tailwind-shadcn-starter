import { Outlet } from "@tanstack/react-router"

import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <>
      <aside className="w-96 space-y-2 rounded-lg bg-muted p-6">
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
        <Skeleton className="h-12 w-full" />
      </aside>
      <div className="flex w-full flex-col pl-8">
        <Outlet />
      </div>
    </>
  )
}
