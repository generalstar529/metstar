import React, { useState, ReactNode } from 'react';
import { ElementProps } from './interface';

interface TagProps extends ElementProps {
  variant: 'success' | 'warning' | 'danger';
  children?: ReactNode | undefined;
}

export const Tag = ({ variant, className, children }: TagProps) => {
  return <span className={`tag-${variant} ${className}`}>{children}</span>;
};

export default Tag;