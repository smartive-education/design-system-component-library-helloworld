import React, {FC} from 'react';
import LikeButton from '../like-button/like-button';

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

   return <LikeButton active={true} label={theLabel}></LikeButton>
};

export default LikeButtonWithReaction;

