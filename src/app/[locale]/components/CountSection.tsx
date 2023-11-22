import Section from './Section'

type Item = {
  title: string
  count: number
}

const Items: Item[] = [
  {
    title: 'Meeting Rooms',
    count: 21,
  },
  {
    title: 'Event Spaces',
    count: 51,
  },
  {
    title: 'Studio Rooms',
    count: 11,
  },
  {
    title: 'Seating Spaces',
    count: 500,
  },
]

export default function CountSection() {
  return (
    <Section>
      <Section.Head
        title='More Productivity, Less Expenses'
        subtitle='From an established enterprise or a startup, we offer space that fits all.'
      />
      <div className='aos-init aos-animate mt-14 grid grid-cols-2 gap-5 md:grid-cols-4' data-aos='fade-up'>
        {Items.map((item, idx) => (
          <div key={idx} className='text-center'>
            <h4 className='mb-3 text-5xl '>
              <span className={`${idx % 2 === 0 ? 'text-fuchsia-500' : 'text-teal-500'}`}>{item.count}</span>
            </h4>
            <p className='text-slate-600 dark:text-slate-300'>{item.title}</p>
          </div>
        ))}
      </div>
    </Section>
  )
}
