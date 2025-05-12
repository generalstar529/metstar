import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { ElementWithIconProps } from './interface';
import { AnimatedButton } from '.';

export interface IntroCardProps extends ElementWithIconProps {
    photo: any;
    fullname?: String;
    role?: string;
    introduction?: string;
    readMore?: boolean;
    children?: ReactNode | undefined;
    imgClassName?: string | undefined;
}

const IntroCard = (
  {
    photo,
    fullname,
    role,
    introduction,
    readMore = true,
    className = '',
    imgClassName = '',
    children,
  } : IntroCardProps
) => {

  const renderIntroCard = () => (
    <div className={`introcard mx-auto ${className}`} >
      <Image src={photo} alt='image' className={imgClassName} />
      <div className='introcard-info pl-4'>
        <div className='text-lg font-bold py-4'>{fullname}</div>
        {role ? <div className='text-sm py-2 text-gray-400'>{role}</div> : <></>}
        {introduction ? <div className='text-sm py-4'>{introduction}</div> : <></>}
        {
        readMore
        ? <AnimatedButton variant='transparent' icon='arrow-right' className='text-left font-bold text-sm'>
          READ MORE
          </AnimatedButton>
        : <></>
        }
      </div>
    </div>
  );

  return (
    <>
    {
        renderIntroCard()
    }
    </>
  );
};

export default IntroCard;