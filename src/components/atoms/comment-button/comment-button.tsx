import React, {FC} from 'react';
import InteractionButton from '../interaction-button/interaction-button';

export type LikeWithReactionProps = {
    label: {
        noComments: string;
        someComments: string;
    },
    numberOfComments: number,
};

const CommentButton: FC<LikeWithReactionProps> = ({  label, numberOfComments }) => {
    let active = numberOfComments > 0;
    let theLabel = '';

    if (active) {
        theLabel = numberOfComments + ' ' + label.someComments;
    } else {
        theLabel = label.noComments;
    }

   return <InteractionButton active={active} label={theLabel} type={'comment'} classes={ 'hover:text-violet-600 hover:bg-violet-50'} iconColor={active ? 'fill-violet-600' : 'fill-slate-600 hover:fill-violet-600'}></InteractionButton>
};

export default CommentButton;

