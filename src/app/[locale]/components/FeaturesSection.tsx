import React from 'react'

type Item = {
  title: string
  description: string
  icon: React.ReactNode
}

const Items: Item[] = [
  {
    title: 'High-Speed Wireless',
    description: `We've watched Tailwind grow up over the years and understand it better than almost anyone.`,
    icon: (
      <svg
        className='h-12 w-12 p-2 text-primary'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <rect id='bound' x='0' y='0' width='24' height='24'></rect>
          <rect id='Combined-Shape' fill='currentcolor ' x='3' y='13' width='18' height='7' rx='2'></rect>
          <path
            d='M17.4029496,9.54910207 L15.8599014,10.8215022 C14.9149052,9.67549895 13.5137472,9 12,9 C10.4912085,9 9.09418404,9.67104182 8.14910121,10.8106159 L6.60963188,9.53388797 C7.93073905,7.94090645 9.88958759,7 12,7 C14.1173586,7 16.0819686,7.94713944 17.4029496,9.54910207 Z M20.4681628,6.9788888 L18.929169,8.25618985 C17.2286725,6.20729644 14.7140097,5 12,5 C9.28974232,5 6.77820732,6.20393339 5.07766256,8.24796852 L3.54017812,6.96885102 C5.61676443,4.47281829 8.68922234,3 12,3 C15.3153667,3 18.3916375,4.47692603 20.4681628,6.9788888 Z'
            id='Combined-Shape'
            fill='currentcolor'
            opacity='0.3'
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: 'Community Events',
    description: 'You have a business to run. Stop worring about cross-browser keeping your components up to date.',
    icon: (
      <svg
        className='h-12 w-12 p-2 text-primary'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <polygon id='Shape' points='0 0 24 0 24 24 0 24'></polygon>
          <path
            d='M18,14 C16.3431458,14 15,12.6568542 15,11 C15,9.34314575 16.3431458,8 18,8 C19.6568542,8 21,9.34314575 21,11 C21,12.6568542 19.6568542,14 18,14 Z M9,11 C6.790861,11 5,9.209139 5,7 C5,4.790861 6.790861,3 9,3 C11.209139,3 13,4.790861 13,7 C13,9.209139 11.209139,11 9,11 Z'
            id='Combined-Shape'
            fill='currentcolor'
            opacity='0.3'
          ></path>
          <path
            d='M17.6011961,15.0006174 C21.0077043,15.0378534 23.7891749,16.7601418 23.9984937,20.4 C24.0069246,20.5466056 23.9984937,21 23.4559499,21 L19.6,21 C19.6,18.7490654 18.8562935,16.6718327 17.6011961,15.0006174 Z M0.00065168429,20.1992055 C0.388258525,15.4265159 4.26191235,13 8.98334134,13 C13.7712164,13 17.7048837,15.2931929 17.9979143,20.2 C18.0095879,20.3954741 17.9979143,21 17.2466999,21 C13.541124,21 8.03472472,21 0.727502227,21 C0.476712155,21 -0.0204617505,20.45918 0.00065168429,20.1992055 Z'
            id='Combined-Shape'
            fill='currentcolor'
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: 'Exercise Facilities',
    description: 'Replacing a maintains the amount of lines. When replacing a selection objectives and then create.',
    icon: (
      <svg
        className='h-12 w-12 p-2 text-primary'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <path
            d='M20,8 L18.173913,8 C17.0693435,8 16.173913,8.8954305 16.173913,10 L16.173913,12 C16.173913,12.5522847 15.7261978,13 15.173913,13 L8.86956522,13 C8.31728047,13 7.86956522,12.5522847 7.86956522,12 L7.86956522,10 C7.86956522,8.8954305 6.97413472,8 5.86956522,8 L4,8 L4,6 C4,4.34314575 5.34314575,3 7,3 L17,3 C18.6568542,3 20,4.34314575 20,6 L20,8 Z'
            id='Path'
            fill='currentcolor'
            opacity='0.3'
          ></path>
          <path
            d='M6.15999985,21.0604779 L8.15999985,17.5963763 C8.43614222,17.1180837 9.04773263,16.9542085 9.52602525,17.2303509 C10.0043179,17.5064933 10.168193,18.1180837 9.89205065,18.5963763 L7.89205065,22.0604779 C7.61590828,22.5387706 7.00431787,22.7026457 6.52602525,22.4265033 C6.04773263,22.150361 5.88385747,21.5387706 6.15999985,21.0604779 Z M17.8320512,21.0301278 C18.1081936,21.5084204 17.9443184,22.1200108 17.4660258,22.3961532 C16.9877332,22.6722956 16.3761428,22.5084204 16.1000004,22.0301278 L14.1000004,18.5660262 C13.823858,18.0877335 13.9877332,17.4761431 14.4660258,17.2000008 C14.9443184,16.9238584 15.5559088,17.0877335 15.8320512,17.5660262 L17.8320512,21.0301278 Z'
            id='Combined-Shape'
            fill='currentcolor'
            opacity='0.3'
          ></path>
          <path
            d='M20,10 L20,15 C20,16.6568542 18.6568542,18 17,18 L7,18 C5.34314575,18 4,16.6568542 4,15 L4,10 L5.86956522,10 L5.86956522,12 C5.86956522,13.6568542 7.21271097,15 8.86956522,15 L15.173913,15 C16.8307673,15 18.173913,13.6568542 18.173913,12 L18.173913,10 L20,10 Z'
            id='Combined-Shape'
            fill='currentcolor'
          ></path>
        </g>
      </svg>
    ),
  },
  {
    title: 'Comfortable Lounges',
    description: 'Risus sed vulputate odio ut enim blandit. Malesuada consequat interdum mattis facilisis.',
    icon: (
      <svg
        className='h-12 w-12 p-2 text-primary'
        viewBox='0 0 24 24'
        version='1.1'
        xmlns='http://www.w3.org/2000/svg'
        xmlnsXlink='http://www.w3.org/1999/xlink'
      >
        <g stroke='none' strokeWidth='1' fill='none' fillRule='evenodd'>
          <path
            d='M6,20 L4,20 C4,17.2385763 6.23857625,16 9,16 L15,16 C17.7614237,16 20,17.2385763 20,20 L18,20 C18,18.3431458 16.6568542,18 15,18 L9,18 C7.34314575,18 6,18.3431458 6,20 Z'
            id='Path-61'
            fill='currentcolor'
            opacity='0.3'
          ></path>
          <path
            d='M23,8 L21.173913,8 C20.0693435,8 19.173913,8.8954305 19.173913,10 L19.173913,12 C19.173913,12.5522847 18.7261978,13 18.173913,13 L5.86956522,13 C5.31728047,13 4.86956522,12.5522847 4.86956522,12 L4.86956522,10 C4.86956522,8.8954305 3.97413472,8 2.86956522,8 L1,8 C1,6.34314575 2.34314575,5 4,5 L20,5 C21.6568542,5 23,6.34314575 23,8 Z'
            id='Path'
            fill='currentcolor'
            opacity='0.3'
          ></path>
          <path
            d='M23,10 L23,15 C23,16.6568542 21.6568542,18 20,18 L4,18 C2.34314575,18 1,16.6568542 1,15 L1,10 L2.86956522,10 L2.86956522,12 C2.86956522,13.6568542 4.21271097,15 5.86956522,15 L18.173913,15 C19.8307673,15 21.173913,13.6568542 21.173913,12 L21.173913,10 L23,10 Z'
            id='Combined-Shape'
            fill='currentcolor'
          ></path>
        </g>
      </svg>
    ),
  },
]

export default function FeaturesSection() {
  return (
    <section className='relative mx-auto max-w-7xl py-20'>
      <div className='container relative'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>Features</span>
          <h2 className='my-5 text-xl font-semibold md:text-3xl'>Why Choose Us</h2>
          <p className='text-slate-500'>The benefits that will make you comfort</p>
        </div>
        <div className='mt-16 grid grid-cols-1 gap-4 lg:grid-cols-2'>
          {Items.map((item, idx) => (
            <div key={idx} className='rounded-md bg-slate-500/5 p-4 dark:bg-white/5'>
              <div className='flex gap-5'>
                <div className='flex h-12 w-12 items-center justify-center gap-5 rounded-md bg-primary/10'>
                  {item.icon}
                </div>
                <div>
                  <h5 className='mb-2'>{item.title}</h5>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
