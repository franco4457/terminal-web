import { useState } from 'react'
import { NavLink, Link } from 'react-router-dom'
import { Bus, Menu, X } from 'lucide-react'
import { useT } from '../../i18n/LanguageContext'
import Container from './Container'
import Button from '../ui/Button'
import { cn } from '../../utils/cn'

const navItems = [
  { key: 'nav.viajes', to: '/viajes' },
  { key: 'nav.beneficios', to: '/beneficios-estudiantiles' },
  { key: 'nav.guia', to: '/guia-almagro' },
  { key: 'nav.info', to: '/informacion' }
]

export default function Header() {
  const { t, lang, setLang } = useT()
  const [open, setOpen] = useState(false)

  const linkClass = ({ isActive }) =>
    cn(
      'text-sm transition-colors hover:text-primary-700 flex w-full',
      isActive ? 'font-semibold text-primary-900' : 'text-muted'
    )

  return (
    <header className='sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur'>
      <Container className='flex h-16 items-center justify-between gap-4'>
        <Link to='/' className='flex items-center gap-2 font-semibold text-primary-900'>
          <span className='grid h-9 w-9 place-items-center rounded-lg bg-primary-900 text-white'>
            <Bus size={18} />
          </span>
          <span className='hidden sm:inline'>{t('brand')}</span>
        </Link>

        <nav className='hidden items-center justify-between w-full lg:flex'>
          {navItems.map((item) => (
            <NavLink key={item.to} to={item.to} className={linkClass}>
              <button type='button' className='w-full h-full'>
                {t(item.key)}
              </button>
            </NavLink>
          ))}
          <a href='#ayuda' className={linkClass}>
            <button className='w-full h-full'>{t('nav.ayuda')}</button>
          </a>
        </nav>

        <div className='flex items-center gap-2'>
          <button
            type='button'
            onClick={() => setLang(lang === 'es' ? 'en' : 'es')}
            className='rounded-md px-2 py-1 text-xs font-semibold text-muted hover:bg-surface'
            aria-label='Cambiar idioma'
          >
            {lang === 'es' ? 'EN' : 'ES'}
          </button>
          <Button size='sm' className='hidden sm:inline-flex'>
            {t('nav.iniciarSesion')}
          </Button>
          <button
            type='button'
            className='grid h-9 w-9 place-items-center rounded-md text-primary-900 lg:hidden'
            onClick={() => setOpen((v) => !v)}
            aria-label='Abrir menú'
            aria-expanded={open}
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </Container>

      {open && (
        <nav className='border-t border-line bg-white lg:hidden'>
          <Container className='flex flex-col py-3'>
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  cn(
                    'rounded-md px-2 py-2 text-sm ',
                    isActive ? 'bg-surface font-semibold text-primary-900' : 'text-muted'
                  )
                }
              >
                {t(item.key)}
              </NavLink>
            ))}
            <a
              href='#ayuda'
              onClick={() => setOpen(false)}
              className='px-2 py-2 text-sm text-muted'
            >
              {t('nav.ayuda')}
            </a>
            <Button size='sm' className='mt-2 self-start sm:hidden'>
              {t('nav.iniciarSesion')}
            </Button>
          </Container>
        </nav>
      )}
    </header>
  )
}
