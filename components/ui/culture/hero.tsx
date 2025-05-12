'use client'

import Image from 'next/image';
import imgCultureHero from '@/assets/images/culture-hero.webp';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const titleGroupRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    addClasses();
  }, [])

  async function addClasses() {
    let titles = document.getElementsByClassName('title');
    for (let i = 0; i < titles.length; i ++) {
      let title = titles[i];
      title.classList.add(`visible-title${i+1}`);
    }
  }

  return (
    <section className="culture-hero">
      <div className='container mx-auto'>
        <div className="h-full text-left flex">
          <Image src={imgCultureHero} alt='culture-hero' layout='fill' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl culture-hero-title" ref={titleGroupRef}>
            <div className='title'>BUILDING</div>
            <div className='title'>INFRASTRUCTURE FOR A</div>
            <div className='title'>BRIGHTER FUTURE</div>
          </div>
        </div>
      </div>
    </section>
  )
}