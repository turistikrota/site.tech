import { useTranslations } from 'next-intl'
import Image from 'next/image'
import Link from 'next/link'
import Section from './Section'

type Tag = 'Design' | 'Development' | 'Marketing' | 'Branding' | 'UI/UX' | 'Photography' | 'Video' | 'Business'

type Blog = {
  title: string
  description: string
  date: string
  image: string
  link: string
  tag: Tag
}

type Props = {
  locale: string
}

const Blogs: Blog[] = [
  {
    title: 'Worker API ile JavaScript’te Multithreading',
    description: `Dünya’da bir canlının yaşayabilmesi için ‘su’ veya ‘oksijen’ ne demekse, JavaScript’te Web geliştirme için öyledir. Hatta NodeJS ile başlayarak daha sonrasında Deno ve Bun ile sunucu tarafına geçen JavaScript, günümüzde mobil uygulama geliştirmeden AI uygulamalarına performanslı mikroservis uygulamalarından web uygulamalarına kadar her yerde kullanılabilirdir.`,
    date: '2023-11-21',
    image: '/blogs/js-multithread.png',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/worker-api-ile-javascriptte-multithreading-7c2b5b581ee3',
  },
  {
    title: 'Etkili Sürüm Yönetimiyle CI/CD Süreçlerini Optimize Etme',
    description: `Geliştirme sürecimizde karşımıza çıkan ve çoğunlukla pas geçilen en önemli kavramlardan biri CI/CD’dir. Continuous Integration (CI — Sürekli Entegrasyon) ve Continuous Deployment (CD — Sürekli Dağıtım) pratikleri, yazılım kalitesini artırmak ve geliştirme sürecini otomatize etmek için oldukça önemlidir. Bu yazıda CI/CD işlemlerini Git’in tag özelliği ve GitHub’un Release özelliği ile nasıl daha etkili bir şekilde yapacağımızı göreceğiz.`,
    date: '2023-11-9',
    image: '/blogs/github-ci-cd.png',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/etkili-s%C3%BCr%C3%BCm-y%C3%B6netimiyle-ci-cd-s%C3%BCre%C3%A7lerini-optimize-etme-1b6c7231a427',
  },
  {
    title: 'Hibrit Yaklaşım: Asenkron-Senkron Sistem Tasarımı',
    description: `Günümüz yazılım dünyasında performans, ölçeklenebilirlik ve kaynak verimliliği kritik öneme sahiptir. Bu yazıda, asenkron ve senkron işlemleri birleştirerek bu hedeflere nasıl ulaşılabileceğini detaylı bir şekilde inceliyoruz.`,
    date: '2023-10-31',
    image: '/blogs/async-sync.png',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/hibrit-yakla%C5%9F%C4%B1m-asenkron-senkron-sistem-tasar%C4%B1m%C4%B1-fd03da95b1fc',
  },
  {
    title: 'React.useMemo: Performansı Artırmak ve Optimize Etmek için Derinlemesine İnceleme',
    description: `React, kullanıcı arayüzleri oluşturmak için oldukça popüler bir JavaScript kütüphanesidir. Ancak, büyük ve karmaşık projelerde performans sorunları ortaya çıkabilir. Bu yazıda, React uygulamalarında performansı optimize etmek için kullanılan useMemo hook’unu derinlemesine inceleyeceğiz. useMemo, pahalı hesaplamaları ve gereksiz render’ları önlemek, belleği optimize etmek ve böylece uygulamanın performansını artırmak için kullanılır. Ayrıca, useMemo'nun Vue.js’teki computed özelliği ile benzerliklerini ve useCallback ile arasındaki farkları da ele alacağız. Bu yazı, useMemo'yu etkili bir şekilde kullanarak daha optimize ve kullanıcı dostu uygulamalar geliştirmenize yardımcı olacaktır.`,
    date: '2023-9-29',
    image: '/blogs/use-memo.png',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/react-usememo-performans%C4%B1-art%C4%B1rmak-ve-optimize-etmek-i%C3%A7in-derinlemesine-i%CC%87nceleme-8257a4886d04',
  },
  {
    title: 'The “My Devices” Feature: Managing Sessions Across Multiple Clients',
    description: `Learn how to manage different sessions across multiple devices and understand the intricacies of logging out of a device when a session ends. Go a step further and discover how you can list the user’s other devices through an app. This article will guide you through the process, emphasizing the importance of security and user management.`,
    date: '2023-9-26',
    image: '/blogs/my-devices.png',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/the-my-devices-feature-multiple-clients-1b77f35961c3',
  },
  {
    title: 'The Cillop Architecture',
    description: `In today’s rapidly evolving tech world, having a scalable, maintainable, and understandable project structure is a key element. The Cillop architecture, inspired by the principles of Clean Architecture, offers just that. Let's take a closer look.`,
    date: '2023-8-20',
    image: '/blogs/cillop.webp',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/the-cillop-architecture-675ff2102b5a',
  },
  {
    title: 'Harder, Better, Faster, Stronger Dockerfile',
    description: `Earlier, I explained how we can minimize the dockerfile in a golang project. Today, I’m going to tell you how we can make it work faster.`,
    date: '2023-7-16',
    image: '/blogs/stronger-dockerfile.webp',
    tag: 'Development',
    link: 'https://medium.com/goturkiye/harder-better-faster-stronger-dockerfile-7f5f5abd8c2f',
  },
  {
    title: 'Make Your CI/CD Pipeline',
    description: `Today we will write our own ci/cd pipeline with our own docker image in our gitlab repository and deploy this pipeline to our own linux server using gitlab runner.`,
    date: '2023-1-14',
    image: '/blogs/make-ci-cd.png',
    tag: 'Development',
    link: 'https://9ssi7.medium.com/make-your-ci-cd-pipeline-734e9f8a906f',
  },
]

