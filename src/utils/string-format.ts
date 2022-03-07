export function capitalize(s: string) {
  if (!s.length) return s
  return s.charAt(0).toUpperCase() + s.slice(1)
}
