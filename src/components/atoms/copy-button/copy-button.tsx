import React, {FC} from 'react';
import InteractionButton from '../interaction-button/interaction-button';

export type CopyButtonProps = {
    active: boolean;
    label: {
        inactive: string;
        active: string;
    }
};

const CopyButton: FC<CopyButtonProps> = ({  label, active }) => {
   return <InteractionButton active={active} label={active ? label.active : label.inactive} type={'copy'} classes={ active ? 'text-slate-600 hover:bg-slate-100' : 'hover:text-slate-700 hover:bg-slate-100'} iconColor={active ? 'fill-slate-700' : 'fill-slate-600 hover:fill-slate-700'}></InteractionButton>
};

export default CopyButton;

