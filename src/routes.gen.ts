/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

import { createFileRoute } from "@tanstack/react-router"

// Import Routes

import { Route as rootRoute } from "./app/__root"
import { Route as wwwBaseImport } from "./app/(www)/_base"
import { Route as wwwBaseIndexImport } from "./app/(www)/_base.index"
import { Route as wwwBaseBlogPostsImport } from "./app/(www)/_base.blog/_posts"
import { Route as wwwBaseBlogPostsIndexImport } from "./app/(www)/_base.blog/_posts.index"
import { Route as wwwBaseBlogPostIdPostImport } from "./app/(www)/_base.blog/$postId/_post"
import { Route as wwwBaseBlogPostIdPostIndexImport } from "./app/(www)/_base.blog/$postId/_post.index"

// Create Virtual Routes

const wwwImport = createFileRoute("/(www)")()
const wwwBaseBlogImport = createFileRoute("/(www)/_base/blog")()
const wwwBaseBlogPostIdImport = createFileRoute("/(www)/_base/blog/$postId")()

// Create/Update Routes

const wwwRoute = wwwImport.update({
  id: "/(www)",
  getParentRoute: () => rootRoute,
} as any)

const wwwBaseRoute = wwwBaseImport.update({
  id: "/_base",
  getParentRoute: () => wwwRoute,
} as any)

const wwwBaseBlogRoute = wwwBaseBlogImport.update({
  path: "/blog",
  getParentRoute: () => wwwBaseRoute,
} as any)

const wwwBaseIndexRoute = wwwBaseIndexImport.update({
  path: "/",
  getParentRoute: () => wwwBaseRoute,
} as any)

const wwwBaseBlogPostIdRoute = wwwBaseBlogPostIdImport.update({
  path: "/$postId",
  getParentRoute: () => wwwBaseBlogRoute,
} as any)

const wwwBaseBlogPostsRoute = wwwBaseBlogPostsImport.update({
  id: "/_posts",
  getParentRoute: () => wwwBaseBlogRoute,
} as any)

const wwwBaseBlogPostsIndexRoute = wwwBaseBlogPostsIndexImport.update({
  path: "/",
  getParentRoute: () => wwwBaseBlogPostsRoute,
} as any)

const wwwBaseBlogPostIdPostRoute = wwwBaseBlogPostIdPostImport.update({
  id: "/_post",
  getParentRoute: () => wwwBaseBlogPostIdRoute,
} as any)

const wwwBaseBlogPostIdPostIndexRoute = wwwBaseBlogPostIdPostIndexImport.update(
  {
    path: "/",
    getParentRoute: () => wwwBaseBlogPostIdPostRoute,
  } as any,
)

// Populate the FileRoutesByPath interface

declare module "@tanstack/react-router" {
  interface FileRoutesByPath {
    "/(www)": {
      id: "/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof wwwImport
      parentRoute: typeof rootRoute
    }
    "/(www)/_base": {
      id: "/_base"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof wwwBaseImport
      parentRoute: typeof wwwRoute
    }
    "/(www)/_base/": {
      id: "/_base/"
      path: "/"
      fullPath: "/"
      preLoaderRoute: typeof wwwBaseIndexImport
      parentRoute: typeof wwwBaseImport
    }
    "/(www)/_base/blog": {
      id: "/_base/blog"
      path: "/blog"
      fullPath: "/blog"
      preLoaderRoute: typeof wwwBaseBlogImport
      parentRoute: typeof wwwBaseImport
    }
    "/(www)/_base/blog/_posts": {
      id: "/_base/blog/_posts"
      path: "/blog"
      fullPath: "/blog"
      preLoaderRoute: typeof wwwBaseBlogPostsImport
      parentRoute: typeof wwwBaseBlogRoute
    }
    "/(www)/_base/blog/$postId": {
      id: "/_base/blog/$postId"
      path: "/$postId"
      fullPath: "/blog/$postId"
      preLoaderRoute: typeof wwwBaseBlogPostIdImport
      parentRoute: typeof wwwBaseBlogImport
    }
    "/(www)/_base/blog/$postId/_post": {
      id: "/_base/blog/$postId/_post"
      path: "/$postId"
      fullPath: "/blog/$postId"
      preLoaderRoute: typeof wwwBaseBlogPostIdPostImport
      parentRoute: typeof wwwBaseBlogPostIdRoute
    }
    "/(www)/_base/blog/_posts/": {
      id: "/_base/blog/_posts/"
      path: "/"
      fullPath: "/blog/"
      preLoaderRoute: typeof wwwBaseBlogPostsIndexImport
      parentRoute: typeof wwwBaseBlogPostsImport
    }
    "/(www)/_base/blog/$postId/_post/": {
      id: "/_base/blog/$postId/_post/"
      path: "/"
      fullPath: "/blog/$postId/"
      preLoaderRoute: typeof wwwBaseBlogPostIdPostIndexImport
      parentRoute: typeof wwwBaseBlogPostIdPostImport
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  wwwRoute: wwwRoute.addChildren({
    wwwBaseRoute: wwwBaseRoute.addChildren({
      wwwBaseIndexRoute,
      wwwBaseBlogRoute: wwwBaseBlogRoute.addChildren({
        wwwBaseBlogPostsRoute: wwwBaseBlogPostsRoute.addChildren({
          wwwBaseBlogPostsIndexRoute,
        }),
        wwwBaseBlogPostIdRoute: wwwBaseBlogPostIdRoute.addChildren({
          wwwBaseBlogPostIdPostRoute: wwwBaseBlogPostIdPostRoute.addChildren({
            wwwBaseBlogPostIdPostIndexRoute,
          }),
        }),
      }),
    }),
  }),
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/"
      ]
    },
    "/": {
      "filePath": "(www)",
      "children": [
        "/_base"
      ]
    },
    "/_base": {
      "filePath": "(www)/_base.tsx",
      "parent": "/",
      "children": [
        "/_base/",
        "/_base/blog"
      ]
    },
    "/_base/": {
      "filePath": "(www)/_base.index.tsx",
      "parent": "/_base"
    },
    "/_base/blog": {
      "filePath": "(www)/_base.blog",
      "parent": "/_base",
      "children": [
        "/_base/blog/_posts",
        "/_base/blog/$postId"
      ]
    },
    "/_base/blog/_posts": {
      "filePath": "(www)/_base.blog/_posts.tsx",
      "parent": "/_base/blog",
      "children": [
        "/_base/blog/_posts/"
      ]
    },
    "/_base/blog/$postId": {
      "filePath": "(www)/_base.blog/$postId",
      "parent": "/_base/blog",
      "children": [
        "/_base/blog/$postId/_post"
      ]
    },
    "/_base/blog/$postId/_post": {
      "filePath": "(www)/_base.blog/$postId/_post.tsx",
      "parent": "/_base/blog/$postId",
      "children": [
        "/_base/blog/$postId/_post/"
      ]
    },
    "/_base/blog/_posts/": {
      "filePath": "(www)/_base.blog/_posts.index.tsx",
      "parent": "/_base/blog/_posts"
    },
    "/_base/blog/$postId/_post/": {
      "filePath": "(www)/_base.blog/$postId/_post.index.tsx",
      "parent": "/_base/blog/$postId/_post"
    }
  }
}
ROUTE_MANIFEST_END */
