export type RouteType = {
  base: string
}

export type Locales = 'en' | 'tr'

const Routes: Record<Locales, RouteType> = {
  tr: {
    base: 'https://turistikrota.com/tr',
  },
  en: {
    base: 'https://turistikrota.com/en',
  },
}

export const getStaticRoute = (locale: string) => {
  return Routes[locale as Locales]
}

export const mergeUrlWithLocale = (locale: string, url: string) => `/${locale}${url}`
