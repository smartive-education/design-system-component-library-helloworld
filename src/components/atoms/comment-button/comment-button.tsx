import React, {FC} from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import MessageIconSvGComponent from '../icons/message-icon';

export type LikeWithReactionProps = {
    label: {
        noComments: string;
        someComments: string;
    },
    numberOfComments: number,
};

const CommentButton: FC<LikeWithReactionProps> = ({  label, numberOfComments }) => {
    let active = numberOfComments > 0;

    return <InteractionButton label={active ? numberOfComments + ' ' + label.someComments : label.noComments} classes={ active ? 'text-slate-600 hover:bg-slate-100' : 'hover:text-slate-700 hover:bg-slate-100'}><MessageIconSvGComponent variant={active ? 'filled' : 'normal'} classes={active ? 'fill-violet-600' : 'fill-slate-600 hover:fill-violet-600'}/></InteractionButton>
};

export default CommentButton;

