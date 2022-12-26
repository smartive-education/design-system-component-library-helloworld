import React, {FC} from 'react';
import MumbleIconSvGComponent from '../icon/mumble-icon';

export enum ButtonType {
    default = 'default',
    colorful = 'colorful',
    purple = 'purple'
}

export enum ButtonSize {
    s = 's',
    m = 'm',
    l = 'l'
}

export type ButtonProps = {
    type: ButtonType;
    size: ButtonSize;
    label: string;
};

const Button: FC<ButtonProps> = ({ type, size, label }) => {
    const defaultClasses = 'text-white py-xxs px-xs rounded-s outline hover:outline-3 active:outline-4';
    const defaultVariant =' bg-slate-600 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200';
    const purpleVariant ='bg-violet-600 hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200';
    const colorfulVariant ='bg-gradient-to-r from-pink-500 to-violet-500 hover:outline-violet-100 active:outline-violet-200';
    const currentVariant = type === ButtonType.purple ? purpleVariant : type === ButtonType.colorful ? colorfulVariant : defaultVariant;
    const currentSize = size === ButtonSize.m ? 'w-150 h-40' :  'w-178 h-48';
   return <button
       className={
       `${defaultClasses} - ${ currentVariant } - ${ currentSize }`}
   ><div className={'flex items-center justify-between'}>{label}<MumbleIconSvGComponent className={'fill-white'} /></div></button>
};

export default Button;

