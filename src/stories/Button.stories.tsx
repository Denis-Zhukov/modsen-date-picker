import { Meta, StoryObj } from '@storybook/react';
import React from 'react';

import { Button } from '@/components/Button';

const meta: Meta<typeof Button> = {
    component: Button,
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Default: Story = {
    render: () => <Button>Clear</Button>,
};
