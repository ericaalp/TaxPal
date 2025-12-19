
import { useState } from 'react'

const features=[
  {
    id:1,
    title:"Payroall",
    description:"Keep track of everyone's salaries and whether or not they've been paid. Direct deposit not supported.",
    image:"https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fpayroll.517af4e7.png&w=1920&q=75",

  },
  {
    id:2,
    title:"Claim experens",
    description:"All of your receipts organized into one place, as long as you don't mind typing in the data by hand.",
    image:"https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fexpenses.3f331919.png&w=1920&q=75",

  },
  {
    id:3,
    title:"VAT handing",
    description:"We only sell our software to companies who don't deal with VAT at all, so technically we do all the VAT stuff they need.",
    image:"https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fvat-returns.7402820f.png&w=1920&q=75",

  },
  {
    id:4,
    title:"Reporting",
    description:"Easily export your data into an Excel spreadsheet where you can do whatever the hell you want with it.",
    image:"https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Freporting.2ad6f065.png&w=1920&q=75",

  },
]

function Everything() {

  const [active, setActive]=useState(features[0])

  return (
    <section className='relative bg-linear-to-t from-sky-500 to-indigo-500 text-white py-20 '>
     
     <h1 className='text-center text-5xl font-semibold'>Everything you need to run your books.</h1>
       <p className='text-center mt-4 text-xl'>Well everything you need if you aren’t that picky about minor details like tax compliance.</p>
         <div className="grid lg:grid-cols-2 gap-15 items-center max-w-7xl mx-auto mt-30 mb-20">
         {/* chap cart */}
         <div className='space-y-6 w-115 '>
          {
            features.map((item)=>(
            <button key={item.id} onClick={()=>setActive(item)} className='hover:bg-white/20 py-5 px-5 rounded-2xl'>
             <h3 className='text-lg font-semibold mb-1 text-start'>{item.title}</h3>
             <p className='text-sm text-start '>{item.description}</p>

            </button>

            ))
          }


         </div>

          {/* right container */}
          <div className='  '>
           <img src={active.image} alt={active.title} className='absolute  object-contain right-0 top-40 w-230 h-200' />
          </div>


         </div>
      
    </section>
  
  )
    
}

export default Everything
