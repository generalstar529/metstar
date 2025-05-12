'use client'

import Image from 'next/image'
import imgJustin from '@/assets/images/people/Justin.webp'

export default function Service() {

  return (
    <section className="diversity-service">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-5 py-24 gap-10'>
        <div className="col-span-1 flex my-auto justify-center">
          <Image src={imgJustin} alt='culture-moanica' className='moanica' />
        </div>
        <div className="col-span-1 description">
          <div className="title text-white text-lg md:text-xl font-bold my-6">
            Metstar Premier Era Innovations is in a unique position to set the standard for attracting, retaining, and developing talent, driving innovation and diversification in our supply chain, workforce and advancing communities across our territories. Our history and culture are based on excellence in all that we do and this work is no different.
          </div>
          <div className="text-black text-md font-bold my-2">
            Justin Sullivan
          </div>
          <div className='text-white text-sm my-2'>
            President, Diversity & Inclusion
          </div>
          <div className='text-white text-sm my-2'>
            Metstar Premier Era Innovations
          </div>
        </div>
      </div>
    </section>
  )
} 