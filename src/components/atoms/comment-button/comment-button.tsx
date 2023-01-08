import React, { FC } from 'react';
import InteractionButton from '../interaction-button/interaction-button';
import MessageIconSvGComponent from '../icons/message-icon';

export type LikeWithReactionProps = {
  label: {
    noComments: string;
    someComments: string;
  };
  numberOfComments: number;
};

const CommentButton: FC<LikeWithReactionProps> = ({ label, numberOfComments }) => {
  const active = numberOfComments > 0;

  return (
    <InteractionButton
      label={active ? numberOfComments + ' ' + label.someComments : label.noComments}
      colorVariant={'violet'}
      active={active}
    >
      <MessageIconSvGComponent
        variant={active ? 'filled' : 'normal'}
        classes={active ? 'fill-violet-600' : 'fill-slate-600 group-hover:fill-violet-600'}
      />
    </InteractionButton>
  );
};

export default CommentButton;
