'use client'

import { Tag } from '../../utils'
import SubmitDialog from '../global/submitDialog'

export default function PowerFeature() {

  return (
    <section className='capabilities-feature'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-11 pb-10">
        <div className='col-span-1 relative'>
          <span className='capabilities-feature-bar mb-5 hidden lg:block'></span>
          <Tag variant='warning' className='p-3 font-bold mt-10 lg:mt-0'>
            POWER THE FUTURE WITH US
          </Tag>
          <div className='flex flex-row mt-5'>
            <div className="flex me-0 lg:me-7 capabilities-feature-bargroup">
              <span className='capabilities-feature-bargroup-first hidden lg:block'></span>
              <span className='capabilities-feature-bargroup-second hidden lg:block'></span>
              <span className='capabilities-feature-bargroup-third hidden lg:block'></span>
            </div>
            <div className='text-4xl md:text-5xl'>
              <div className='text-white mt-10'>
                YOUR BRIGHTER
              </div>
              <div className='mb-10'>
                <span className='text-white'>FUTURE STARTS</span>&nbsp;&nbsp;
                <span className='txt-warning'>HERE</span>
              </div>
              <div className='text-sm text-white'>
                Find your path to a rewarding career in the trades. Get in touch with us to discuss the possibilities ahead of you.
              </div>
            </div>
          </div>
        </div>
        <div className='col-span-1 p-10'>
          <SubmitDialog />
        </div>
      </div>
    </section>
  )
}