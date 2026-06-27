import { cn } from '../../utils/cn'

export default function Card({ as: Tag = 'div', className, children, ...props }) {
  return (
    <Tag
      className={cn(
        'rounded-xl border border-line bg-white shadow-sm',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}
