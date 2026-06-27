import { cn } from '../../utils/cn'

const tones = {
  gold: 'bg-secondary-500 text-primary-900',
  navy: 'bg-primary-900 text-white',
  blue: 'bg-primary-50 text-primary-700',
  success: 'bg-success/10 text-success',
}

export default function Badge({ tone = 'gold', className, children }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1 rounded-full px-3 py-1 text-xs font-semibold',
        tones[tone],
        className,
      )}
    >
      {children}
    </span>
  )
}
