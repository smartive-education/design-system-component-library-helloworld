import React, {FC} from 'react';
import HeartIconSvGComponent from '../icons/heart-icon/heart-icon';
import {HeartIconFilledComponent} from '../icons/index';
import MessageIconFilledSvGComponent from '../icons/message-icon-filled/message-icon-filled';
import MessageIconSvGComponent from '../icons/message-icon/message-icon';
import ShareIconSvGComponent from '../icons/share-icon';

export type InteractionButtonProps = {
    active: boolean;
    label: string;
    type: 'like' | 'comment' | 'copy'
    classes: string;
    iconColor: string;
};

const InteractionButton: FC<InteractionButtonProps> = ({  active, label, type, classes, iconColor }) => {
    let icon;
    if(type === 'like') {
        if(active) {
            icon =  <HeartIconFilledComponent className={iconColor} />
        } else {
            icon = <HeartIconSvGComponent className={iconColor}/>
        }
    } else if(type === 'comment') {
        if(active) {
            icon =  <MessageIconFilledSvGComponent className={iconColor} />
        } else {
            icon = <MessageIconSvGComponent className={iconColor}/>
        }
    } else if(type === 'copy') {
        icon =  <ShareIconSvGComponent className={iconColor} />
    }

    let defaultClasses = 'flex space-x-xs items-center text-slate-600 px-xs py-xxs rounded-m'

   return <button className=    {
       `${defaultClasses} - ${ classes }`}>{icon}<span>{label}</span></button>
};

export default InteractionButton;
