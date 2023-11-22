import Section from './Section'

type Item = {
  title: string
  description: string
  icon: string
  iconColor: string
}

const Items: Item[] = [
  {
    title: 'Discord',
    description:
      'Discord is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    icon: 'bxl-discord-alt',
    iconColor: 'text-[#7289da]',
  },
  {
    title: 'Discord',
    description:
      'Discord is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    icon: 'bxl-discord-alt',
    iconColor: 'text-[#7289da]',
  },
  {
    title: 'Discord',
    description:
      'Discord is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    icon: 'bxl-discord-alt',
    iconColor: 'text-[#7289da]',
  },
  {
    title: 'Discord',
    description:
      'Discord is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    icon: 'bxl-discord-alt',
    iconColor: 'text-[#7289da]',
  },
  {
    title: 'Discord',
    description:
      'Discord is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    icon: 'bxl-discord-alt',
    iconColor: 'text-[#7289da]',
  },
  {
    title: 'Discord',
    description:
      'Discord is a platform for team communication: everything in one place, instantly searchable, available wherever you go',
    icon: 'bxl-discord-alt',
    iconColor: 'text-[#7289da]',
  },
]

export default function IntegrationSection() {
  return (
    <Section>
      <Section.Head title='Sync your data anywhere' subtitle='Sync your campaigns or other marketing data anywhere' />
      <div className='mt-16 grid grid-cols-1 gap-4 xl:grid-cols-2'>
        {Items.map((item, idx) => (
          <Section.Card key={idx} className='flex items-center gap-6'>
            <i className={`bx w-16 text-7xl ${item.icon} ${item.iconColor}`} />
            <div>
              <h5>{item.title}</h5>
              <p className='text-slate-500 dark:text-slate-400'>{item.description}</p>
            </div>
          </Section.Card>
        ))}
      </div>
    </Section>
  )
}
