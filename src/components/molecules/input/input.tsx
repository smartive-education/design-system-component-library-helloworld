import React, {FC} from 'react';

export type InputProps = {
    label: string;
    placeholder: string;
    type?: 'text' | 'email' | 'number';
};

const Input: FC<InputProps> = ({  label,  placeholder, type ='text' }) => {


    return <div className={'block text-slate-700'}>
        <label>{label}</label>
        <input type={type} placeholder={placeholder}  className={'flex items-center justify-between w-264 h-48 border-1 border-slate-100 hover:border-violet-600 focus:outline focus:outline-none focus:border-2 rounded-s px-s'}></input>
    </div>
};

export default Input;
