'use client'

import Image from 'next/image'
import { useRef, useEffect } from 'react'
import { AnimatedButton } from "@/components/utils"
import imgQuantaCares from '@/assets/images/culture-quantacares.webp'
import Link from 'next/link'

export default function QuantaCares() {

  const textRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLImageElement>(null);

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
        let textSection = document.getElementsByClassName('description');
        textSection[0].classList.add('quanta-text-animation');
      }
      else {
        let textSection = document.getElementsByClassName('description');
        textSection[0].classList.remove('quanta-text-animation');
      }
    }

    if(imageRef.current) {
      let posY = imageRef.current.offsetTop;
      
      if(posY < pageBottom) {
        let imageSection = document.getElementsByClassName('quantacares');
        imageSection[0].classList.add('quanta-image-animation');
      }
      else {
        let imageSection = document.getElementsByClassName('quantacares');
        imageSection[0].classList.remove('quanta-image-animation');
      }
    }
  }

  return (
    <section className="culture-cares">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-11 py-24 gap-10'>
        <div className="col-span-1 description" ref={textRef}>
          <div className="title flex text-4xl md:text-5xl font-bold mb-6">
            <div className="quanta">METSTAR</div>
            <div className="cares ml-4">CARES.</div>
          </div>
          <div className="content text-lg my-5 font-bold">
            Metstar Premier Era Innovations Cares initiative was established in 2023 to help those who have lost everything in a disaster, left domestic violence or homelessness. Employee donations, matched by the company and Volunteer days off have been established to assist those affected with living and recovery expenses such as food, clothing, and utilities.
          </div>
          {/* <div className="ability text-sm my-2">
            Metstar Premier Era Innovations Cares was established in 2017 in the wake of Hurricane Harvey to help Metstar Premier Era Innovations employees devastated by the storm. Employee donations, matched by the company, initially raised $1.3 million. The fund has continued to grow and assist employees affected by disasters with living and recovery expenses such as food, clothing, utilities, temporary housing, and property repairs.
          </div> */}
          {/* Commented this cause community route is not exist. */}
          {/* <Link href='community'>
            <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-lg md:text-xl my-2'>
              LERN MORE
            </AnimatedButton>
          </Link> */}
        </div>
        {/* <div className="col-span-1 flex my-auto justify-center">
          <Image src={imgQuantaCares} ref={imageRef} alt='culture-quantacares' className='quantacares' />
        </div> */}
      </div>
    </section>
  )
} 