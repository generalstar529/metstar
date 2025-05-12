'use client'

import { AnimatedButton } from "@/components/utils"

export default function ExploreCompany() {

  return (
    <section className="px-11 mx-auto bg-zinc-100 p-20">
      <div className='capabilities-explore container flex justify-around items-center p-10 w-10/12 mx-auto'>
        <div className="text-xl md:text-3xl">
          <div className="text-black font-bold">
            WORLD-CLASS EXECUTION,
          </div>
          <div className="text-white font-bold">
            LOCAL DELIVERY.
          </div>
        </div>
        <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-md md:text-lg'>
          EXPLORE COMPANIES
        </AnimatedButton>
      </div>
    </section>
  )
} 