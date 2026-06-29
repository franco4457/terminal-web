import { useEffect } from 'react'
import { createPortal } from 'react-dom'
import { X } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'

const sizes = {
  md: 'max-w-md',
  lg: 'max-w-lg',
}

export default function Modal({ open, onClose, title, children, size = 'md' }) {
  const { t } = useT()

  useEffect(() => {
    if (!open) return
    const onKey = (e) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [open, onClose])

  if (!open) return null

  return createPortal(
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
    >
      <div className="absolute inset-0 bg-primary-900/60" onClick={onClose} />
      <div
        className={`relative z-10 max-h-[90vh] w-full overflow-y-auto rounded-2xl bg-white p-6 shadow-xl ${sizes[size]}`}
      >
        <div className="mb-4 flex items-start justify-between gap-4">
          {title && <h2 className="text-xl font-semibold text-ink">{title}</h2>}
          <button
            type="button"
            onClick={onClose}
            aria-label={t('common.cerrar')}
            className="-mr-1 grid h-8 w-8 shrink-0 place-items-center rounded-md text-muted hover:bg-surface hover:text-ink"
          >
            <X size={20} />
          </button>
        </div>
        {children}
      </div>
    </div>,
    document.body,
  )
}
