import { LayoutProps } from '@/types/base'
import '@turistikrota/fonts/verdana.css'
import '@turistikrota/ui/assets/config.css'
import '@turistikrota/ui/assets/default.css'
import 'boxicons/css/boxicons.min.css'
import type { Metadata } from 'next'
import { NextIntlClientProvider } from 'next-intl'
import { getTranslations } from 'next-intl/server'
import { notFound } from 'next/navigation'
import '../globals.css'

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('base')
  return {
    title: t('meta.title'),
    description: t('meta.description'),
    keywords: t('meta.keywords'),
    applicationName: 'TuristikrotaTech',
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
        url: 'https://tech.turistikrota.com',
      },
    ],
    metadataBase: new URL('https://tech.turistikrota.com'),
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
      url: 'https://tech.turistikrota.com',
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

const locales = ['en', 'tr']

export default async function RootLayout({ children, params: { locale } }: React.PropsWithChildren<LayoutProps>) {
  if (!locales.includes(locale as any)) return notFound()
  const messages = (await import(`@/messages/${locale}.json`)).default
  return (
    <html lang={locale}>
      <head>
        <link rel='sitemap' type='application/xml' href='/sitemap.xml' />
      </head>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  )
}
