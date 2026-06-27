import { cn } from '../../utils/cn'

/* Banda de llamado a la acción reutilizada al pie de varias páginas.
   tone: 'surface' (gris claro, centrado) | 'navy' (fondo oscuro). */
export default function CtaBanner({ title, body, children, tone = 'surface', className }) {
  const navy = tone === 'navy'
  return (
    <section
      className={cn(
        'rounded-2xl px-6 py-12 text-center',
        navy ? 'bg-primary-900 text-white' : 'bg-surface border border-line',
        className,
      )}
    >
      <h2
        className={cn(
          'text-2xl md:text-3xl font-semibold tracking-tight',
          navy ? 'text-white' : 'text-ink',
        )}
      >
        {title}
      </h2>
      {body && (
        <p className={cn('mt-3 max-w-2xl mx-auto', navy ? 'text-primary-100' : 'text-muted')}>
          {body}
        </p>
      )}
      <div className="mt-6 flex flex-wrap items-center justify-center gap-3">{children}</div>
    </section>
  )
}
