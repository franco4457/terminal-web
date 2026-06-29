import { useState } from 'react'
import { Upload, CheckCircle2 } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import Button from '../ui/Button'
import Modal from '../ui/Modal'

const field =
  'w-full rounded-lg border border-line bg-white px-3 py-2 text-sm text-ink placeholder:text-muted focus:border-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-100'

const label = 'mb-1 block text-sm font-medium text-ink'

export default function StudentRegistrationModal({ open, onClose }) {
  const { t } = useT()
  const [submitted, setSubmitted] = useState(false)
  const [fileName, setFileName] = useState('')

  const handleClose = () => {
    setSubmitted(false)
    setFileName('')
    onClose()
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <Modal open={open} onClose={handleClose} title={t('beneficios.form.title')} size="lg">
      {submitted ? (
        <div className="py-4 text-center">
          <span className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-primary-50 text-primary-600">
            <CheckCircle2 size={30} />
          </span>
          <h3 className="mt-4 text-lg font-semibold text-ink">{t('beneficios.form.successTitle')}</h3>
          <p className="mt-2 text-sm text-muted">{t('beneficios.form.successBody')}</p>
          <Button className="mt-6 w-full" onClick={handleClose}>
            {t('beneficios.form.successClose')}
          </Button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-4">
          <p className="text-sm text-muted">{t('beneficios.form.intro')}</p>

          <div>
            <label className={label} htmlFor="reg-nombre">
              {t('beneficios.form.nombre')}
            </label>
            <input
              id="reg-nombre"
              type="text"
              required
              className={field}
              placeholder={t('beneficios.form.nombrePlaceholder')}
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="reg-email">
                {t('beneficios.form.email')}
              </label>
              <input
                id="reg-email"
                type="email"
                required
                className={field}
                placeholder={t('beneficios.form.emailPlaceholder')}
              />
            </div>
            <div>
              <label className={label} htmlFor="reg-dni">
                {t('beneficios.form.dni')}
              </label>
              <input
                id="reg-dni"
                type="text"
                inputMode="numeric"
                required
                className={field}
                placeholder={t('beneficios.form.dniPlaceholder')}
              />
            </div>
          </div>

          <div>
            <label className={label} htmlFor="reg-universidad">
              {t('beneficios.form.universidad')}
            </label>
            <input
              id="reg-universidad"
              type="text"
              required
              className={field}
              placeholder={t('beneficios.form.universidadPlaceholder')}
            />
          </div>

          <div>
            <label className={label} htmlFor="reg-carrera">
              {t('beneficios.form.carrera')}
            </label>
            <input
              id="reg-carrera"
              type="text"
              required
              className={field}
              placeholder={t('beneficios.form.carreraPlaceholder')}
            />
          </div>

          <div>
            <span className={label}>{t('beneficios.form.certificado')}</span>
            <label
              htmlFor="reg-file"
              className="flex cursor-pointer flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-line bg-surface px-4 py-6 text-center transition-colors hover:border-primary-400"
            >
              <Upload size={22} className="text-primary-600" />
              <span className="text-sm font-medium text-primary-700">
                {fileName || t('beneficios.form.certificadoCta')}
              </span>
              <span className="text-xs text-muted">{t('beneficios.form.certificadoHint')}</span>
              <input
                id="reg-file"
                type="file"
                required
                accept="image/*,.pdf"
                className="hidden"
                onChange={(e) => setFileName(e.target.files?.[0]?.name || '')}
              />
            </label>
          </div>

          <Button type="submit" className="w-full">
            {t('beneficios.form.enviar')}
          </Button>
        </form>
      )}
    </Modal>
  )
}
