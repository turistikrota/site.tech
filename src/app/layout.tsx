import { LayoutProps } from '@/types/base'
import '@turistikrota/fonts/verdana.css'
import '@turistikrota/ui/assets/config.css'
import '@turistikrota/ui/assets/default.css'
import 'boxicons/css/boxicons.min.css'
import type { Metadata } from 'next'
import './globals.css'

export async function generateMetadata(): Promise<Metadata> {
  return {
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
    viewport: 'width=device-width, initial-scale=1.0',
  }
}

export default async function RootLayout({ children }: React.PropsWithChildren<LayoutProps>) {
  return <>{children}</>
}
