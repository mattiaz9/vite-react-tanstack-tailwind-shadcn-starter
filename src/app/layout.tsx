import { Link, Outlet } from "@tanstack/react-router"

import "unfonts.css"
import "./globals.css"

import { GithubIcon } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

export default function Layout() {
  return (
    <div className="relative flex h-[100dvh] w-full flex-col overflow-hidden">
      <header className="flex w-full border-b">
        <div className="container flex items-center py-2">
          <NavigationMenu>
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link className={navigationMenuTriggerStyle()} to="/">
                    Home
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
              <NavigationMenuItem>
                <NavigationMenuLink asChild>
                  <Link className={navigationMenuTriggerStyle()} to="/posts">
                    Posts
                  </Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>

          <div className="ml-auto">
            <Button
              className="w-9 rounded-full p-0"
              variant={"outline"}
              size="sm"
              asChild
            >
              <a
                href="https://github.com/mattiaz9/vite-react-tanstack-tailwind-shadcn-starter"
                target="_blank"
                rel="noreferrer"
              >
                <GithubIcon size={18} className="text-muted-foreground" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      <main className="container my-6 flex flex-1 overflow-hidden">
        <Outlet />
      </main>
    </div>
  )
}
