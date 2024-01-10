export type RouteType = {
  base: string
  contracts: {
    terms: string
    privacyNotify: string
    cookies: string
  }
}

export type Locales = 'en' | 'tr'

const Routes: Record<Locales, RouteType> = {
  tr: {
    base: 'https://turistikrota.com/tr',
    contracts: {
      terms: 'https://turistikrota.com/tr/sozlesmeler/kullanim-kosullari',
      privacyNotify: 'https://turistikrota.com/tr/sozlesmeler/gizlilik-bildirimi',
      cookies: 'https://turistikrota.com/tr/sozlesmeler/cerezler',
    },
  },
  en: {
    base: 'https://turistikrota.com/en',
    contracts: {
      terms: 'https://turistikrota.com/en/contracts/terms-of-use',
      privacyNotify: 'https://turistikrota.com/en/contracts/privacy-notice',
      cookies: 'https://turistikrota.com/en/contracts/cookies',
    },
  },
}

export const getStaticRoute = (locale: string) => {
  return Routes[locale as Locales]
}

export const mergeUrlWithLocale = (locale: string, url: string) => `/${locale}${url}`
