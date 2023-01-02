import React, {FC} from 'react';
import InteractionButton from '../interaction-button/interaction-button';

export type LikeWithReactionProps = {
    active: boolean;
    label: {
        noReaction: string;
        oneReaction: string;
        severalReaction: string;
        reactionByCurrentUser: string;
    },
    likes: number,
    reactionByCurrentUser: boolean;
};

const LikeButtonWithReaction: FC<LikeWithReactionProps> = ({  label, likes, reactionByCurrentUser }) => {
    let active = reactionByCurrentUser || likes > 0;
    let theLabel = '';

    if (reactionByCurrentUser) {
        theLabel = label.reactionByCurrentUser;
    } else if (likes === 0) {
        theLabel = label.noReaction;
    } else if(likes === 1) {
        theLabel = likes + ' ' + label.oneReaction;
    } else {
        theLabel = likes + ' ' + label.severalReaction;
    }

   return <InteractionButton active={active} label={theLabel} type={'like'} classes={ active ? 'text-pink-900 hover:bg-pink-50' : 'hover:text-pink-600 hover:bg-pink-50'} iconColor={active ? 'fill-pink-500' : 'fill-slate-600 hover:fill-pink-500'}></InteractionButton>
};

export default LikeButtonWithReaction;

