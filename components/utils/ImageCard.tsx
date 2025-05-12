import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { ElementWithIconProps } from './interface';
import { AnimatedButton } from '../utils';
import { IImageCardProp } from '@/types';
import Link from 'next/link';

export interface ImageCardProps extends ElementWithIconProps {
    title: String;
    subTitle: String;
    description: String;
    imageSrc: any;
    offerings: string[];
    link: string;
    children?: ReactNode | undefined;
}

const ImageCard = (
  {
    title,
    subTitle,
    description,
    imageSrc,
    offerings,
    link,
    className = '',
    children,
  } : ImageCardProps
) => {

  const renderImageCard = () => (
    <div
      className={`imagecard ${className}`}
    >
        <Image src={imageSrc} alt='image' style={{ width: '100%', height: '100%', objectFit: 'cover' }} className='imagecard-image' />
        <div className='text-2xl xl:text-3xl font-bold imagecard-title'>{title}</div>
        <div className='flex flex-col justify-around text-white imagecard-content'>
          {subTitle.length > 0 && <div className='font-bold'>
            {subTitle}
          </div>}
          <div className='text-xl xl:text-2xl font-bold'>Service Offerings</div>
          <ul className='grid grid-cols-2'>
            {offerings.map((el, idx) => (
              <li key={idx}>{el}</li>
            ))}
          </ul>
          <Link href={link}>
            <AnimatedButton variant='transparent' icon='arrow-right' className='text-white text-left font-bold text-lg md:text-xl'>
              SEE ALL
            </AnimatedButton>
          </Link>
        </div>
        { /* <span>{children}</span> */}
    </div>
  );

  return (
    <>
    {
        renderImageCard()
    }
    </>
  );
};

export default ImageCard;