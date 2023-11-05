import { Skeleton } from "@/components/ui/skeleton"

export default function Loading() {
  return (
    <div className="w-full space-y-12">
      <Skeleton className="h-10 w-3/4" />
      <Skeleton className="h-44 w-full" />
    </div>
  )
}
