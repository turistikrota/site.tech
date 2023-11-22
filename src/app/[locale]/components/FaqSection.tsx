'use client'

import { useState } from 'react'
import Section from './Section'

type Item = {
  question: string
  answer: string
}

const Items: Item[] = [
  {
    question: 'Can I use this template for my client?',
    answer: `Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace.`,
  },
  {
    question: 'Can I use this template for my client?',
    answer: `Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace.`,
  },
  {
    question: 'Can I use this template for my client?',
    answer: `Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace.`,
  },
  {
    question: 'Can I use this template for my client?',
    answer: `Yup, the marketplace license allows you to use this theme in any end products. For more information on licenses, please refere license terms on marketplace.`,
  },
]

export default function FaqSection() {
  const [active, setActive] = useState<number | null>(null)

  const toggle = (idx: number) => {
    if (active === idx) {
      setActive(null)
    } else {
      setActive(idx)
    }
  }

  return (
    <Section>
      <Section.Head
        title='Frequently Asked Questions'
        subtitle='Here are some of the basic types of questions for our customers'
      />
      <div data-fc-type='accordion' className='mt-16 flex flex-col gap-y-4 lg:mx-auto lg:w-3/4 2xl:w-2/3'>
        {Items.map((item, idx) => (
          <Section.Card key={idx} className='p-0'>
            <button
              className='open fc-col-open inline-flex w-full items-center justify-between p-5 text-left font-semibold transition'
              onClick={() => toggle(idx)}
            >
              {item.question}
              <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
                <i className='bx bx-chevron-down'></i>
              </span>
            </button>
            <div
              className={`w-full overflow-hidden transition-all duration-200 ${
                active === idx ? 'animate-fade-in' : 'hidden animate-fade-out'
              }`}
            >
              <p className='p-5 pt-3 text-gray-500 dark:text-gray-400'> {item.answer}</p>
            </div>
          </Section.Card>
        ))}
      </div>
    </Section>
  )
}
