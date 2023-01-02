import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import LikeButtonWithReaction from './like-button-with-reaction';

export default {
    title: 'Components/Atoms/LikeButtonWithReactionComponent',
    component: LikeButtonWithReaction
} as ComponentMeta<typeof LikeButtonWithReaction>;

const Template: ComponentStory<typeof LikeButtonWithReaction> = (args) => <LikeButtonWithReaction {...args}/>;

export const NoLike = Template.bind({});
NoLike.args = {
    label: {noReaction: 'Like', oneReaction: 'Like', reactionByCurrentUser: 'Liked', severalReaction: 'Likes'},
    likes: 0
};

export const OneLike = Template.bind({});
OneLike.args = {
    label: {noReaction: 'Like', oneReaction: 'Like', reactionByCurrentUser: 'Liked', severalReaction: 'Likes'},
    likes: 1
};

export const MultipleLikes = Template.bind({});
MultipleLikes.args = {
    label: {noReaction: 'Like', oneReaction: 'Like', reactionByCurrentUser: 'Liked', severalReaction: 'Likes'},
    likes: 15
};

export const LikedByCurrentUser = Template.bind({});
LikedByCurrentUser.args = {
    label: {noReaction: 'Like', oneReaction: 'Like', reactionByCurrentUser: 'Liked', severalReaction: 'Likes'},
    likes: 15,
    reactionByCurrentUser: true
};
