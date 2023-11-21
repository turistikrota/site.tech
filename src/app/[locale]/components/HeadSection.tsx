export default function HeadSection() {
  return (
    <section className='relative bg-amber-500/5 py-44'>
      <div className=' hero-with-shapes'>
        <div className='shape1'></div>
        <div className='shape2'></div>
        <div className='shape3'></div>
        <div className='container'>
          <div>
            <div
              className='aos-init aos-animate mb-6 inline-block rounded-md bg-amber-500/10 px-4 py-2'
              data-aos='fade-right'
              data-aos-duration='1000'
            >
              <a href='/prompt_tr/landing/agency'>
                <div className='flex items-center gap-2'>
                  <div className='inline-block rounded-full bg-orange-500 px-2 text-sm text-white'>New!</div>
                  <div className='font-medium'>Check our latest article on design</div>
                </div>
              </a>
            </div>
            <h1 className='my-5 text-3xl font-medium text-gray-700 md:text-5xl'>
              We design user experiences that{' '}
              <span className='relative after:absolute after:inset-x-0 after:bottom-0 after:-z-10 after:h-4 after:w-full after:bg-amber-200 md:after:h-6'>
                works
              </span>
            </h1>
            <p className='mb-20 mt-6 w-3/4 text-lg font-medium text-slate-600'>
              We're a top-notch web design and development team helping business to craft the meaningful and interactive
              product experiences.
            </p>
            <div className='flex flex-wrap items-center gap-5'>
              <a
                className='rounded border border-black bg-black px-6 py-3 text-white transition-all duration-500 hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50'
                href='/prompt_tr/landing/agency'
              >
                <i className='fa-solid fa-arrow-down me-2'></i> View Our Work
              </a>
              <a
                className='rounded border border-black px-6 py-3 transition-all duration-500 hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50'
                href='/prompt_tr/landing/agency'
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className='absolute end-0 top-48 hidden md:block'>
        <div className='vertical-rl flex items-center gap-5 px-2'>
          <a className='text-lg' href='/prompt_tr/landing/agency'>
            Twitter
          </a>
          <a className='text-lg' href='/prompt_tr/landing/agency'>
            Facebook
          </a>
          <a className='text-lg' href='/prompt_tr/landing/agency'>
            Instagram
          </a>
        </div>
      </div>
    </section>
  )
}
