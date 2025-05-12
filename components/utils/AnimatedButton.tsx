import React, { ForwardRefRenderFunction, forwardRef, ReactNode, useCallback } from 'react';
import Button from './Base/Button';
import { ElementWithIconProps } from './interface';

export interface AnimatedButtonProps extends ElementWithIconProps {
    variant : 'success' | 'warning' | 'danger' | 'transparent';
    fullWidth? : boolean;
    children?: ReactNode | undefined;
}

const AnimatedButton = (
  {
    variant,
    className = '',
    icon,
    fullWidth = false,
    children,
  } : AnimatedButtonProps
) => {
  const renderAnimatdButton = () => (
    <div className={`${className}`}>
      <div className={`animated-button animated-button-${variant} ${fullWidth ? 'w-full' : ''}`}>
      <span className='me-5'>{children}</span>
      <div className={`animated-button-icon`}>
          <Button variant='danger' icon={icon} className='text-white' onClick={() => {}} />
      </div>
    </div>
    </div>
  );

  return (
    <>
    {
        renderAnimatdButton()
    }
    </>
  );
};

export default AnimatedButton;