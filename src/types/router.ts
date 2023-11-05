import type {
  AnyContext,
  AnyPathParams,
  AnySearchSchema,
  RouteProps,
} from "@tanstack/react-router"

export type inferRouteProps<
  T extends {
    types: {
      loader: unknown
      fullSearchSchema: AnySearchSchema
      params: AnyPathParams
      routeContext: AnyContext
    }
  },
> = RouteProps<
  T["types"]["loader"],
  T["types"]["fullSearchSchema"],
  T["types"]["params"],
  T["types"]["routeContext"]
>
