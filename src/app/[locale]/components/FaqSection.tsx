export default function FaqSection() {
  return (
    <section className='py-16 sm:py-24'>
      <div className='aos-init aos-animate container' data-aos='fade-up' data-aos-duration='2000'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>FAQs</span>
          <h1 className='mb-4 mt-3 text-3xl/tight font-medium'>Frequently Asked Questions</h1>
          <p className='text-gray-500'>Here are some of the basic types of questions for our customers</p>
        </div>
        <div data-fc-type='accordion' className='mt-14 lg:mx-auto lg:w-3/4 2xl:w-2/3'>
          <div className='mt-4 rounded-lg border border-gray-300'>
            <button className='open fc-col-open inline-flex w-full items-center justify-between p-5 text-left font-semibold transition '>
              {' '}
              Can I use this template for my client?
              <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
                <i className='fa-solid fa-angle-down'></i>
              </span>
            </button>
            <div className='h-auto w-full overflow-hidden overflow-hidden transition-[height] transition-all duration-300'>
              <p className='p-5 pt-3 text-gray-500 dark:text-gray-300'>
                {' '}
                Yup, the marketplace license allows you to use this theme in any end products. For more information on
                licenses, please refere license terms on marketplace.{' '}
              </p>
            </div>
          </div>
          <div className='mt-4 rounded-lg border border-gray-300'>
            <button className='fc-col-close inline-flex w-full items-center justify-between p-5 text-left font-semibold transition '>
              {' '}
              Can this theme work with WordPress?
              <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
                <i className='fa-solid fa-angle-down'></i>
              </span>
            </button>
            <div className='h-0 w-full overflow-hidden overflow-hidden transition-[height] transition-all duration-300'>
              <p className='p-5 pt-3 text-gray-500 dark:text-gray-300'>
                {' '}
                No. This is a HTML template. It won't directly with WordPress, though you can convert this into
                WordPress compatible theme.{' '}
              </p>
            </div>
          </div>
          <div className='mt-4 rounded-lg border border-gray-300'>
            <button className='fc-col-close inline-flex w-full items-center justify-between p-5 text-left font-semibold transition '>
              {' '}
              How do I get help with the theme?
              <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
                <i className='fa-solid fa-angle-down'></i>
              </span>
            </button>
            <div className='h-0 w-full overflow-hidden overflow-hidden transition-[height] transition-all duration-300'>
              <p className='p-5 pt-3 text-gray-500 dark:text-gray-300'>
                {' '}
                Use our dedicated support email (support@coderthemes.com) to send your issues or feedback. We are here
                to help anytime.{' '}
              </p>
            </div>
          </div>
          <div className='mt-4 rounded-lg border border-gray-300'>
            <button className='fc-col-close inline-flex w-full items-center justify-between p-5 text-left font-semibold transition '>
              {' '}
              Will you regularly give updates of Prompt ?
              <span className='material-symbols-rounded fc-collapse-open:rotate-180 block text-xl transition-all'>
                <i className='fa-solid fa-angle-down'></i>
              </span>
            </button>
            <div className='h-0 w-full overflow-hidden overflow-hidden transition-[height] transition-all duration-300'>
              <p className='p-5 pt-3 text-gray-500 dark:text-gray-300'>
                {' '}
                Yes, We will update the Prompt regularly. All the future updates would be available without any cost.{' '}
              </p>
            </div>
          </div>
        </div>
        <div className='mt-14 text-center'>
          <p className='inline-flex flex-wrap gap-1 rounded-lg bg-gray-100 px-5 py-2 text-sm'>
            Still have unanswered questions?
            <a href='#' className='transition-all hover:text-primary'>
              {' '}
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
