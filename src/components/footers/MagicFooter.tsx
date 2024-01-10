import { getStaticRoute } from '@/static/page'
import Footer from '@turistikrota/ui/footer'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import { FC } from 'react'

const MagicFooter: FC = () => {
  const t = useTranslations()
  const locale = useLocale()
  return (
    <Footer>
      <Footer.Copyright>
        <Footer.Copyright.Item>
          © {new Date().getFullYear()} {t('footer.copyright')}
        </Footer.Copyright.Item>
        <Footer.Copyright.Item>
          <Link className='duration-200 hover:brightness-125' href={getStaticRoute(locale).contracts.terms}>
            {t('footer.terms')}
          </Link>
          &bull;
          <Link className='duration-200 hover:brightness-125' href={getStaticRoute(locale).contracts.privacyNotify}>
            {t('footer.privacy-policy')}
          </Link>
          &bull;
          <Link className='duration-200 hover:brightness-125' href={getStaticRoute(locale).contracts.cookies}>
            {t('footer.cookies')}
          </Link>
        </Footer.Copyright.Item>
      </Footer.Copyright>
    </Footer>
  )
}

export default MagicFooter
