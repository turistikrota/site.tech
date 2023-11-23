import { LayoutProps } from '@/types/base'
import '@turistikrota/ui/assets/config.css'
import '@turistikrota/ui/assets/default.css'
import '@turistikrota/ui/fonts/verdana.css'
import 'boxicons/css/boxicons.min.css'
import type { Metadata } from 'next'
import { getTranslations } from 'next-intl/server'
import './globals.css'

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

export default async function RootLayout({ children }: React.PropsWithChildren<LayoutProps>) {
  return <>{children}</>
}
