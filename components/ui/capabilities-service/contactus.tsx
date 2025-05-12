'use client'

import { Tag } from '../../utils'
import SubmitDialog from '../global/submitDialog'

interface ContactUsProps {
  topic: string;
}

export default function ContactUs({ topic } : ContactUsProps) {

  return (
    <section className='capabilities-item-contactus'>
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 px-5 py-5">
        <div className='col-span-1 relative'>
          <span className='capabilities-item-contactus-bar mb-5 hidden lg:block'></span>
          <Tag variant='warning' className='p-3 font-bold mt-10 lg:mt-0'>
            CONTACT US
          </Tag>
          <div className='flex flex-row mt-5'>
            <div className="flex me-0 lg:me-7 capabilities-item-contactus-bargroup">
              <span className='capabilities-item-contactus-bargroup-first hidden lg:block'></span>
              <span className='capabilities-item-contactus-bargroup-second hidden lg:block'></span>
              <span className='capabilities-item-contactus-bargroup-third hidden lg:block'></span>
            </div>
            <div className='text-2xl md:text-3xl'>
              <div className='mb-10'>
                <span className='text-white'>GET IN TOUCH TO LEARN MORE ABOUT</span>&nbsp;&nbsp;
                <span className='txt-warning'>{topic}</span>&nbsp;&nbsp;
                <span className='text-white'>AT METSTAR PREMIER ERA INNOVATIONS</span>
              </div>
              {/* <div className='text-sm text-white'>
                Get in touch with us. We are excited to discuss the possibilities ahead of you. We will help you find the path to a rewarding career in the trades.
              </div> */}
            </div>
          </div>
        </div>
        <div className='col-span-1'>
          <SubmitDialog />
        </div>
      </div>
    </section>
  )
}