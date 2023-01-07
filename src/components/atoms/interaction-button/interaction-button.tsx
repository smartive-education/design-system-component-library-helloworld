import React, {FC, ReactNode} from 'react';

export type InteractionButtonProps = {
    label?: string;
    colorVariant?: 'slate' | 'pink' | 'violet';
    active?: boolean;
    children?: ReactNode;
};

const InteractionButton: FC<InteractionButtonProps> = ({  label, colorVariant, active, children }) => {
    let defaultClasses = 'group flex space-x-xs items-center text-slate-600 px-xs py-xxs rounded-m'
    let hoverColor;
    let textColor;

    switch(colorVariant) {
        case 'pink':
            hoverColor = 'hover:bg-pink-50';
            textColor = active ? 'group-hover:text-pink-600 text-pink-900' : 'group-hover:text-pink-600';
            break;
        case 'slate':
            hoverColor = 'hover:bg-slate-100';
            textColor = active ? 'text-slate-700 group-hover:text-slate-700' : 'group-hover:text-slate-700';
            break;
        case 'violet':
            hoverColor = 'hover:bg-violet-50';
            textColor = 'group-hover:text-violet-600';
            break;
    }

    return <button className={`${defaultClasses} - ${ hoverColor }`}>{children}<span className={textColor}>{label}</span></button>
};

export default InteractionButton;
