'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import Logo from '@turistikrota/ui/logo'
import HeaderLogo from './HeaderLogo'

export default function DefaultHeader() {
  return (
    <>
      <MobileHeader withTopHeader={false} defaultFixed>
        <MobileHeader.Left>
          <HeaderLogo>
            <Logo width={186} height={30} />
          </HeaderLogo>
        </MobileHeader.Left>
        <MobileHeader.Fill className='hidden md:flex'>{``}</MobileHeader.Fill>
        <MobileHeader.Right>
        </MobileHeader.Right>
      </MobileHeader>
    </>
  )
}