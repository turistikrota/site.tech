import React from 'react'

type CardProps = {
  className?: string
}

type HeadProps = {
  title: string
  subtitle: string
}

type SectionType = React.FC<React.PropsWithChildren> & {
  Head: React.FC<HeadProps>
  Card: React.FC<React.PropsWithChildren<CardProps>>
}

const Card: React.FC<React.PropsWithChildren<CardProps>> = ({ className, children }) => {
  return (
    <div
      className={`animate-fade-in rounded-md bg-gray-400/5 p-4 transition-all duration-200 dark:bg-white/5 ${
        className ? className : ''
      }`}
    >
      {children}
    </div>
  )
}

const Head: React.FC<HeadProps> = ({ title, subtitle }) => {
  return (
    <div className='text-center'>
      <h2 className='my-3 text-2xl font-semibold md:my-5 md:text-4xl'>{title}</h2>
      <p className='text-slate-600 dark:text-slate-400'>{subtitle}</p>
    </div>
  )
}

const Section: SectionType = ({ children }) => {
  return (
    <section className='px-4 py-20 xl:px-0'>
      <div className='mx-auto max-w-7xl'>{children}</div>
    </section>
  )
}

Section.Head = Head
Section.Card = Card

export default Section
