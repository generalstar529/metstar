'use client'

import Image from "next/image"

import imgPeople1 from '@/assets/images/culture-people1.webp'
import imgPeople2 from '@/assets/images/culture-people2.webp'
import imgPeople3 from '@/assets/images/culture-people3.webp'

export default function PeopleFirst() {

  return (
    <section className="culture-people flex py-20">
      <div className="text-white mx-32 w-1/2">
        <div className="text-3xl md:text-5xl title mb-20">
          <span className="people">PEOPLE.</span>&nbsp;&nbsp;
          <span className="first text-black">FIRST.</span>
        </div>
        <div className="text-md text-white font-bold">
          At Metstar Premier Era Innovations Services, our people are the heart of everything we do. We know our differences make us stronger as we work towards our common goals. We intentionally support an environment where all employees are valued and empowered to succeed.
        </div>
      </div>
      <Image src={imgPeople1} alt="people1" className="w-1/2" />
    </section>
  )
}