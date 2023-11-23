'use client'

import Card from '@turistikrota/ui/cards/default'
import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'
import { useState } from 'react'

export default function FaqSection() {
  const t = useTranslations('home.faq')

  const [active, setActive] = useState<number | null>(0)

  const toggle = (idx: number) => {
    if (active === idx) {
      setActive(null)
    } else {
      setActive(idx)
    }
  }

  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div data-fc-type='accordion' className='mt-16 flex flex-col gap-y-4 lg:mx-auto lg:w-3/4 2xl:w-2/3'>
        {['one', 'two', 'three', 'four'].map((item, idx) => (
          <Card key={idx} className='p-0'>
            <button
              className='open fc-col-open inline-flex w-full items-center justify-between text-left font-semibold transition'
              onClick={() => toggle(idx)}
            >
              {t(`data.${item}.question`)}
              <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
                <i className='bx bx-chevron-down'></i>
              </span>
            </button>
            <div
              className={`w-full overflow-hidden transition-all duration-200 ${
                active === idx ? 'animate-fade-in' : 'hidden animate-fade-out'
              }`}
            >
              <p className='p-4 pt-1 text-gray-500 dark:text-gray-400'>{t(`data.${item}.answer`)}</p>
            </div>
          </Card>
        ))}
      </div>
    </Section>
  )
}
