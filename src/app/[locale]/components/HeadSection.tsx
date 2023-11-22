export default function HeadSection() {
  return (
    <section className='relative mx-auto max-w-7xl px-4 py-48 xl:px-0'>
      <div className='hero-with-shapes'>
        <div className='shape1 bg-primary bg-opacity-20'></div>
        <div className='shape2 bg-secondary bg-opacity-20'></div>
        <div className='shape3 bg-primary bg-opacity-20'></div>

        <div>
          <h1 className='my-5 text-5xl font-medium md:text-6xl'>
            <span className='bg-gradient-to-r from-fuchsia-500 to-teal-500 bg-clip-text text-transparent'>
              We design user experiences that works
            </span>
          </h1>
          <p className='mb-20 mt-6 w-3/4 text-lg font-medium text-slate-600 dark:text-slate-400'>
            We're a top-notch web design and development team helping business to craft the meaningful and interactive
            product experiences.
          </p>
        </div>
      </div>
    </section>
  )
}
