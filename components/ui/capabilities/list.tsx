'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { AnimatedButton } from '@/components/utils';

import imgLayoutElectricPower from '@/assets/images/layout-electricpower.webp'
import imgLayoutUndergroundutility from '@/assets/images/layout-undergroundutility.webp'
import imgRenewable from '@/assets/images/layout-renewable.webp'
import imgBroadband from '@/assets/images/layout-broadband.webp'
import imgSpeciality from '@/assets/images/layout-speciality.webp'
import imgUtilityPerformance from '@/assets/images/layout-utilityperformance.webp'
import imgEngineering from '@/assets/images/layout-engineering.webp'
import imgConcretesolution from '@/assets/images/layout-concretesolution.webp'

interface ICapabilityMenu {
  name : string,
  path: string;
}

const CapabilityMenus : ICapabilityMenu[] = [
  { name: "ELECTRIC POWER", path: "/capabilities/electric-power"},
  { name: "ENERGY EFFICIENCY", path: "/capabilities/energy-efficiency"},
  { name: "SAFETY", path: "/capabilities/safety"},
  { name: "INTERIOR REMODELING", path: "/capabilities/interior-remodeling"},
  { name: "EXTERIOR REMODELING", path: "/capabilities/exterior-remodeling"},
  { name: "RESTORATION", path: "/capabilities/restoration"},
  { name: "GENERATORS", path: "/capabilities/generators"},
  { name: "MAINTENANCE SUBSCRIPTIONS", path: "/capabilities/maintenance-subscriptions"},
  
]

const images : any[] = [
  imgLayoutElectricPower,
  imgLayoutUndergroundutility,
  imgRenewable,
  imgBroadband,
  imgSpeciality,
  imgUtilityPerformance,
  imgEngineering,
  imgConcretesolution
]

export default function List() {

  const [currentCapability, setCurrentCapability] = useState<number>(0)

  useEffect(() => {
    let menus = document.getElementsByClassName('menu');
    for(let i = 0; i < menus.length; i ++) {
      let menuObj = menus[i];
      menuObj.addEventListener('mouseover', () => {
        setCurrentCapability(i);
        console.log(i);
      })
    }
  }, [currentCapability])


  return (
    <section className="capabilities-list bg-zinc-100">
      <div className='container mx-auto px-11 py-32 grid grid-cols-1 lg:grid-cols-2 gap-10'>
        <div className='col-span-1'>
          <div className="text-2xl md:text-3xl font-bold my-10">
            UNMATCHED CAPABILITIES
          </div>
          <div className="text-black text-sm my-10">
          The energy industry makes modern life possible, but few realize how intertwined the electric power, construction and communications industries are in our daily lives. Metstar Premier Era Innovations's capabilities span the industry to build the infrastructure that connects people and power.</div>
          {
            CapabilityMenus.map((item, idx) => (
              <Link key={idx} href={item.path}>
                <div className="font-bold my-4 menu">
                  {item.name}
                </div>
              </Link>
            )) 
          }
        </div>
        <div className='col-span-1'>
          <div className='directory w-9/12 mx-auto p-5'>
            <div className='text-xl font-bold my-10'>INTERESTED IN ALL METSTAR PREMIER ERA INNOVATIONS HAS TO OFFER?
            </div>
            <div className='text-sm my-2'>
              View our Capability Directory for a thorough listing of our service offerings
            </div>
            <Link href="/capabilities-catalog">
              <AnimatedButton variant='warning' icon='arrow-right' className='flex text-white text-left text-sm my-5'>
                CAPABILITIES DIRECTORY
              </AnimatedButton>
            </Link>
          </div>
        </div>
      </div>
      <Image src={images[currentCapability]} alt='electric-power' className='layout-image mx-auto' />
    </section>
  )
} 