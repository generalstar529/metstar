'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { AnimatedButton, Tag } from "@/components/utils"
import imgHistory from '@/assets/images/culture-history.webp'

export default function History() {

  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if(textRef.current) {
      let posY = textRef.current.offsetTop;
      
      if(posY < pageBottom) {
        textRef.current.classList.add('history-text-animation');
      }
      else {
        textRef.current.classList.remove('history-text-animation');
      }
    }
  }

  return (
    <section className="culture-history">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-11 py-24 gap-10'>
        <div className="col-span-1 description" ref={textRef}>
          <Tag variant='danger' className='p-3 tracking-wider font-bold'>
            OUR HISTORY
          </Tag>
          <div className="title flex text-3xl md:text-4xl font-bold my-6">
            <div className="solid">FOUNDED IN 1997. OVER 200 OPERATING UNITS. CUSTOMER-FOCUSED.</div>
          </div>
          <div className="ability text-sm my-2">
          Metstar Premier Era Innovations has united the best energy infrastructure companies in North America to form the continent’s largest skilled-labor force. We have gathered industry-leading expertise and capabilities with one simple goal: to provide energy infrastructure solutions better and safer than anyone.
          </div>
          {/* Commented this cause there is no history route */}
          {/* <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-lg md:text-xl my-2'>
            LERN MORE
          </AnimatedButton> */}
        </div>
        <div className="col-span-1 flex my-auto justify-center">
          <Image src={imgHistory} alt='culture-history' className='logo' />
        </div>
      </div>
    </section>
  )
} 