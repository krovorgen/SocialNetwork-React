import React from 'react';
import { ComponentMeta, ComponentStory } from '@storybook/react';
import { Button } from './Button';

export default {
  title: 'atoms/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const DefaultButton = Template.bind({});
DefaultButton.args = {
  children: 'Click me!',
};

export const Full = Template.bind({});
Full.args = {
  size: 'full',
  children: 'Click me!',
};
