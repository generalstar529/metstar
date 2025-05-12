'use client'

import Image from 'next/image';
import imgContactHero from '@/assets/images/home-hero.webp';
import imgContactHeroDesktop from '@/assets/images/home-hero-desktop.webp'
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
    <section className="contact-hero">
      <div className='container mx-auto'>
        <div className="h-full text-left flex">
          <Image src={imgContactHeroDesktop} alt='contact-hero' className='hidden md:block' layout='fill' style={{ objectFit: 'cover' }} />
          <Image src={imgContactHero} alt='contact-hero' className='md:hidden' layout='fill' style={{ objectFit: 'cover' }} />
          <div className="text-lg sm:text-2xl md:text-4xl lg:text-5xl contact-hero-title" ref={titleGroupRef}>
            <div className='title'>CONTACT US</div>
          </div>
        </div>
      </div>
    </section>
  )
}