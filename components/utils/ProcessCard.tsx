import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { ElementWithIconProps } from './interface';
import { AnimatedButton } from '../utils';

export interface ProcessCardProps extends ElementWithIconProps {
    id: number;
    process: string;
    title: string;
    content: string[];
    children?: ReactNode | undefined;
}

const ProcessCard = (
  {
    id,
    process,
    title,
    content,
    className = '',
    children,
  } : ProcessCardProps
) => {

  const renderProcessCard = () => (
    <div className={`processcard px-7 py-2 mb-5 mx-auto ${className}`} >
      <span className='numbercard text-white text-lg px-3 py-2'>{id}</span>
      <div className='text-sm my-5'>{process}</div>
      <div className='text-lg font-bold my-5'>{title}</div>
      <ul className='text-sm text-black content'>
        {
          content.map((contentItem, idx) => (
            <li key={idx}>{contentItem}</li>
          ))
        }
      </ul>
    </div>
  );

  return (
    <>
    {
        renderProcessCard()
    }
    </>
  );
};

export default ProcessCard;