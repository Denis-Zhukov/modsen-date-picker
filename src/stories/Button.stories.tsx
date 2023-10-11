import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '@/components/Button';

const meta: Meta<typeof Button> = {
    title: 'Button',
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    name: 'default',
    render: () => <Button>Clear</Button>,
};
