'use client'

import Image from 'next/image'
import { AnimatedButton, Tag } from "@/components/utils"

export default function ConnectPeople() {

  return (
    <section className="sustainability-connect-people">
      <div className='container mx-auto px-11 py-24 w-8/12'>
        <Tag variant='warning' className='p-3 tracking-wider font-bold text-sm'>
          METSTAR PREMIER ERA INNOVATIONS 2022 SUSTAINABILITY REPORT
        </Tag>
        <div className="text-4xl md:text-5xl text-white font-bold mt-12">
          CONNECTING PEOPLE:
        </div>
        <div className="text-4xl md:text-5xl text-white font-bold mb-12">
          POWERING TOMORROW
        </div>
        <AnimatedButton variant='transparent' icon='arrow-right' className='flex justify-end text-white text-left text-lg md:text-xl my-2'>
            VIEW THE REPORT
          </AnimatedButton>
      </div>
    </section>
  )
} 