import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'

type Item = {
  title: string
  count: string
}

const Items: Item[] = [
  {
    title: 'data.success',
    count: '50+',
  },
  {
    title: 'data.satisfied',
    count: '100+',
  },
  {
    title: 'data.innovative',
    count: '10+',
  },
  {
    title: 'data.support',
    count: '7/24',
  },
]

export default function CountSection() {
  const t = useTranslations('home.count')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='aos-init aos-animate mt-14 grid grid-cols-2 gap-5 md:grid-cols-4' data-aos='fade-up'>
        {Items.map((item, idx) => (
          <div key={idx} className='text-center'>
            <h4 className='mb-3 text-5xl '>
              <span className={`${idx % 2 === 0 ? 'text-fuchsia-500' : 'text-teal-500'}`}>{item.count}</span>
            </h4>
            <p className='text-slate-600 dark:text-slate-300'>{t(`${item.title}`)}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
