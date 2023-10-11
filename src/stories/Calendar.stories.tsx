import { useArgs } from '@storybook/client-api';
import { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';

import { Calendar } from '@/components/Calendar';
import { withAmericanStandard } from '@/hoc/withAmericanStandard';

const meta: Meta<typeof Calendar> = {
    title: 'Calendar',
    component: Calendar,
    argTypes: {
        year: { control: { type: 'number' } },
        month: { control: { type: 'number', min: 1, max: 12 } },
    },
};

export default meta;
type Story = StoryObj<typeof Calendar>;

export const Default: Story = {
    name: 'default',
    render: (args) => {
        const [, updateArgs] = useArgs();

        const handleChangeMonth = useCallback((year: number, month: number) => {
            updateArgs({ year, month });
        }, []);

        return <Calendar {...args} onChangeMonth={handleChangeMonth} />;
    },
    args: {
        year: 2023,
        month: 10,
    },
};
