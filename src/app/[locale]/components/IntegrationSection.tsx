export default function IntegrationSection() {
  return (
    <section className='bg-gray-100 py-16 xl:py-24'>
      <div className='aos-init aos-animate container' data-aos='fade-up' data-aos-duration='1500'>
        <div className='text-center'>
          <span className='rounded-full bg-primary/10 px-3 py-1 text-xs text-primary/90'>Integrations</span>
          <h1 className='mb-4 mt-3 text-3xl/tight font-medium'>Sync your data anywhere</h1>
          <p className='text-gray-500'>
            Sync your campaigns or other marketing data <span className='text-primary'>anywhere.</span>
          </p>
        </div>
        <div className='pt-16'>
          <div className='grid grid-cols-1 gap-7 xl:grid-cols-2'>
            <div>
              <div className='flex items-center gap-5 rounded bg-white p-5'>
                <img src='/prompt_tr/assets/slack-87a81dba.png' className=' w-16' />
                <div>
                  <h1 className='mb-3'>Slack</h1>
                  <p className='text-gray-500'>
                    Slack is a platform for team communication: everything in one place, instantly searchable, available
                    wherever you go
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded bg-white p-5'>
                <img src='/prompt_tr/assets/fb-6e1f9ac1.png' className=' w-16' />
                <div>
                  <h1 className='mb-3'>Facebook Lead Ads</h1>
                  <p className='text-gray-500'>
                    Facebook lead ads make signing up for business information easy for people and more valuable for
                    businesses
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded bg-white p-5'>
                <img
                  src='data:image/jpeg;base64,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'
                  className=' w-16'
                />
                <div>
                  <h1 className='mb-3'>Salesforce</h1>
                  <p className='text-gray-500'>
                    Salesforce is a leading enterprise customer relationship manager (CRM) application
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded bg-white p-5'>
                <img
                  src='data:image/png;base64,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'
                  className=' w-16'
                />
                <div>
                  <h1 className='mb-3'>Airtable</h1>
                  <p className='text-gray-500'>
                    Organize anything with Airtable, a modern database created for everyone
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded bg-white p-5'>
                <img
                  src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACoAAAAqCAMAAADyHTlpAAAAAXNSR0IArs4c6QAAAqZQTFRFR3BMI6VmJKRtI6VmIqFlI6VmAP//I6ZmAP+AI6VmI6VlAP8AIpNcHI9ajtGxJKRbI6VmIapyHI9agL'
                  className='w-16 xl:w-32'
                />
                <div>
                  <h1 className='mb-3'>Google Sheets</h1>
                  <p className='text-gray-500'>
                    Create, edit, and share spreadsheets with Google Sheets, and get automated insights from data
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className='flex items-center gap-5 rounded bg-white p-5'>
                <img
                  src='data:image/jpeg;base64,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'
                  className=' w-16'
                />
                <div>
                  <h1 className='mb-3'>ActiveCampaign</h1>
                  <p className='text-gray-500'>
                    ActiveCampaign combines all aspects of email marketing into a single and easy-to-use platform
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
