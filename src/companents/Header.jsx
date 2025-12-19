import React from 'react';
import logo from '../assets/logo.png';

function Header() {
  return (
    <header className=" top-4 left-4 right-4 z-50">
      <div className="mx-auto max-w-15xl ">
        <div className="flex justify-between   mx-50 mt-10">
          <div className="flex gap-10 ">
            <img src={logo} alt="taxpal" className="h-18 w-40" />
            <ul className="flex gap-10 mt-7 ">
              <li>
                <a href="">Features</a>
              </li>
              <li>
                <a href="">Testimonials</a>
              </li>
              <li>
                <a href="">Pricing</a>
              </li>
            </ul>
          </div>
{/*  */}
          <div className="flex gap-10 items-center">
            <h4>Sing in</h4>
            <button className="py-3 px-5 bg-[#2B7FFF] text-white rounded-4xl">
              Get Started Today
            </button>
          </div>
        </div>

        <div className='text-center mt-30'>
          <h1 className='text-7xl font-bold'>Accounting  <span className='text-[#2B7FFF]'>made simple </span> <br />for small businesses.</h1>
          <p className='mt-7 text-[18px]'>Most bookkeeping software is accurate, but hard to use. We make the opposite <br />trade-off, and hope you don’t get audited.</p>

          <div className='mt-8 m-5  '>
            <button className='py-2 px-5 bg-[#0F172B] text-white rounded-4xl'>Get 6 month free</button>
            <button className='py-2 px-5 border-[#2B7FFF] border-2 rounded-4xl'>Watch video</button>
          </div>

          <p className='mt-50'>Trusted by these six companies so far</p>
          <div className='flex gap-10 mt-5 mb-10 justify-center'>
            <img src="https://salient.tailwindui.com/_next/static/media/transistor.7274e6c3.svg" alt="1" />
            <img src="https://salient.tailwindui.com/_next/static/media/tuple.74eb0ae0.svg" alt="2" />
            <img src="https://salient.tailwindui.com/_next/static/media/statickit.d7937794.svg" alt="3" />
            <img src="https://salient.tailwindui.com/_next/static/media/mirage.18d2ec4e.svg" alt="4" />
            <img src="https://salient.tailwindui.com/_next/static/media/laravel.7deed17e.svg" alt="5" />
            <img src="https://salient.tailwindui.com/_next/static/media/statamic.6da5ebfb.svg" alt="6" />

          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
