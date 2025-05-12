import React, { FC, ReactNode, } from 'react';
import Icon from './Icon';
import { ElementWithIconProps } from '../interface';

export interface SelectProps extends ElementWithIconProps {
    children?: ReactNode | undefined;
    options: string[];
}

const Select: FC<SelectProps> = (
  {
    className = '',
    options = [],
    icon = '',
    iconPos = 'left',
    onChange,
    children,
  },
) => {
  const renderSelect = () => (
    <div className={`select flex w-full ${className}`}>
      {
        iconPos === 'left' ? <Icon icon={icon} /> :  <></>
      }
      <select
        className='w-full'
        onChange={(e) => {
          if(onChange) {
            onChange(e);
          }
        }}
      >
        {
          options.map((item, idx) => (
            <option value={item} key={idx} >{item}</option>
          ))
        }
      </select>
      {
        iconPos === 'right' ? <Icon icon={icon} size='xl' className='mx-auto my-auto h-full icon-bg ' /> :  <></>
      }
    </div>
    
  );

  return (
    <>
    {
        renderSelect()
    }
    </>
  );
};

export default Select;