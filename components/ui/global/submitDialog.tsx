'use client'

import { AnimatedButton, Input } from "@/components/utils"

export default function SubmitDialog() {

  return (
    <div className="submit-dialog p-8 text-white text-sm">
      <div className="grid grid-cols-2 gap-4">
        <div>
          <div className="mb-3">FIRST NAME</div>
          <Input variant="default" onChange={() => {}} />
        </div>
        <div>
          <div className="mb-3">LAST NAME</div>
          <Input variant="default" onChange={() => {}} />
        </div>
      </div>
      <div className="my-5">
        <div className="mb-3">EMAIL</div>
        <Input variant="default" onChange={() => {}} />
      </div>
      <div className="my-5">
        <div className="mb-3">PHONE</div>
        <Input variant="default" onChange={() => {}} />
      </div>
      <div className="my-5">
        <div className="mb-3">MESSAGE</div>
        <Input variant="default" onChange={() => {}} />
      </div>
      <AnimatedButton variant='transparent' icon='arrow-right' className='flex text-white text-left text-lg md:text-xl my-2'>
        SUBMIT
      </AnimatedButton>
    </div>
  )
} 