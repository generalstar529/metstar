'use client'

import Image from 'next/image';
import imgCapabilitiesHero from '@/assets/images/capabilities-hero.webp';
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
    <section className="capabilities-hero">
      <div className='container mx-auto'>
        <div className="h-full text-left flex">
          <Image src={imgCapabilitiesHero} alt='capabilities-hero' layout='fill' style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl capabilities-hero-title" ref={titleGroupRef}>
            <div className='title'>CAPABILITIES</div>
          </div>
        </div>
      </div>
    </section>
  )
}