'use client'

import { getStaticRoute } from '@/static/page'
import MobileHeader from '@turistikrota/ui/headers/mobile'
import TopHeader from '@turistikrota/ui/headers/top'
import Logo from '@turistikrota/ui/logo'
import { useLocale, useTranslations } from 'next-intl'
import Link from 'next/link'
import HeaderLogo from './HeaderLogo'

export default function DefaultHeader() {
  const locale = useLocale()
  const t = useTranslations('header.links')
  return (
    <>
      <TopHeader>
        <TopHeader.Left>
          <Link href={getStaticRoute(locale).base} className='transition-all duration-200 ease-in-out hover:opacity-80'>
            {t('home')}
          </Link>
        </TopHeader.Left>
      </TopHeader>
      <MobileHeader withTopHeader>
        <MobileHeader.Left>
          <HeaderLogo>
            <Logo width={186} height={30} />
          </HeaderLogo>
        </MobileHeader.Left>
        <MobileHeader.Fill className='hidden md:flex'>{``}</MobileHeader.Fill>
        <MobileHeader.Right></MobileHeader.Right>
      </MobileHeader>
    </>
  )
}
