import createMiddleware from 'next-intl/middleware'

export default createMiddleware({
  locales: ['en', 'tr'],
  defaultLocale: 'tr',
  localeDetection: true,
  localePrefix: 'always',
})

export const config = {
  // Skip all paths that should not be internationalized
  matcher: ['/((?!api|_next|favicon.ico|blogs|.*\\..*).*)'],
}
