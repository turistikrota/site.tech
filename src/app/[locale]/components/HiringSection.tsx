export default function HiringSection() {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='mb-16 text-center'>
          <h1 className='my-3 text-3xl font-medium'>We're Hiring</h1>
          <p className='mb-8 font-medium text-slate-500'>
            We're a team of lifelong learners. We're equal parts left and right brained.
          </p>
          <a
            className='rounded border border-black bg-black px-6 py-3 font-medium text-white transition-all duration-500 hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50'
            href='/prompt_tr/landing/agency'
          >
            Learn about our culture
          </a>
        </div>
        <div className='my-10 grid gap-y-4'>
          <a href='/prompt_tr/landing/agency'>
            <div className='aos-init aos-animate mx-auto max-w-3xl' data-aos='fade-up' data-aos-duration='500'>
              <div className='rounded-md border p-4'>
                <div className='flex flex-wrap items-center justify-between'>
                  <h5>Front-End Developer</h5>
                  <div className='flex items-center'>
                    <p className='text-slate-500'>Los Angeles / Remote</p>
                    <i className='fa-solid fa-angle-right ms-28'></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href='/prompt_tr/landing/agency'>
            <div className='aos-init aos-animate mx-auto max-w-3xl' data-aos='fade-up' data-aos-duration='500'>
              <div className='rounded-md border p-4'>
                <div className='flex flex-wrap items-center justify-between'>
                  <h5>Community Manager</h5>
                  <div className='flex items-center'>
                    <p className='text-slate-500'>New York / Full-Time</p>
                    <i className='fa-solid fa-angle-right ms-28'></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
          <a href='/prompt_tr/landing/agency'>
            <div className='aos-init aos-animate mx-auto max-w-3xl' data-aos='fade-up' data-aos-duration='500'>
              <div className='rounded-md border p-4'>
                <div className='flex flex-wrap items-center justify-between'>
                  <h5>UX/UI Designer</h5>
                  <div className='flex items-center'>
                    <p className='text-slate-500'>New York / Full-Time</p>
                    <i className='fa-solid fa-angle-right ms-28'></i>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
