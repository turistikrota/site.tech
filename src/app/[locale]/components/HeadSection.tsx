import { useTranslations } from 'next-intl'
import Link from 'next/link'

export default function HeadSection() {
  const t = useTranslations('home.head')
  return (
    <section className='relative mx-auto max-w-7xl px-4 py-48 xl:px-0'>
      <div className='hero-with-shapes'>
        <div className='shape1 bg-primary bg-opacity-20'></div>
        <div className='shape2 bg-secondary bg-opacity-20'></div>
        <div className='shape3 bg-primary bg-opacity-20'></div>

        <div>
          <h1 className='my-5 text-5xl font-medium md:text-6xl'>
            <span className='bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent'>
              {t('title')}
            </span>
          </h1>
          <p className='mb-20 mt-6 w-3/4 text-lg font-medium text-slate-600 dark:text-slate-400'>{t('subtitle')}</p>
          <div className='flex flex-wrap items-center gap-5'>
            <Link
              className='animate-fade-in rounded-md bg-gray-400/5 px-6 py-3 transition-all duration-200 hover:bg-gray-400/10 dark:bg-white/5 dark:hover:bg-white/10'
              href='mailto:tech@turistikrota.com'
            >
              {t('contact')}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
