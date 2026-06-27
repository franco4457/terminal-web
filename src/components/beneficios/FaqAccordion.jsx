import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../../data/faqs'
import { cn } from '../../utils/cn'

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState(0)

  return (
    <div className="mx-auto max-w-3xl divide-y divide-line rounded-2xl border border-line bg-white">
      {faqs.map((item, i) => {
        const open = openIndex === i
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : i)}
              aria-expanded={open}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
            >
              <span className="font-semibold text-ink">{item.q}</span>
              <ChevronDown
                size={20}
                className={cn(
                  'shrink-0 text-primary-600 transition-transform',
                  open && 'rotate-180',
                )}
              />
            </button>
            {open && <p className="px-6 pb-5 text-sm text-muted">{item.a}</p>}
          </div>
        )
      })}
    </div>
  )
}
