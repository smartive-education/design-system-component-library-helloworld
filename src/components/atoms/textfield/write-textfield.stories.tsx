import {ComponentMeta, ComponentStory} from '@storybook/react';
import React from 'react';
import {WriteTextfield} from "../index";

export default {
  title: 'Components/Atoms/Write-Textfield',
  component: WriteTextfield
} as ComponentMeta<typeof WriteTextfield>;

const Template: ComponentStory<typeof WriteTextfield> = (args) => <WriteTextfield {...args} />;

export const Username = Template.bind({});
Username.args = {
  placeholder: "Was gibt's Neues?"
};
