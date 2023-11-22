import { useTranslations } from 'next-intl'
import Section from './Section'

type Item = {
  title: string
  description: string
  icon: string
}

const Items: Item[] = [
  {
    title: 'data.cloud.title',
    description: 'data.cloud.description',
    icon: 'bxs-cloud text-fuchsia-500',
  },
  {
    title: 'data.group.title',
    description: 'data.group.description',
    icon: 'bx-group text-teal-500',
  },
  {
    title: 'data.backup.title',
    description: 'data.backup.description',
    icon: 'bxs-save text-rose-500',
  },
  {
    title: 'data.performance.title',
    description: 'data.performance.description',
    icon: 'bx-tachometer text-secondary',
  },
  {
    title: 'data.scale.title',
    description: 'data.scale.description',
    icon: 'bx-cube-alt text-primary',
  },
  {
    title: 'data.api.title',
    description: 'data.api.description',
    icon: 'bx-data text-indigo-500',
  },
]

export default function IntegrationSection() {
  const t = useTranslations('home.integration')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-4 xl:grid-cols-2'>
        {Items.map((item, idx) => (
          <Section.Card key={idx} className='flex items-center gap-6'>
            <i className={`bx w-16 text-7xl ${item.icon}`} />
            <div>
              <h5>{t(item.title)}</h5>
              <p className='text-slate-500 dark:text-slate-400'>{t(item.description)}</p>
            </div>
          </Section.Card>
        ))}
      </div>
    </Section>
  )
}
