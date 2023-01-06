import React, {FC, ReactNode} from 'react';

export type InteractionButtonProps = {
    active?: boolean;
    label?: string;
    type?: 'like' | 'comment' | 'copy'
    classes?: string;
    iconColor?: string;
    children?: ReactNode;
};

const InteractionButton: FC<InteractionButtonProps> = ({  active, label, type, classes, iconColor, children }) => {
    let defaultClasses = 'flex space-x-xs items-center text-slate-600 px-xs py-xxs rounded-m'

    return <button className={`${defaultClasses} - ${ classes }`}>{children}<span>{label}</span></button>
};

export default InteractionButton;
