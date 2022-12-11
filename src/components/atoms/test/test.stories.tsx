import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonType } from './test';

export default {
    title: 'Components/Atoms/Test Button',
    component: Button,
    argTypes: {
        type: {
            options: ['default', 'purple'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => (<Button {...args}>Button Label</Button>);

export const DefaultButtonComponent = Template.bind({});
DefaultButtonComponent.args = {
    type: ButtonType.default,
};

export const PurpleButtonComponent = Template.bind({});
PurpleButtonComponent.args = {
    type: ButtonType.purple,
};


export const ColorButtonComponent = Template.bind({});
ColorButtonComponent.args = {
    type: ButtonType.colorful,
};
