'use client'

import { AnimatedButton } from "@/components/utils"

export default function Report() {

  return (
    <section className="px-11 mx-auto bg-zinc-100">
      <div className='sustainability-report container flex justify-around items-center p-10 w-10/12 mx-auto'>
        <div className="text-xl md:text-3xl">
          <div className="text-black font-bold">
            2022 METSTAR PREMIER ERA INNOVATIONS
          </div>
          <div className="mb-5 font-bold">
            <span className="text-white">ABOUT US</span>&nbsp;
            <span className="text-black">REPORT</span>
          </div>
          <div className="text-sm text-black">
            We are proud to be playing a leading role in driving the energy transition and sharing our progress
          </div>
        </div>
        <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-md md:text-lg'>
          VIEW THE REPORT
        </AnimatedButton>
      </div>
    </section>
  )
} 