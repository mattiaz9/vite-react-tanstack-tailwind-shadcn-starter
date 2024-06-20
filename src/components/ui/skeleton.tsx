import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "inline-block animate-pulse rounded-md bg-accent text-transparent [&_*]:invisible",
        className,
      )}
      {...props}
    />
  )
}

export { Skeleton }
