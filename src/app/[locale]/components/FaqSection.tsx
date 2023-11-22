'use client'

import { useState } from 'react'

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
    <section className='mx-auto max-w-7xl py-16 sm:py-24'>
      <div className='aos-init aos-animate container' data-aos='fade-up' data-aos-duration='2000'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>FAQs</span>
          <h1 className='mb-4 mt-3 text-3xl/tight font-medium'>Frequently Asked Questions</h1>
          <p className='text-gray-500'>Here are some of the basic types of questions for our customers</p>
        </div>

        <div data-fc-type='accordion' className='mt-14 lg:mx-auto lg:w-3/4 2xl:w-2/3'>
          {Items.map((item, idx) => (
            <div key={idx} className='mt-4 rounded-md bg-white/5'>
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
                <p className='p-5 pt-3 text-gray-500 dark:text-gray-300'> {item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
