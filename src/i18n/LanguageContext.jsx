/* eslint-disable react-refresh/only-export-components --
   El provider y el hook useT conviven a propósito en este módulo de contexto. */
import { createContext, useCallback, useContext, useMemo, useState } from 'react'
import { es } from './es'
import { en } from './en'

const dictionaries = { es, en }
const DEFAULT_LANG = 'es'

const LanguageContext = createContext(null)

/* Resuelve claves con notación de punto: t('nav.viajes') -> dict.nav.viajes */
function resolve(dict, key) {
  return key.split('.').reduce((acc, part) => (acc == null ? acc : acc[part]), dict)
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(DEFAULT_LANG)

  const t = useCallback(
    (key) => {
      const value = resolve(dictionaries[lang], key)
      if (value != null) return value
      // Fallback al español y, en última instancia, a la propia clave.
      return resolve(dictionaries[DEFAULT_LANG], key) ?? key
    },
    [lang],
  )

  const value = useMemo(() => ({ lang, setLang, t }), [lang, t])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useT() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useT debe usarse dentro de <LanguageProvider>')
  return ctx
}
