import { Link } from "@tanstack/react-router"

import { GithubIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function Page() {
  return (
    <ScrollArea className="h-full w-full" type="scroll">
      <div className="container flex flex-col items-center space-y-12 py-28 text-center">
        <h1 className="max-w-2xl bg-gradient-to-b from-slate-400 to-indigo-500 bg-clip-text text-5xl font-extrabold text-transparent">
          Welcome to a typesafe Vite/React starter kit!
        </h1>

        <div className="flex max-w-2xl flex-col items-center">
          <p className="text-xs text-muted-foreground">Powered by</p>
          <ul className="mt-3 flex flex-col font-bold">
            <Button variant={"link"} asChild>
              <li>
                <a
                  href="https://tanstack.com/router/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TanStack router ↗
                </a>
              </li>
            </Button>
            <Button variant={"link"} asChild>
              <li>
                <a
                  href="https://tanstack.com/query/"
                  target="_blank"
                  rel="noreferrer"
                >
                  TanStack query ↗
                </a>
              </li>
            </Button>
            <Button variant={"link"} asChild>
              <li>
                <a
                  href="https://tailwindcss.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Tailwind CSS ↗
                </a>
              </li>
            </Button>
            <Button variant={"link"} asChild>
              <li>
                <a
                  href="https://ui.shadcn.com/"
                  target="_blank"
                  rel="noreferrer"
                >
                  Shadcn UI ↗
                </a>
              </li>
            </Button>
            <Button variant={"link"} asChild>
              <li>
                <a
                  href="https://github.com/total-typescript/ts-reset"
                  target="_blank"
                  rel="noreferrer"
                >
                  Total-Typescript ts reset ↗
                </a>
              </li>
            </Button>
          </ul>
        </div>

        <Button size={"lg"} asChild>
          <a
            href="https://github.com/mattiaz9/vite-react-tanstack-tailwind-shadcn-starter"
            target="_blank"
            rel="noreferrer"
          >
            <GithubIcon className="mr-2" size={18} />
            Get the code!
          </a>
        </Button>

        <h2 className="mt-24 text-xl font-bold">Explore some examples:</h2>
        <div className="mx-auto grid w-full max-w-screen-md grid-cols-[repeat(auto-fill,minmax(200px,1fr))] gap-6">
          <Link to="/posts">
            <Card className="transition-colors hover:border-indigo-400">
              <CardHeader>
                <CardTitle>Simple blog</CardTitle>
              </CardHeader>
              <CardContent>
                Simple blog with a list of posts and a detail page for each
                post.
              </CardContent>
            </Card>
          </Link>
          <Card className="cursor-default transition-colors">
            <CardHeader>
              <CardTitle className="text-muted-foreground">TBD</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
          <Card className="cursor-default transition-colors">
            <CardHeader>
              <CardTitle className="text-muted-foreground">TBD</CardTitle>
            </CardHeader>
            <CardContent></CardContent>
          </Card>
        </div>
      </div>
    </ScrollArea>
  )
}
