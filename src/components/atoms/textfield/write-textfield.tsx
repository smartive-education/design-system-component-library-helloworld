import React, { FC } from 'react';
import {
  CalendarIconComponent,
  LocationIconComponent,
  TimeIconComponent,
  UserIconComponent
} from '../icons/index';

export type WriteTextfieldProps = {
  placeholder: string;
};

const WriteTextfield: FC<WriteTextfieldProps> = ({ placeholder }) => {
  return <textarea className={
    'bg-slate-100 h-160 w-355 border-1 hover:border-2 border-slate-200 ' +
    'hover:border-slate-300 rounded-s focus:outline focus:outline-none focus:border-2 ' +
    'focus:border-violet-600 px-s py-s resize-none'
  } placeholder={placeholder}></textarea>;
};

export default WriteTextfield;
