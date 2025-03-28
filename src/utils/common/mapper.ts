/**
 * @param arr Record<string, unknown>[]
 * @param key string
 * @returns Record<string, T>
 */
export function arrayMapper<T extends Record<string, unknown>>(arr: T[], key: string): Record<string, T> {
  const mapper: Record<string, T> = {}
  arr.forEach((item) => {
    const mapperKey = item[key]
    if (typeof mapperKey === 'string')
      mapper[mapperKey] = item
  })
  return mapper
}

/**
 * @param iterable [string, value][]
 * @returns Record<string, T>
 */
export function arrayMapperFromEntries<T>(iterable: Iterable<[string, T]>): Record<string, T> {
  return [...iterable].reduce((obj, [key, val]) => {
    obj[key] = val
    return obj
  }, {} as Record<string, T>)
}
