import { ComponentMeta, ComponentStory } from '@storybook/react';
import React from 'react';
import { TabGroup } from './tabGroup';

export default {
    title: 'Components/Atoms//TabGroup',
    component: TabGroup,
} as ComponentMeta<typeof TabGroup>;

const Template: ComponentStory<typeof TabGroup> = (args) => <TabGroup {...args} />;

export const defaultToggle = Template.bind({});
