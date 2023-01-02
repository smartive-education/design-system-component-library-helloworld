import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import LikeLink from './like-button';
import LikeButton from './like-button';

export default {
    title: 'Components/Atoms/LikeLink',
    component: LikeButton
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => <LikeButton {...args}/>;

export const NotLikedLikeButtonComponent = Template.bind({});
NotLikedLikeButtonComponent.args = {
    label: { default: 'Like', activated: 'Liked' },
    active: false
};

export const LikedLikeButtonComponent = Template.bind({});
LikedLikeButtonComponent.args = {
    label: { default: 'Like', activated: 'Liked' },
    active: true
};
