import React from 'react';
import  { FC, ReactNode } from 'react';

export enum ButtonType1 {
    primary = 'primary',
    secondary = 'secondary',
}

export type ButtonProps1 = {
    type: ButtonType1;
    children: ReactNode;
};

export const Button: FC<ButtonProps1> = ({ type, children }) => (
    <button className={type === ButtonType1.primary ? 'bg-blue-500 text-white' : 'bg-blue-200 text-black'}>{children}</button>
);
