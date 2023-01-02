import React, {FC} from 'react';
import HeartIconSvGComponent from '../icons/heart-icon/heart-icon';
import {HeartIconFilledComponent} from '../icons/index';

export type LikeButtonProps = {
    active: boolean;
    label: string;
};

const LikeButton: FC<LikeButtonProps> = ({  active, label }) => {
    let icon;
    if(active) {
       icon =  <HeartIconFilledComponent className={'fill-pink-500'} />
    } else {
       icon = <HeartIconSvGComponent className={'fill-slate-600 hover:fill-pink-500'}/>
    }

    let defaultClasses = 'flex space-x-xs items-center text-slate-600 hover:text-pink-600 hover:bg-pink-50 px-xs py-xxs rounded-m'
    let activated = active ? 'text-pink-900' : 'text-slate-600'

   return <button className=    {
       `${defaultClasses} - ${ activated }`}>{icon}<span>{label}</span></button>
};

export default LikeButton;
