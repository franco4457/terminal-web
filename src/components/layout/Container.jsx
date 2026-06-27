import { cn } from '../../utils/cn'

/* Contenedor de ancho máximo centrado, usado por header, footer y secciones. */
export default function Container({ as: Tag = 'div', className, children }) {
  return (
    <Tag className={cn('mx-auto w-full max-w-[1180px] px-6', className)}>{children}</Tag>
  )
}
