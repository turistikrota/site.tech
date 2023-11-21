export default function ClientsSection() {
  return (
    <section className='relative bg-gradient-to-r from-gray-100/70 to-gray-100 py-16 xl:py-24'>
      <div className='absolute inset-x-0 top-0 hidden sm:block'>
        <img src='/prompt_tr/assets/white-wave-b5c33892.svg' alt='svg' className='w-full -scale-x-100' />
      </div>
      <div className='py-5'>
        <div className='aos-init aos-animate container' data-aos='fade-up' data-aos-duration='300'>
          <div className='text-center'>
            <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>Clients</span>
            <h1 className='mb-4 mt-3 text-3xl/tight font-medium'>The smart people management you need</h1>
            <p className='text-gray-500'>
              21,000+ organizations trust <span className='text-primary'>Prompt</span> to drive perfomance &amp;
              engagement
            </p>
          </div>
          <div className='mt-14 flex flex-wrap items-center justify-center gap-10 lg:gap-24'>
            <div>
              <img src='/prompt_tr/assets/amazon-5c34b23a.svg' className='h-8' />
            </div>
            <div>
              <img src='/prompt_tr/assets/google-28b6148d.svg' className='h-8' />
            </div>
            <div>
              <img src='/prompt_tr/assets/paypal-e77251d8.svg' className='h-8' />
            </div>
            <div>
              <img src='/prompt_tr/assets/spotify-5b2dc0cc.svg' className='h-8' />
            </div>
            <div>
              <img src='/prompt_tr/assets/shopify-8fcfc25b.svg' className='h-8' />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
