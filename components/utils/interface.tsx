import { CSSProperties } from 'react';

export interface ElementProps {
  className?: string;
  name?: string;
  onClick?: () => void;
  onChange?: (v: any) => void;
  disabled?: boolean;
  style?: CSSProperties;
}

export interface ElementWithIconProps extends ElementProps {
  icon?: string;
  iconPos?: 'left' | 'center' | 'right';
}
