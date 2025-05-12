'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { AnimatedButton } from "@/components/utils"
import imgSafteyAlways from '@/assets/images/culture-safetyalways.webp'
import imgCapacityModel from '@/assets/images/culture-capacitymodel.webp'

export default function Safety() {   
  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);
  const textRef3 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    window.addEventListener('scroll', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
    }
  });

  function onScroll(e: Event) {
    let pageTop = window.pageYOffset;
    let pageBottom = pageTop + window.innerHeight;

    if(textRef1.current) {
      let posY = textRef1.current.offsetTop;
      
      if(posY < pageBottom) {
        textRef1.current.classList.add('safety-text-animation');
      }
      else {
        textRef1.current.classList.remove('safety-text-animation');
      }
    }

    if(textRef2.current) {
      let posY = textRef2.current.offsetTop;
      
      if(posY < pageBottom) {
        textRef2.current.classList.add('plan-text-animation');
      }
      else {
        textRef2.current.classList.remove('plan-text-animation');
      }
    }

    if(textRef3.current) {
      let posY = textRef3.current.offsetTop;
      
      if(posY < pageBottom) {
        textRef3.current.classList.add('capacity-text-animation');
      }
      else {
        textRef3.current.classList.remove('capacity-text-animation');
      }
    }
  }

  return (
    <section className="culture-saftey ">
      <div className='container mx-auto px-11 py-24'>
        <div className='section-saftey grid grid-cols-1 md:grid-cols-2 gap-10 mb-48'>
          <div className="col-span-1 flex my-auto justify-center">
            <Image src={imgSafteyAlways} alt='culutre-safetyalways' className='logo' />
          </div>
          <div className="col-span-1 description" ref={textRef1}>
            <div className="title flex text-4xl md:text-5xl font-bold mb-6">
              <div className="saftey">SAFETY.&nbsp;&nbsp;</div>
              <div className="always">ALWAYS.</div>
            </div>
            <div className="content text-lg my-5 font-bold">
              At Metstar Premier Era Innovations Services, safety is not the first thing, but how we do everything. We are deeply committed to the health and safety of our employees, customers, contractors, and the communities we serve. It is our enduring mission that all our people always make it home safe.
            </div>
            <div className="ability text-sm my-2">
              Our core philosophy puts safety above all business pursuits and work practices. When it comes to safety, we don’t cut corners, we don’t accept excuses, and we don’t stop at ‘good enough’. Simply put: if it can’t be done safely, it can’t be done.
            </div>
            {/* Commented cause there is no safety route */}
            {/* <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-lg md:text-xl my-2'>
              LERN MORE
            </AnimatedButton> */}
          </div>
        </div>
        <div className='section-plan grid grid-cols-1 md:grid-cols-2 gap-10 mb-48'>
          <div className="col-span-1 flex my-auto justify-center">
          </div>
          <div className="col-span-1 description" ref={textRef2}>
            <div className="content text-lg my-5 font-bold">
              Plan. Execute. Learn.
            </div>
            <div className="ability text-sm my-2">
              Talk is cheap. Lives are priceless. To say we value safety doesn’t cut it. We examine, analyze, design, plan, innovate, practice, and execute safety. On the jobsite, at the planning desk, and in the boardroom, safety is the first thought—and the second—and the last. We don’t say that Metstar Premier Era Innovations has a culture of safety. We live it.
            </div>
          </div>
        </div>
        {/* <div className='section-capacity grid grid-cols-1 md:grid-cols-2 gap-10'>
          <div className="col-span-1 description" ref={textRef3}>
            <div className="content text-lg my-5 font-bold">
              We are thinking about safety differently.
            </div>
            <div className="ability text-sm my-2">
              Good intentions don’t save lives. We know that even with the best preventions in place, things can still go wrong; people make mistakes and the world is unpredictable. We plan and execute our work assuming that failure will happen today. The Capacity Model™ is a system that helps us build the capacity to absorb failure without suffering harm. We learn from every job, every mistake, and every success to continually improve. Safety is not merely the absence of injuries, it is the presence of capacity.
            </div>
            <AnimatedButton variant='transparent' icon='arrow-right' className='text-black text-left text-lg md:text-xl my-2'>
              LERN MORE
            </AnimatedButton>
          </div>
          <div className="col-span-1 flex my-auto justify-center">
            <Image src={imgCapacityModel} alt='culutre-capacitymodel' className='logo' />
          </div>
        </div> */}
      </div>
    </section>
  )
} 