export default function HeadSection() {
  return (
    <section className='relative max-w-7xl mx-auto py-44 px-4'>
      <div className=' hero-with-shapes'>
        <div className='shape1 bg-primary bg-opacity-20'></div>
        <div className='shape2 bg-secondary bg-opacity-20'></div>
        <div className='shape3 bg-primary bg-opacity-20'></div>
        <div className='container'>
          <div>
            <h1 className='my-5 text-3xl font-medium md:text-5xl'>
              We design user experiences that <span className="bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent">works</span>
            </h1> 
            <p className='mb-20 mt-6 w-3/4 text-lg font-medium text-slate-600 dark:text-slate-400'>
              We're a top-notch web design and development team helping business to craft the meaningful and interactive
              product experiences.
            </p>
            <div className='flex flex-wrap items-center gap-5'>
              <a
                className='rounded border border-black dark:border-white px-6 py-3 transition-all duration-500 hover:border-black hover:bg-black hover:text-white hover:shadow-lg hover:shadow-black/50 focus:outline focus:outline-black/50'
                href='/prompt_tr/landing/agency'
              >
                Learn More
              </a>
            
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
