import React from 'react'

function Simplfy() {
  return (
    <section className="py-24 bg-[#F9FAFB]">
      <div className="max-w-6xl mx-auto px-4">

        {/* Title */}
        <h2 className="text-5xl font-semibold text-center text-[#0F172A] mb-4">
          Loved by businesses worldwide.
        </h2>

        <p className="text-xl text-center text-[#475569] max-w-2xl mx-auto mb-16">
          Our software is so simple that people can’t help but fall in love with it. Simplicity is easy when you just skip tons of mission-critical features.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-start">
        <div className="">
          
          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
            <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
             TaxPal is so easy to use I can’t help but wonder if it’s really doing the things the government expects me to do.
            </p>
              <hr />
            <div className="flex items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">
                  Sheryl Berge
                </h4>
                <p className="text-[15px] text-[#64748B] mt-3">
                  CEO at Lynch LLC
                </p>
              </div>
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-1.c78616b7.png&w=128&q=75"
                className="w-15 h-15 rounded-full object-cover"
                alt=""
              />
              
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mt-8">
            <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
             I’m trying to get a hold of someone in support, I’m in a lot of trouble right now and they are saying it has something to do with my books. Please get back to me right away.
            </p>

            <hr />

            <div className="flex items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">
                  Amy Hahn
                </h4>
                <p className="text-[15px] text-[#64748B] mt-3">
                Director at Velocity Industries
                </p>
              </div>
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75"
                className="w-15 h-15 rounded-full object-cover"
                alt=""
              />
              
            </div>
          </div>
        </div>

       <div className="div">
           {/* Card 3 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100">
             <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
             The best part about TaxPal is every time I pay my employees, my bank balance doesn’t go down like it used to. Looking forward to spending this extra cash when I figure out why my card is being declined.
            </p>
              <hr />
            <div className="flex items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">
                 Leland Kiehn
                </h4>
                <p className="text-[15px] text-[#64748B] mt-3">
                 Leland Kiehn
                </p>
              </div>
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-5.e7f7faf2.png&w=128&q=75"
                className="w-15 h-15 rounded-full object-cover"
                alt=""
              />
              
            </div>
          </div>

          {/* Card 4 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mt-8">
        <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
             There are so many things I had to do with my old software that I just don’t do at all with TaxPal. Suspicious but I can’t say I don’t love it.
            </p>
              <hr />
            <div className="flex items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">
               Erin Powlowski
                </h4>
                <p className="text-[15px] text-[#64748B] mt-3">
                 COO at Armstrong Inc
                </p>
              </div>
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-2.c72e5a40.png&w=128&q=75"
                className="w-15 h-15 rounded-full object-cover"
                alt=""
              />
              
            </div>
          </div>
       </div>

        <div className="div">
            {/* Card 5 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 ">
            <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
            I used to have to remit tax to the EU and with TaxPal I somehow don’t have to do that anymore. Nervous to travel there now though.
            </p>
              <hr />
            <div className="flex items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">
                Peter Renolds
                </h4>
                <p className="text-[15px] text-[#64748B] mt-3">
                  Founder of West Inc
                </p>
              </div>
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-3.eaa9ef6f.png&w=128&q=75"
                className="w-15 h-15 rounded-full object-cover"
                alt=""
              />
              
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-white rounded-2xl p-6 shadow-md border border-gray-100 mt-8">
         <p className="text-[#334155] text-[15px] leading-relaxed mb-6">
             This is the fourth email I’ve sent to your support team. I am literally being held in jail for tax fraud. Please answer your damn emails, this is important.
            </p>
              <hr />
            <div className="flex items-center justify-between gap-4 mt-8">
              <div>
                <h4 className="text-[16px] font-bold text-[#0F172A]">
                  Amy Hahn
                </h4>
                <p className="text-[15px] text-[#64748B] mt-3">
                 Director at Velocity Industries
                </p>
              </div>
              <img
                src="https://salient.tailwindui.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Favatar-4.16b4e29e.png&w=128&q=75"
                className="w-15 h-15 rounded-full object-cover"
                alt=""
              />
              
            </div>
          </div>

        </div>
        </div>

      </div>
    </section>
  );
}

export default Simplfy
