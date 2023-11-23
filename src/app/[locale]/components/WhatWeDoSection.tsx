import Card from '@turistikrota/ui/cards/default'
import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'
import React from 'react'

type Item = {
  title: string
  description: string
  icon: React.ReactNode
}

const Items: Item[] = [
  {
    title: 'data.experience.title',
    description: 'data.experience.description',
    icon: <i className='bx bxl-dribbble text-3xl text-primary'></i>,
  },
  {
    title: 'data.custom.title',
    description: 'data.custom.description',
    icon: <i className='bx bx-customize text-3xl text-teal-500'></i>,
  },
  {
    title: 'data.maintain.title',
    description: 'data.maintain.description',
    icon: <i className='bx bxs-hot text-3xl text-rose-500'></i>,
  },
]

export default function WhatWeDoSection() {
  const t = useTranslations('home.wwd')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3'>
        {Items.map((item, idx) => (
          <Card key={idx}>
            <div className='flex h-12 w-12 items-center justify-center rounded-md bg-primary/10'>{item.icon}</div>
            <h4 className='mb-2 mt-5 text-lg font-medium'>{t(item.title)}</h4>
            <p className='text-slate-500 dark:text-slate-400'>{t(item.description)}</p>
          </Card>
        ))}
      </div>
    </Section>
  )
}
