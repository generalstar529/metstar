'use client'

import Image from 'next/image'
import { AnimatedButton, Tag } from "@/components/utils"

export default function FindCareer() {

  return (
    <section className="find-career">
      <div className='container mx-auto px-11 py-24 w-8/12'>
        <Tag variant='warning' className='p-3 tracking-wider font-bold'>
          POWER THE FUTURE WITH US
        </Tag>
        <div className="text-4xl md:text-5xl text-white font-bold my-12">
          FIND YOUR CAREER
        </div>
        {/* Commented this cause there is no careers route */}
        {/* <AnimatedButton variant='transparent' icon='arrow-right' className='flex justify-end text-white text-left text-lg md:text-xl my-2'>
          GET STARTED
        </AnimatedButton> */}
      </div>
    </section>
  )
} 