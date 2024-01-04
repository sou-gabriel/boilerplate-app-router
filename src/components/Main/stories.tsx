import { Meta, StoryObj } from '@storybook/react';

import Main from '.';

const meta: Meta<typeof Main> = {
  title: 'Main',
  component: Main
};

export default meta;

type Story = StoryObj<typeof Main>;

export const Default: Story = {};

export const Basic: Story = {
  args: {
    title: 'title basic',
    description: 'description basic'
  }
};
