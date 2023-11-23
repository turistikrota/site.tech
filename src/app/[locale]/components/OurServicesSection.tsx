import Section from '@turistikrota/ui/section/landing'
import { useTranslations } from 'next-intl'

type Item = {
  title: string
  description: string
  icon: string
}

const Items: Item[] = [
  {
    title: 'data.web.title',
    description: `data.web.description`,
    icon: 'bx-world text-primary',
  },
  {
    title: 'data.mobile.title',
    description: `data.mobile.description`,
    icon: 'bxs-phone text-teal-500',
  },
  {
    title: 'data.accessibility.title',
    description: `data.accessibility.description`,
    icon: 'bx-accessibility text-rose-500',
  },
  {
    title: 'data.seo.title',
    description: `data.seo.description`,
    icon: 'bx-search-alt text-fuchsia-500',
  },
  {
    title: 'data.server.title',
    description: `data.server.description`,
    icon: 'bxs-cloud text-primary',
  },
  {
    title: 'data.support.title',
    description: `data.support.description`,
    icon: 'bxs-help-circle text-teal-500',
  },
]

export default function OurServicesSection() {
  const t = useTranslations('home.services')
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-[30px] md:grid-cols-2 lg:grid-cols-3'>
        {Items.map((item, idx) => (
          <div
            key={idx}
            className='group relative mt-4 overflow-hidden rounded-xl text-center transition duration-500 ease-in-out lg:px-6'
          >
            <div className='relative -m-3 overflow-hidden text-transparent'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
                className='mx-auto h-28 w-28 rotate-[30deg] fill-slate-500/5 dark:fill-white/5'
              >
                <path d='M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z'></path>
              </svg>
              <div className='absolute end-0 start-0 top-2/4 mx-auto flex -translate-y-2/4 items-center justify-center rounded-xl align-middle text-3xl transition duration-500 ease-in-out'>
                <i className={`bx ${item.icon}`}></i>
              </div>
            </div>
            <div className='mt-6'>
              <h4 className='text-lg font-medium'>{t(item.title)}</h4>
              <p className='mt-3 text-slate-500 dark:text-slate-400'>{t(item.description)}</p>
            </div>
          </div>
        ))}
      </div>
    </Section>
  )
}
