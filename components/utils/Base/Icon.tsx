import Bar from "@/assets/images/icon-bar.svg";
import Search from "@/assets/images/icon-search.svg";
import ArrowRight from "@/assets/images/icon-arrow-right.svg";
import Instagram from "@/assets/images/icon-instagram.svg";
import Facebook from "@/assets/images/icon-facebook.svg";
import Phone from "@/assets/images/icon-phone.svg";

import { TYPE_SIZE } from "@/types";

interface IconProps {
    width?: number;
    height?: number;
    icon?: string;
    size?: TYPE_SIZE;
    className?: string;
}

export const icons = [
    {
        name: 'bar',
        icon: (props: IconProps) => <Bar {...props} method="fill" />,
    },
    {
        name: 'search',
        icon: (props: IconProps) => <Search {...props} method="stroke" />,
    },
    {
        name: 'arrow-right',
        icon: (props: IconProps) => <ArrowRight {...props} method="stroke" />,
    },
    {
        name: 'instagram',
        icon: (props: IconProps) => <Instagram {...props} method="stroke" />
    },
    {
        name: 'facebook',
        icon: (props: IconProps) => <Facebook {...props} method="stroke" />
    },
    {
        name: 'phone',
        icon: (props: IconProps) => <Phone {...props} method="stroke" />
    }
]

const Icon = (props: IconProps): JSX.Element => {
    if (props.icon === undefined) return <></>;
    const filteredIcon = icons.filter((icon) => props.icon === icon.name);
  
    if (filteredIcon.length === 0) return <></>;

    let width = 0;
    let height = 0;

    if (props.size === 'xxl') {
        width = 80;
        height = 80;
    } else if (props.size === 'xl') {
        width = 30;
        height = 30;
    } else if (props.size === 'lg') {
        width = 20;
        height = 20;
    } else if (props.size === 'md') {
        width = 16;
        height = 16;
    } else if (props.size === 'sm') {
        width = 14;
        height = 14;
    } else if (props.size === 'xs') {
        width = 12;
        height = 12;
    }

    let newProps = props;
    if (width === 0 || height === 0) {
    } else {
        newProps = {
        width: props.width || width,
        height: props.height || height,
        ...props,
        };
    }
  
    const iconSvg = filteredIcon[0].icon;

    return <>{iconSvg(newProps)}</>;
  };
  
  export default Icon;