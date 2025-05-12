'use client'

import { AnimatedButton } from "@/components/utils"

export default function Explore() {

  return (
    <section className="px-11 mx-auto bg-zinc-100">
      <div className='capabilities-item-utility-explore container flex justify-around items-center p-10 w-10/12 mx-auto'>
        <div className="text-xl md:text-3xl">
          <div className="mb-5 font-bold">
            <span className="text-black">FIND AN</span>&nbsp;
            <span className="text-white">OPERATING COMPANY</span>
          </div>
          <div className="text-sm text-black">
            Explore our operating companies that offer Restoration.
          </div>
        </div>
        <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-md md:text-lg'>
          EXPLORE
        </AnimatedButton>
      </div>
    </section>
  )
} 