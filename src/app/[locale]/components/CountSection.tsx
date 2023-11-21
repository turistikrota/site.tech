export default function CountSection() {
  return (
    <section className='py-20'>
      <div className='container'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>About</span>
          <h2 className='my-5 text-xl font-semibold md:text-3xl'>More Productivity, Less Expenses</h2>
          <p className='text-slate-500'>From an established enterprise or a startup, we offer space that fits all.</p>
        </div>
        <div className='aos-init aos-animate mt-14 grid grid-cols-2 gap-5 md:grid-cols-4' data-aos='fade-up'>
          <div className='text-center'>
            <h4 className='mb-3 text-5xl '>
              <span>21</span>
            </h4>
            <p className='text-slate-600'>Meeting Rooms</p>
          </div>
          <div className='text-center'>
            <h4 className='mb-3 text-5xl '>
              <span>51</span>
            </h4>
            <p className='text-slate-600'>Event Spaces</p>
          </div>
          <div className='text-center'>
            <h4 className='mb-3 text-5xl '>
              <span>11</span>
            </h4>
            <p className='text-slate-600'>Studio Rooms</p>
          </div>
          <div className='text-center'>
            <h4 className='mb-3 text-5xl '>
              <span>500+</span>
            </h4>
            <p className='text-slate-600'>Seating Spaces</p>
          </div>
        </div>
      </div>
    </section>
  )
}
