'use client'

import Image from 'next/image'
import { AnimatedButton, ImageCard } from "@/components/utils"
import imgSustainability from '@/assets/images/culture-sustainability.webp'
import imgTraining from '@/assets/images/culture-training.webp'
import imgCapabilities from '@/assets/images/culture-capabilities.webp'
import { IImageCardProp } from '@/types'

interface ImageCard {
  src: any;
  title: string;
  content?: string;
}

const imageCards : IImageCardProp[] = [
  {imageSrc : imgSustainability, title: 'ABOUT US', subTitle: '', description: '', offerings: [], link: ''},
  {imageSrc : imgTraining, title: 'TRAINING', subTitle: '', description: '', offerings: [], link: ''},
  {imageSrc : imgCapabilities, title: 'CAPABILITIES', subTitle: '', description: '', offerings: [], link: ''},
]

export default function Empowering() {

  return (
    <section className="culture-empowering">
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 px-11 py-24 gap-10'>
        <div className="col-span-1 description my-auto">
          <div className="title flex text-4xl md:text-5xl font-bold mb-6">
            <div className="outline">EM</div>
            <div className='solid'>POWER</div>
            <div className="outline">ING&nbsp;&nbsp;</div>
            <div className='outline'>ALL.</div>
          </div>
          <div className="content text-lg my-5 font-bold">
            Our people are our most valuable resource. We invest in our employees because we only succeed as a business when our employees are able to build meaningful careers.
          </div>
          <div className="ability text-sm my-2">
            From our world-class Craft Training Network, to our investments in renewable energy infrastructure. Metstar Premier Era Innovations is committed to powering a better world.
          </div>
        </div>
        <div className="col-span-1 imagecards my-auto justify-center">
        {
          imageCards.map((card, idx) => (
            <div className={'imagecards-item'} key={idx}>
              <ImageCard imageSrc={card.imageSrc} title={card.title} className='text-white' subTitle={card.subTitle} description={card.description} offerings={card.offerings} link={card.link} ></ImageCard>
            </div>
          ))
        }
        </div>
      </div>
    </section>
  )
} 