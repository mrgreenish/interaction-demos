export function nullUndefCheck (variable: any): boolean {
  return variable !== null && variable !== undefined
}

export function hasValue<T> (v: T | undefined | null): v is T {
  return (v !== null && v !== undefined)
}

export function requireObjectValues (obj: { [key: string]: any }): { [key: string]: any } {
  return Object.fromEntries(Object.entries(obj).filter(([k, v]) => hasValue(v)))
}

export function hasStringValue (v: string | undefined): v is string {
  return typeof v !== 'undefined' && v.length > 0
}
