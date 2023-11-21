export default function PricingDetailedSection() {
  return (
    <section className='py-16 xl:py-24'>
      <div className='aos-init aos-animate container' data-aos='fade-up' data-aos-duration='1500'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary'>Pricing</span>
          <h1 className='mb-4 mt-3 text-3xl/tight font-medium'>Pricing Plans </h1>
          <p className='text-gray-500'>
            Pricing that <span className='text-primary'>works </span> for everyone.
          </p>
        </div>
        <div className='overflow-x-auto pt-16'>
          <div className='inline-block overflow-hidden'>
            <table className='min-w-full leading-normal'>
              <thead>
                <tr className='divide-y text-center'>
                  <th className='w-1/2 border-b-2 border-t px-5 py-4 text-start text-xs xl:w-2/5'></th>
                  <th className='w-1/4 px-5 py-4 xl:w-[15%]'>
                    <h1>Starter</h1>
                    <p className='text-xs text-gray-500'>$40/mo</p>
                  </th>
                  <th className='w-1/4 border-s px-5 py-4'>
                    <h1>
                      Professional{' '}
                      <span className='inline-flex rounded-full bg-red-500 px-3 py-1 text-xs text-white'>Popular</span>{' '}
                    </h1>
                    <p className='text-xs text-gray-500'>$60/mo</p>
                  </th>
                  <th className='w-[10%] border-s px-5 py-4'>
                    <h1>Enterprise</h1>
                    <p className='text-xs text-gray-500'>$300/mo</p>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className='divide-y-2 text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Landing pages</p>
                  </td>
                  <td className='p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Drag-and-drop editor</p>
                  </td>
                  <td className='p-3'></td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Email marketing</p>
                  </td>
                  <td className='p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Ad retargeting</p>
                  </td>
                  <td className='p-3'>
                    <span className='inline-flex rounded-full bg-primary px-3 py-1 text-xs text-white'>
                      Add-on Available
                    </span>
                  </td>
                  <td className='border-s p-3'></td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Messenger integration</p>
                  </td>
                  <td className='p-3'></td>
                  <td className='border-s p-3'></td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Live chat</p>
                  </td>
                  <td className='p-3'></td>
                  <td className='border-s p-3'>
                    <span className='inline-flex rounded-full bg-primary px-3 py-1 text-xs text-white'>
                      Add-on Available
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>Conversational bots</p>
                  </td>
                  <td className='p-3'></td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='divide-y text-center'>
                  <td className='border-b p-3 text-start'>
                    <p>SEO recommendations &amp; optimizations</p>
                  </td>
                  <td className='p-3'></td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                  <td className='border-s p-3'>
                    <span>
                      <i className='fa-solid fa-check text-green-500'></i>
                    </span>
                  </td>
                </tr>
                <tr className='border'></tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  )
}
