import React, { MouseEventHandler, ReactNode, useEffect } from 'react';
import Image from 'next/image';
import { ElementWithIconProps } from './interface';

export interface ProjectCardProps extends ElementWithIconProps {
    photo: any;
    title: string;
    content: string;
    children?: ReactNode | undefined;
}

const ProjectCard = (
  {
    photo,
    title,
    content,
    className = '',
    children,
  } : ProjectCardProps
) => {

  const renderProjectCard = () => (
    <div className={`projectcard mx-auto ${className}`} >
      <Image src={photo} alt='image' className='projectcard-image' />
      {/* <div className='projectcard-info pl-4'>
        <div className='text-lg font-bold py-4'>{title}</div>
        <div className='text-sm py-4'>{content}</div>
      </div> */}
    </div>
  );

  return (
    <>
    {
        renderProjectCard()
    }
    </>
  );
};

export default ProjectCard;