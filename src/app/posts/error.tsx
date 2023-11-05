import { useMatch } from "@tanstack/react-router"

import { NotFoundError } from "@/queries/errors"

export default function Error() {
  const data = useMatch({
    from: "/posts/$postId",
  })

  const error = data.error as Error
  const code = error instanceof NotFoundError ? 404 : 500
  const text = error.message

  return (
    <div className="flex items-baseline space-x-6">
      <span className="text-2xl text-secondary">{code}</span>
      <span className="text-lg text-muted-foreground">{text}</span>
    </div>
  )
}
