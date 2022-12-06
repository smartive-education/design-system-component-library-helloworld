import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button, ButtonType } from './test';

export default {
    title: 'Components/Molecules/Test Button',
    component: Button,
    argTypes: {
        type: {
            options: ['primary', 'secondary'],
            control: { type: 'select' },
        },
    },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args}>Hello World</Button>;

export const ButtonComponent = Template.bind({});
ButtonComponent.args = {
    type: ButtonType.primary,
};
