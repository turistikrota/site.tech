export default function PricingSection() {
  return (
    <section className='py-16 sm:py-24'>
      <div className='container relative'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-2 py-1 text-xs text-primary/90'>Plans</span>
          <h1 className='mb-4 text-3xl/tight font-medium'>Pricing</h1>
          <p className='text-gray-500'>
            Pricing that <span className='text-primary'>works </span> for everyone
          </p>
        </div>
        <div className='mt-14 grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3'>
          <div data-aos='fade-up' data-aos-duration='500' className='aos-init aos-animate'>
            <div className='pointer-events-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)]'>
              <div className='h-full w-full rounded border border-gray-300 bg-white p-5 text-center'>
                <span className='text-lg text-primary'>Starter</span>
                <h1 className='mt-3 text-3xl/tight font-semibold'>
                  <sup className='text-sm font-normal text-gray-500'>$</sup> 49{' '}
                  <sub className='text-sm font-normal text-gray-500'>/month</sub>
                </h1>
                <div className='my-7 w-full border-b border-gray-200'></div>
                <div>
                  <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Up to 600 minutes usage time
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Use for personal only
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Add up to 10 attendees
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Technical support via email
                    </p>
                  </div>
                  <div className='mt-[120px] flex'>
                    <a
                      className='w-full rounded-lg border border-transparent bg-primary/10 py-3 text-primary/90 transition-all duration-300 hover:border hover:border-primary/20'
                      href='/prompt_tr/landing/software'
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='700' className='aos-init aos-animate'>
            <div className='pointer-events-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)]'>
              <div className='h-full w-full rounded border border-gray-300 bg-white p-5 text-center'>
                <span className='text-lg text-primary'>Professional</span>
                <h1 className='mt-3 text-3xl/tight font-semibold'>
                  <sup className='text-sm font-normal text-gray-500'>$</sup> 99{' '}
                  <sub className='text-sm font-normal text-gray-500'>/month</sub>
                </h1>
                <div className='my-7 w-full border-b border-gray-200'></div>
                <div>
                  <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Up to 6000 minutes usage time
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Use for personal or a commercial
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Add up to 100 attendees
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Up to 5 teams
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Technical support via email
                    </p>
                  </div>
                  <div className='mt-20 flex'>
                    <a
                      className='w-full rounded-lg border border-transparent bg-primary py-3 text-white transition-all duration-300 hover:border hover:border-primary hover:shadow-lg hover:shadow-primary/30 focus:shadow-none focus:outline focus:outline-primary/40'
                      href='/prompt_tr/landing/software'
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div data-aos='fade-up' data-aos-duration='900' className='aos-init aos-animate'>
            <div className='pointer-events-auto transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_1.5rem_0_rgba(0,0,0,.12)]'>
              <div className='h-full w-full rounded border border-gray-300 bg-white p-5 text-center'>
                <span className='text-lg text-primary'>Enterprise</span>
                <h1 className='mt-3 text-3xl/tight font-semibold'>
                  <sup className='text-sm font-normal text-gray-500'>$</sup> 599{' '}
                  <sub className='text-sm font-normal text-gray-500'>/month</sub>
                </h1>
                <div className='my-7 w-full border-b border-gray-200'></div>
                <div>
                  <div className='flex flex-col gap-4'>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Unlimited usage time
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Use for personal or a commercial
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Add Unlimited attendees
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>24x7 Technical support via phone
                    </p>
                    <p className='flex items-center gap-4 text-gray-600'>
                      <i className='fa-solid fa-check text-lg text-green-500'></i>Technical support via email
                    </p>
                  </div>
                  <div className='mt-20 flex'>
                    <a
                      className='w-full rounded-lg border border-transparent bg-primary/10 py-3 text-primary/90 transition-all duration-300 hover:border hover:border-primary/20'
                      href='/prompt_tr/landing/software'
                    >
                      Purchase Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
