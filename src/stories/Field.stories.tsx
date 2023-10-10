import { useArgs } from '@storybook/client-api';
import { Meta, StoryObj } from '@storybook/react';
import React, { useCallback } from 'react';

import { Field } from '@/components/Field';
import { withOpenCalendar } from '@/hoc/withOpenCalendar';

const meta: Meta<typeof Field> = {
    title: 'Calendar field',
    component: Field,
};

export default meta;
type Story = StoryObj<typeof Field>;
export const Default: Story = {
    name: 'default',
    render: (args) => <Field {...args} />,
    args: {
        date: '',
        placeholder: 'Choose Date',
    },
    argTypes: {
        onChangeDate: {
            control: 'none',
        },
    },
};

const FieldWithCalendar = withOpenCalendar(Field);
export const WithCalendar: StoryObj<typeof FieldWithCalendar> = {
    name: 'with opening calendar',
    render: (args) => {
        const [, updateArgs] = useArgs();

        const handleChangeMonth = useCallback(
            (newYear: number, newMonth: number) => {
                updateArgs({ year: newYear, month: newMonth });
            },
            [],
        );

        const handleChangeDate = useCallback((newDate: string) => {
            updateArgs({ date: newDate });
        }, []);

        const handleResetClick = useCallback(() => {
            updateArgs({ date: '' });
        }, []);

        return (
            <FieldWithCalendar
                {...args}
                onChangeMonth={handleChangeMonth}
                onChangeDate={handleChangeDate}
                onResetClick={handleResetClick}
            />
        );
    },
    args: {
        month: 10,
        year: 2023,
        date: '',
        placeholder: 'Choose Date',
    },
    argTypes: {
        onChangeDate: {
            control: 'none',
        },
        onChangeMonth: {
            control: 'none',
        },
    },
};
