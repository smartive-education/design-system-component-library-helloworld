import React from 'react';
import  { FC, ReactNode } from 'react';

export enum ButtonType {
    default = 'default',
    colorful = 'colorful',
    purple = 'purple'
}

export type ButtonProps = {
    type: ButtonType;
    children: ReactNode;
};

export const Button: FC<ButtonProps> = ({ type, children }) => {
    const defaultClasses = 'text-white py-xxs px-xs rounded-s w-150 h-40 outline hover:outline-3 active:outline-4';
    const defaultVariant =' bg-slate-600 hover:bg-slate-700 hover:outline-slate-100 active:outline-slate-200';
    const purpleVariant ='bg-violet-600 hover:bg-violet-700 hover:outline-violet-100 active:outline-violet-200';
    const colorfulVariant ='bg-gradient-to-r from-pink-500 to-violet-500';
   return <button
       className={
       `${defaultClasses} - ${ type === ButtonType.purple ? purpleVariant : type === ButtonType.colorful ? colorfulVariant : defaultVariant }`}
      >{children}</button>
};


