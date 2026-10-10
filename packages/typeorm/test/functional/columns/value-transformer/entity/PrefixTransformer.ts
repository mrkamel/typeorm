import type { ValueTransformer } from "../../../../../src"

/**
 * Prefixes values when they are read from the database. The transformer is
 * not idempotent, so applying `from` twice shows up as a doubled prefix, and
 * `to` throws when it receives a database value instead of an entity value.
 */
export function prefixTransformer(prefix: string): ValueTransformer {
    return {
        to(value: unknown) {
            if (value === null || value === undefined) return value

            if (typeof value !== "string" || !value.startsWith(`${prefix}:`))
                throw new Error(
                    `${prefix} transformer received a database value: ${String(value)}`,
                )

            return value.slice(`${prefix}:`.length)
        },
        from(value: unknown) {
            return value === null || value === undefined
                ? value
                : `${prefix}:${String(value)}`
        },
    }
}
