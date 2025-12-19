import React from 'react'

function Everythingbooks() {
  return (
    <section className='py-25 bg-[#2563EA] text-white'>
      <div className='m-auto max-w-7xl  '>
       <h1 className='text-center text-5xl font-semibold'>Everything you need to run your books.</h1>
       <p className='text-center mt-4 text-xl'>Well everything you need if you aren’t that picky about minor details like tax compliance.</p>

       <div className='mt-20 flex gap-5' > 
          {/* left container */}
          <div className='relative mt-20'>
            <div >
              <h2 className='text-2xl font-semibold'>Payroll</h2>
              <p>Lorem ipsum, dolor sit amet . Eveniet exercitationem vitae aspernatur laborum soluta autem quas incidunt esse,  Nam, placeat?</p>
            </div>
            <div className='mt-10 '>
              <h2 className='text-2xl font-semibold'>Claim experens</h2>
              <p>Lorem ipsum, dolor sit . Eveniet exercitationem vitae aspernatur laborum soluta autem quas incidunt esse,  Nam, placeat?</p>
            </div>
            <div className='mt-10 '>
              <h2 className='text-2xl font-semibold'>VAT handing</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. soluta autem quas incidunt esse,  Nam, placeat?</p>
            </div>
            <div className='mt-10 '>
              <h2 className='text-2xl font-semibold'>Reporting</h2>
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet exercitationem vitae aspernatur soluta ?</p>
            </div>
          </div>

          {/* right container */}
          <div className=' w-380 overflow-hidden rounded-xl shado-xl bg-slate-50 shadow-blue-900/20 '>
            <img src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1920&q=75" alt="rasm-1" />
          </div>

       </div>


      </div>
      
    </section>
  )
}

export default Everythingbooks
