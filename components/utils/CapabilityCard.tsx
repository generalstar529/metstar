import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ElementWithIconProps } from './interface';
import { AnimatedButton } from '../utils';

export interface CapabilityCardProps extends ElementWithIconProps {
    topic: string;
    title: string;
    description: string;
    offerings: string[];
    children?: ReactNode | undefined;
}

const CapabilityCard = (
  {
    topic,
    title,
    description,
    offerings,
    className = '',
    children,
  } : CapabilityCardProps
) => {

  const renderCapabilityCard = () => (
    <div className={`capabilitycard p-5 ${className}`} >
      <div className='text-md font-bold my-2 topic'>{topic}</div>
      <div className='text-lg my-5'>{title}</div>
      <div className='text-sm my-3'>{description}</div>
      <div className='text-sm font-bold my-3'>SERVICE OFFERINGS</div>
      <ul className='text-sm text-black content grid grid-cols-2 my-4 ml-4'>
        {
          offerings.map((offeringItem, idx) => (
            <li key={idx} className='mr-5'>{offeringItem}</li>
          ))
        }
      </ul>
      <Link href='/capabilities-catalog'>
        <AnimatedButton variant='warning' icon='arrow-right' className='text-white text-left text-sm'>
          CAPABILITIES DIRECTORY
        </AnimatedButton>
      </Link>
    </div>
  );

  return (
    <>
    {
      renderCapabilityCard()
    }
    </>
  );
};

export default CapabilityCard;