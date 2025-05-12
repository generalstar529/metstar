export interface IMenu {
    title: string;
    path: string;
}

export interface IPerson {
    photo: any;
    fullname: string;
    role?: string;
    introduction?: string;
    details?: string;
}

export interface IProcess {
    id: number;
    process: string;
    title: string;
    content: string[];
}

export interface ICapability {
    topic: string;
    title: string;
    description: string;
    offerings: string[];
}

export interface IProject {
    photo: any;
    title: string;
    content: string;
}

export interface IImageCardProp {
    imageSrc: any;
    title: string;
    subTitle: string;
    description: string;
    offerings: string[],
    link: string
}

export type TYPE_SIZE = 'auto' | 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | undefined;