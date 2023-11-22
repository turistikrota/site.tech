import { LayoutProps } from '@/types/base'
import DefaultLayout from '../layouts/default'
import BlogSection from './components/BlogSection'
import CountSection from './components/CountSection'
import FaqSection from './components/FaqSection'
import FeaturesSection from './components/FeaturesSection'
import HeadSection from './components/HeadSection'
import IntegrationSection from './components/IntegrationSection'
import OurServicesSection from './components/OurServicesSection'
import WhatWeDoSection from './components/WhatWeDoSection'

export default function Home({ params: { locale } }: LayoutProps) {
  return (
    <DefaultLayout>
      <HeadSection />
      <WhatWeDoSection />
      <CountSection />
      <OurServicesSection />
      <IntegrationSection />
      <FeaturesSection />
      <BlogSection locale={locale} />
      <FaqSection />
    </DefaultLayout>
  )
}
