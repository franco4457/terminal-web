import { useState } from 'react'
import { LifeBuoy, Phone, Clock } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import { getAssistanceOnDuty } from '../../data/accessibility'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

export default function AssistanceCard() {
  const { t } = useT()
  const [open, setOpen] = useState(false)
  // Responsable de guardia según la hora en que se abre el modal.
  const onDuty = getAssistanceOnDuty()
  const telHref = `tel:${onDuty.telefono.replace(/[\s-]/g, '')}`

  return (
    <section className="flex flex-col items-start gap-4 rounded-2xl bg-primary-900 p-8 text-white md:flex-row md:items-center md:justify-between">
      <div className="flex items-start gap-4">
        <span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-white/10 text-secondary-400">
          <LifeBuoy size={24} />
        </span>
        <div>
          <h3 className="text-xl font-semibold">{t('info.asistenciaTitle')}</h3>
          <p className="mt-1 max-w-xl text-sm text-primary-100">{t('info.asistenciaBody')}</p>
        </div>
      </div>
      <Button className="shrink-0" onClick={() => setOpen(true)}>
        {t('info.asistenciaButton')}
      </Button>

      <Modal open={open} onClose={() => setOpen(false)} title={t('info.modalTitle')}>
        <p className="text-sm text-muted">{t('info.modalDesc')}</p>

        <div className="mt-4 rounded-xl border border-line bg-surface p-5 text-center">
          <p className="text-xs font-semibold uppercase tracking-wide text-muted">
            {t('info.modalResponsable')}
          </p>
          <p className="mt-1 text-lg font-semibold text-ink">{onDuty.nombre}</p>
          <a
            href={telHref}
            className="mt-2 inline-flex items-center gap-2 text-2xl font-bold text-primary-700 hover:text-primary-800"
          >
            <Phone size={22} />
            {onDuty.telefono}
          </a>
          <p className="mt-2 inline-flex items-center gap-1.5 text-xs text-muted">
            <Clock size={14} />
            {t('info.modalHorario')}: {onDuty.horario}
          </p>
        </div>

        <Button href={telHref} className="mt-5 w-full">
          <Phone size={18} />
          {t('info.modalLlamar')}
        </Button>
      </Modal>
    </section>
  )
}
