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
    <section className='mx-auto max-w-7xl py-16 xl:py-24'>
      <div className='aos-init aos-animate container' data-aos='fade-up' data-aos-duration='1500'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-xs text-primary/90'>Integrations</span>
          <h1 className='mb-4 mt-3 text-3xl/tight font-medium'>Sync your data anywhere</h1>
          <p className='text-gray-500'>
            Sync your campaigns or other marketing data <span className='text-primary'>anywhere.</span>
          </p>
        </div>
        <div className='pt-16'>
          <div className='grid grid-cols-1 gap-7 xl:grid-cols-2'>
            {Items.map((item, idx) => (
              <div key={idx}>
                <div className='flex items-center gap-5 rounded bg-white/5 p-4'>
                  <i className={`bx w-16 text-7xl ${item.icon} ${item.iconColor}`} />
                  <div>
                    <h1>{item.title}</h1>
                    <p className='text-gray-500'>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
