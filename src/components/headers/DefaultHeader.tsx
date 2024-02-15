'use client'

import MobileHeader from '@turistikrota/ui/headers/mobile'
import ModernLogoProvider from './ModernLogo'

export default function DefaultHeader() {
  return (
    <>
      <MobileHeader defaultFixed>
        <MobileHeader.Left>
          <ModernLogoProvider />
        </MobileHeader.Left>
        <MobileHeader.Fill className='hidden md:flex'>{``}</MobileHeader.Fill>
        <MobileHeader.Right></MobileHeader.Right>
      </MobileHeader>
    </>
  )
}
