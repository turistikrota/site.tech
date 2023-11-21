import BasicFooter from '@/components/footers/BasicFooter'
import DefaultHeader from '@/components/headers/DefaultHeader'
import React from 'react'

type Props = {
  children: React.ReactNode
  withoutFooter?: boolean
  fullHeight?: boolean
}

export function Layout({ children, fullHeight = false, withoutFooter = false }: Props) {
  return (
    <>
      <DefaultHeader></DefaultHeader>
      <main>{children}</main>
      {!withoutFooter && <BasicFooter></BasicFooter>}
    </>
  )
}

export default function DefaultLayout({ children }: React.PropsWithChildren) {
  return <Layout fullHeight>{children}</Layout>
}
