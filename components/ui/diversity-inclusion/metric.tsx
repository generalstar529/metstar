'use client'

import { AnimatedButton } from "@/components/utils"

export default function Metric() {

  return (
    <section className="container px-11 py-24 mx-auto">
      <div className='diversity-metric flex justify-around items-end p-10 w-10/12 mx-auto'>
        <div className="text-xl md:text-3xl font-bold">
          <div className="text-black">
            METSTAR PREMIER ERA INNOVATIONS 2022
          </div>
          <div>
            <span className="text-white">EMPLOYEE DIVERSITY</span>&nbsp;
            <span className="text-black">METRICS</span>
          </div>
        </div>
        <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-md md:text-lg'>
          VIEW THE METRICS
        </AnimatedButton>
      </div>
    </section>
  )
} 