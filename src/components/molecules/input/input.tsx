import React, {FC, ReactNode} from 'react';
import MumbleIconSvGComponent from '../../atoms/icon/mumble-icon';

export type InputProps = {
  label: string;
  placeholder: string;
  type?: 'text' | 'email' | 'number';
  children: ReactNode;
};

const Input: FC<InputProps> = ({ label, placeholder, type = 'text', children }) => {
  return (
    <div className={'block text-slate-700'}>
      <label>{label}</label>
      <div className={'w-264 h-48 relative'}>
        <div className={'first:w-8 first:h-8 first:flex first:absolute first:right-s first:top-s first:bottom-s first:fill-slate-600'}>
          {children}
        </div>
        <input
          type={type}
          placeholder={placeholder}
          className={
            'w-264 h-48 border-1 border-slate-100 hover:border-violet-600 focus:border-violet-600 focus:outline focus:outline-none focus:border-2 rounded-s px-s'
          }
        ></input>
      </div>
    </div>
  );
};

export default Input;
