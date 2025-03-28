import { isPlainNumber, isString } from './is'

export function getStringifyStyle(value?: string | number): string | undefined {
  return isPlainNumber(value) ? `${value}px` : value
}

export function classes(...values: unknown[]) {
  return values.filter(it => isString(it)).join(' ')
}
export const cs = classes
