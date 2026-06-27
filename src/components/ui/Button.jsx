import { Link } from 'react-router-dom'
import { cn } from '../../utils/cn'

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-500 disabled:opacity-50 disabled:pointer-events-none cursor-pointer'

const variants = {
  // CTA dorado (Buscar, Seleccionar Asiento, Registrarme)
  primary: 'bg-secondary-500 text-primary-900 hover:bg-secondary-400 shadow-sm',
  // Azul (acciones secundarias)
  secondary: 'bg-primary-600 text-white hover:bg-primary-700',
  // Sobre fondo navy
  inverted: 'bg-white text-primary-900 hover:bg-primary-50',
  // Borde
  outline: 'border border-primary-600 text-primary-700 hover:bg-primary-50',
  // Texto suave
  ghost: 'text-primary-700 hover:bg-primary-50',
}

const sizes = {
  sm: 'h-9 px-3 text-sm',
  md: 'h-11 px-5 text-sm',
  lg: 'h-12 px-7 text-base',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  to,
  href,
  className,
  children,
  ...props
}) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    )
  }
  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...props}>
      {children}
    </button>
  )
}
