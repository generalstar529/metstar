'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link';
import { Tag, Button, AnimatedButton, ImageCard } from '../../utils'

import { imageCardsData } from '@/constants';
import Badge from '@/components/utils/Badge';

export default function BetterFeature() {

  const [curPos, setCurPos] = useState<number>(0);

  const imageStartRef = useRef<HTMLDivElement | null>();
  const animationRef = useRef<HTMLDivElement | null>();
  const imageEndRef = useRef<HTMLDivElement | null>();

  useEffect(() => {
    let imageCards = document.getElementsByClassName('home-feature-imagecards-item');
    for (let i = 0; i < imageCards.length; i++) {
      let card = imageCards[i];
      card.addEventListener('click', () => {
        clickHandler(i, imageCards[i]);
      });
    }
    if (animationRef.current) {
      animationRef.current.style.height = window.innerHeight - 50 + 'px';
    }
  }, [])

  const clickHandler = (index: number, element: Element) => {
    let imageCards = document.getElementsByClassName('home-feature-imagecards-item');
    for (let i = 0; i < imageCards.length; i++) {
      imageCards[i].classList.remove('zoom-up');
      imageCards[i].classList.add('zoom-out');
      imageCards[i].children[0].children[0].classList.remove("image-animation");
      imageCards[i].children[0].children[1].classList.remove("title-animation");
      imageCards[i].children[0].children[2].classList.remove("content-animation");
    }
    imageCards[index].classList.remove('zoom-out');
    imageCards[index].classList.add('zoom-up');
    imageCards[index].children[0].children[0].classList.add("image-animation");
    imageCards[index].children[0].children[1].classList.add("title-animation");
    imageCards[index].children[0].children[2].classList.add("content-animation");
  }

  useEffect(() => {
    scrollHandler()
    window.addEventListener('scroll', scrollHandler)
    return () => window.removeEventListener('scroll', scrollHandler)
  }, [curPos])

  const scrollHandler = () => {
    setCurPos(window.pageYOffset);
    if (imageStartRef.current && imageEndRef.current && window.innerWidth >= 1024) {
      if (curPos >= imageStartRef.current?.offsetTop && curPos + window.innerHeight <= imageEndRef.current?.offsetTop) {
        if (animationRef.current) {
          animationRef.current.style.marginTop = (curPos - imageStartRef.current?.offsetTop) + 'px';
        }
      } else if (curPos < imageStartRef.current.offsetTop) {
        if (animationRef.current) animationRef.current.style.marginTop = '0px';
      }
    }
  }

  return (
    <section className='home-feature'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 px-11 pb-10">
        <div className='w-full col-span-5 relative'>
          <span className='home-feature-bar mb-5 hidden lg:block'></span>
          <Tag variant='warning' className='p-3 font-bold mt-10 lg:mt-0'>
            OUR CAPABILITIES
          </Tag>
          <div className='flex flex-row mt-5'>
            <div className="flex me-0 lg:me-7 home-feature-bargroup">
              <span className='home-feature-bargroup-first hidden lg:block'></span>
              <span className='home-feature-bargroup-second hidden lg:block'></span>
              <span className='home-feature-bargroup-third hidden lg:block'></span>
            </div>
            <div className='px-2 py-12 mt-0 flex flex-col justify-around' ref={(el) => animationRef.current = el}>
              <div className="text-4xl md:text-5xl text-white font-bold">
                BUILDING A BETTER FUTURE
              </div>
              <Link href='/capabilities'>
                <AnimatedButton variant='transparent' icon='arrow-right' className='text-white text-left font-bold text-sm'>
                  SEE ALL
                </AnimatedButton>
              </Link>
              <div className='text-2xl md:text-3xl text-white font-bold'>
                INTERESTED IN ALL METSTAR PREMIER ERA INNOVATIONS HAS TO OFFER?
              </div>
              <Link href="capabilities-catalog">
                <AnimatedButton variant='warning' icon='arrow-right' className='text-white text-left text-sm'>
                  CAPABILITIES DIRECTORY
                </AnimatedButton>
              </Link>
              <Link href="contact">
                <AnimatedButton variant='transparent' icon='arrow-right' className='text-white text-left text-sm'>
                  CONTACT US
                </AnimatedButton>
              </Link>
              <Badge />
            </div>
          </div>
        </div>
        <div className='w-full col-span-7 text-white pt-16'>
          <div ref={(el) => { imageStartRef.current = el }}></div>
          <div className='home-feature-imagecards'>
            {
              imageCardsData.map((cardData, idx) => (
                <div className={'home-feature-imagecards-item'} key={idx}>
                  <ImageCard imageSrc={cardData.imageSrc} title={cardData.title} subTitle={cardData.subTitle} description={cardData.description} offerings={cardData.offerings} link={cardData.link} className='text-white'></ImageCard>
                </div>
              ))
            }
          </div>
          <div ref={(el) => { imageEndRef.current = el }}></div>
        </div>
      </div>
    </section>
  )
}