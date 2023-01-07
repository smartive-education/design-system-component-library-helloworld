import React, {FC} from 'react';
import {CalendarIconComponent, LocationIconComponent, TimeIconComponent, UserIconComponent} from '../icons/index';

export type LabelProps = {
    label: string;
    mainTyp?: boolean;
    variant?: 'username' | 'timestamp' | 'location' | 'joined'
};

const Label: FC<LabelProps> = ({  label,  variant, mainTyp = false }) => {
    let defaultClasses = 'group flex space-x-xs items-center px-xs py-xxs rounded-m'
    let defaultTypeClasses = 'text-slate-400 group-hover:text-slate-600'
    let mainTypeClasses = 'text-violet-600 group-hover:text-violet-900'

    return <div className={`${defaultClasses} - ${ mainTyp ? mainTypeClasses : defaultTypeClasses }`}>
        {iconSwitch(variant, mainTyp)}
        <span>{ label }</span>
    </div>
};

function iconSwitch(variant?: 'username' | 'timestamp' | 'location' | 'joined', mainTyp?: boolean) {
    const iconClasses = mainTyp ? 'fill-violet-600 group-hover:fill-violet-900' : 'fill-slate-400 group-hover:fill-slate-600'
    switch(variant) {
        case 'username':
           return <UserIconComponent className={ iconClasses } />;
        case 'timestamp':
            return <TimeIconComponent className={ iconClasses } />;
        case 'location':
            return <LocationIconComponent className={ iconClasses } />;
        case 'joined':
            return <CalendarIconComponent className={ iconClasses } />;
    }
}

export default Label;
