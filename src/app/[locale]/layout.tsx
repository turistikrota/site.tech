import { LayoutProps } from '@/types/base'
import '@turistikrota/ui/assets/config.css'
import '@turistikrota/ui/fonts/verdana.css'
import 'boxicons/css/boxicons.min.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { Arimo } from 'next/font/google'
import '../globals.css'


export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('base')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    applicationName: 'Turistikrota',
    generator: 'Turistikrota',
    referrer: 'origin-when-cross-origin',
    icons: [
      {
        rel: 'icon',
        url: '/favicon.ico',
      },
    ],
    authors: [
      {
        name: 'Turistikrota',
        url: 'https://turistikrota.com',
      },
    ],
    metadataBase: new URL('https://turistikrota.com'),
    alternates: {
      languages: {
        en: '/en',
        tr: '/tr',
      },
    },
    colorScheme: 'light dark',
    robots: {
      index: true,
      follow: true,
      nocache: true,
      googleBot: {
        index: true,
        follow: true,
      },
    },
    openGraph: {
      title: t('meta.title'),
      description: t('meta.description'),
      type: 'website',
      url: 'https://turistikrota.com',
      images: [
        {
          url: 'https://s3.turistikrota.com/logo/vertical_500x500.png',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      site: '@turistikrota',
      creator: '@turistikrota',
      title: t('meta.title'),
      description: t('meta.description'),
      images: [
        {
          url: 'https://s3.turistikrota.com/logo/vertical_500x500.png',
        },
      ],
    },
    viewport: 'width=device-width, initial-scale=1.0',
  }
}
const arimo = Arimo({
  subsets: ['latin-ext'],
  display: 'swap',
  preload: true,
})

export default async function RootLayout({
  children,
  params:{locale},
}: React.PropsWithChildren<LayoutProps>) {
  const messages = (await import(`@/messages/${locale}.json`)).default
  return (
    <html lang={locale} className={arimo.className}>
      <body>
      <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
      </NextIntlClientProvider>
        
        <span
    className="-z-1 bg-primary-600/40 dark:bg-primary-500/30 fixed -start-[20%] top-[10%] h-[400px] w-[400px] rounded-full blur-[200px] md:start-[10%] lg:h-[600px] lg:w-[600px]"
  />
  <span
    className="-z-1 bg-secondary-600/40 dark:bg-secondary-500/30 fixed -end-[20%] bottom-[10%] h-[400px] w-[400px] rounded-full blur-[200px] md:end-[10%] lg:h-[600px] lg:w-[600px]"
  />
        </body>
    </html>
  )
}
