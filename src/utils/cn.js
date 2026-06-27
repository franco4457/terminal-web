/* Une clases condicionales: cn('a', cond && 'b', 'c') -> 'a c' */
export function cn(...parts) {
  return parts.filter(Boolean).join(' ')
}
