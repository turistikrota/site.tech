import { useTranslations } from 'next-intl'
import React from 'react'
import Section from './Section'

type Item = {
  title: string
  description: string
  icon: React.ReactNode
}

const Items: Item[] = [
  {
    title: 'data.custom.title',
    description: `data.custom.description`,
    icon: <i className='bx bx-customize w-12 text-center text-3xl text-teal-500'></i>,
  },
  {
    title: 'data.modern.title',
    description: `data.modern.description`,
    icon: <i className='bx bx-rocket w-12 text-center text-3xl text-secondary'></i>,
  },
  {
    title: 'data.effective.title',
    description: `data.effective.description`,
    icon: <i className='bx bxs-megaphone w-12 text-center text-3xl text-primary'></i>,
  },
  {
    title: 'data.delivery.title',
    description: `data.delivery.description`,
    icon: <i className='bx bxs-time w-12 text-center text-3xl text-fuchsia-500'></i>,
  },
]

export default function FeaturesSection() {
  const t = useTranslations('home.features')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2'>
        {Items.map((item, idx) => (
          <Section.Card key={idx}>
            <div className='flex gap-5'>
              <div className='flex h-12 w-12 items-center justify-center rounded-md bg-primary/10'>{item.icon}</div>
              <div>
                <h5 className='mb-2'>{t(item.title)}</h5>
                <p className='text-slate-500 dark:text-slate-400'>{t(item.description)}</p>
              </div>
            </div>
          </Section.Card>
        ))}
      </div>
    </Section>
  )
}
