import React, {FC} from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import ShareIconSvGComponent from '../icons/share-icon/share-icon';

export type CopyButtonProps = {
    active: boolean;
    label: {
        inactive: string;
        active: string;
    }
};

const CopyButton: FC<CopyButtonProps> = ({  label, active }) => {
   return <InteractionButton label={active ? label.active : label.inactive} classes={ active ? 'text-slate-600 hover:bg-slate-100' : 'hover:text-slate-700 hover:bg-slate-100'}><ShareIconSvGComponent className={active ? 'fill-slate-700' : 'fill-slate-600 hover:fill-slate-700'} /></InteractionButton>
};

export default CopyButton;

