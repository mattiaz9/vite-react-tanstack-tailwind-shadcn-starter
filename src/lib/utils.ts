import { clsx } from "clsx"
import { twMerge } from "tailwind-merge"

import type { ClassValue } from "clsx"
import type { ZodError } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

// eslint-disable-next-line @typescript-eslint/ban-types
export function dedupe<CachedFunction extends Function>(
  fn: CachedFunction,
): CachedFunction {
  return fn
}

const dedupeMap = new Map<string, Promise<unknown>>()

export function createDedupeFn<
  T extends Zod.ZodSchema,
  Fn extends (input: Zod.infer<T>) => Promise<unknown>,
  R = ReturnType<Fn>,
>(schema: T, fn: Fn): (input: Zod.infer<T>) => R {
  const dedupeUuid = crypto.randomUUID()

  return function (input: Zod.infer<T>): R {
    try {
      schema.parse(input)
    } catch (e) {
      throw new Error(
        "Invalid arguments: " +
          (e as ZodError).errors.map((err) => err.message).join(", "),
      )
    }

    const key = dedupeUuid + ":" + JSON.stringify(input)

    // If there's a pending promise for the same key, return it
    if (dedupeMap.has(key)) {
      return dedupeMap.get(key) as R
    }

    // Otherwise, call the callback and cache the result
    const promise = fn(input)
      .then((result) => {
        dedupeMap.delete(key)
        return result
      })
      .catch((error) => {
        dedupeMap.delete(key)
        throw error
      })

    // Store the pending promise
    dedupeMap.set(key, promise)
    return promise as R
  }
}
