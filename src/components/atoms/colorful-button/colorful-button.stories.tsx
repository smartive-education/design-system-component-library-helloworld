import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import ColorfulButton from './colorful-button';
import { ButtonSize } from '../base-button/base-button';

export default {
  title: 'Components/Atoms/Buttons/ColorfulButton',
  component: ColorfulButton
} as ComponentMeta<typeof ColorfulButton>;

const Template: ComponentStory<typeof ColorfulButton> = (args) => <ColorfulButton {...args} />;

export const ColorfulButtonDefaultComponent = Template.bind({});
ColorfulButtonDefaultComponent.args = {
  label: 'Click me'
};

export const ColorfulButtonComponentMedium = Template.bind({});
ColorfulButtonComponentMedium.args = {
  label: 'Click me',
  size: ButtonSize.m
};
