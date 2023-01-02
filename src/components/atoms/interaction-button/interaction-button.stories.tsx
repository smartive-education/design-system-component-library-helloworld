import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import LikeButton from './interaction-button';

export default {
    title: 'Components/Atoms/Interaction Button',
    component: LikeButton
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => <LikeButton {...args}/>;

export const NotLikedLikeButtonComponent = Template.bind({});
NotLikedLikeButtonComponent.args = {
    label: 'Like',
    active: false
};

export const LikedLikeButtonComponent = Template.bind({});
LikedLikeButtonComponent.args = {
    label: 'Liked' ,
    active: true
};