const TagClasses: Record<Tag, string> = {
  Design: 'bg-black',
  Development: 'bg-secondary',
  Marketing: 'bg-orange',
  Branding: 'bg-green',
  'UI/UX': 'bg-blue',
  Photography: 'bg-pink',
  Video: 'bg-purple',
  Business: 'bg-red',
}

export default function BlogSection({ locale }: Props) {
  const t = useTranslations('home.blog')

  const mapDateToLocale = (date: string) => {
    const dateObj = new Date(date)
    return dateObj.toLocaleDateString(locale, {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }
  return (
    <Section>
      <Section.Head title={t('title')} subtitle={t('subtitle')} />
      <div className='mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
        {Blogs.map((blog, idx) => (
          <Section.Card key={idx} className='group'>
            <div className='relative'>
              <div className='absolute end-4 top-3'>
                <span className={`rounded-md px-3 py-1 text-sm font-medium text-white ${TagClasses[blog.tag]}`}>
                  {blog.tag}
                </span>
              </div>
              <Image
                src={blog.image}
                alt={blog.title}
                width={500}
                height={300}
                className='h-80 min-h-full rounded-t-md object-cover'
              />
              <div className='absolute -bottom-5'></div>
            </div>
            <div className='p-6'>
              <p className='text-sm'>{mapDateToLocale(blog.date)}</p>
              <h4 className='my-2 text-lg font-semibold transition-colors duration-200 group-hover:text-secondary'>
                <Link href={blog.link} target='_blank'>
                  {blog.title}
                </Link>
              </h4>
              <p className='my-2 text-slate-500 dark:text-slate-400'>
                {blog.description.slice(0, 100)}
                ...&nbsp;
                <Link
                  className='transition-colors duration-200 group-hover:text-secondary'
                  href={blog.link}
                  target='_blank'
                >
                  Read More
                </Link>
              </p>
            </div>
          </Section.Card>
        ))}
      </div>
    </Section>
  )
}
