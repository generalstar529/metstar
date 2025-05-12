'use client'

import { useEffect, useRef } from "react";
import { AnimatedButton } from "@/components/utils";

export default function Future () {

  const textRef1 = useRef<HTMLDivElement>(null);
  const textRef2 = useRef<HTMLDivElement>(null);

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
        textRef1.current.classList.add('future-text-animation');
      }
      else {
        textRef1.current.classList.remove('future-text-animation');
      }
    }

    if(textRef2.current) {
      let posY = textRef2.current.offsetTop;
      
      if(posY < pageBottom) {
        textRef2.current.classList.add('future-text-animation');
      }
      else {
        textRef2.current.classList.remove('future-text-animation');
      }
    }
  }

  return (
    <section className="pay-benefits-future bg-zinc-100">
      <div className="container mx-auto">
        <div className="flex mt-5 mx-11 items-end	">
          <div className='flex pay-benefits-future-bargroup me-0 lg:me-10'>
            <span className='pay-benefits-future-bargroup-first hidden lg:block'></span>
            <span className='pay-benefits-future-bargroup-second hidden lg:block'></span>
            <span className='pay-benefits-future-bargroup-third hidden lg:block'></span>
          </div>
          <div className="text-4xl md:text-5xl font-bold pt-9 pay-benefits-future-title text-white" ref={textRef1}>
            <div className="txt-danger">PWRING THE FUTURE</div>
            <div>STARTS WITH YOU</div>
          </div>
        </div>
        <div className="pay-benefits-future-content p-24">
          <div className="w-full md:w-1/2 about-us" ref={textRef2}>
            <div className="text-md text-white font-bold my-10">
              At Metstar Premier Era Innovations Services, people are our number one asset and the foundation of our continued success. Our culture is about creating an environment where all employees can be themselves, are valued and have an equal opportunity to succeed.
            </div>
            <div className="text-sm text-white my-10">
              Our goal is to hire individuals who best embody Metstar Premier Era Innovations’s vision and core values. We offer career opportunities across numerous disciplines for professionals, military veterans, recent graduates and students. When you join our team, you join a dynamic culture in which career development is encouraged, excellence is rewarded and diversity is valued. We encourage and support ideas, innovation and advancement. PWRing the future starts with you.
            </div>
          </div>
          <div className="w-full md:w-10/12 p-7 grid grid-cols-1 md:grid-cols-2 bg-black gap-4">
          <AnimatedButton variant='transparent' icon='arrow-right' className='flex text-white text-left text-md'>
            EXPLORE CORPORATE CAREERS
          </AnimatedButton>
          <AnimatedButton variant='transparent' icon='arrow-right' className='flex text-white text-left text-md'>
            EXPLORE METSTAR PREMIER ERA INNOVATIONS COMPANIES
          </AnimatedButton>
          <AnimatedButton variant='transparent' icon='arrow-right' className='flex text-white text-left text-md'>
            EXPLORE VETERAN CAREERS
          </AnimatedButton>
          <AnimatedButton variant='transparent' icon='arrow-right' className='flex text-white text-left text-md'>
            EXPLORE COLLEGE/UNIVERSITY CAREERS
          </AnimatedButton>
          </div>
        </div>
      </div>
    </section>
  );
}