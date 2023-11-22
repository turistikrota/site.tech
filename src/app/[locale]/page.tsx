import DefaultLayout from '../layouts/default'
import BlogSection from './components/BlogSection'
import ClientsSection from './components/ClientsSection'
import CountSection from './components/CountSection'
import FaqSection from './components/FaqSection'
import FeaturesSection from './components/FeaturesSection'
import HeadSection from './components/HeadSection'
import HiringSection from './components/HiringSection'
import IntegrationSection from './components/IntegrationSection'
import OurServicesSection from './components/OurServicesSection'
import WhatWeDoSection from './components/WhatWeDoSection'

export default function Home() {
  return (
    <DefaultLayout>
      <HeadSection />
      <WhatWeDoSection />
      <CountSection />
      <ClientsSection />
      <IntegrationSection />
      <FeaturesSection />
      <BlogSection />
      <OurServicesSection />
      <HiringSection />
      <FaqSection />
    </DefaultLayout>
  )
}
