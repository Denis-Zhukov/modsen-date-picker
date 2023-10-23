import React, { useCallback } from 'react';

import type { CalendarBodyProps } from '@/typing';
import { CalendarUtils } from '@/utils/CalendarUtils';

export const withAddingTasks = <T extends CalendarBodyProps>(
    Component: React.ComponentType<T>,
) => {
    const handleDateClick = useCallback(
        (year: number, month: number, day: number) => {
            const task = prompt('Enter task name');
            if (!task) return;
            CalendarUtils.addTask(task, new Date(year, month, day));
        },
        [],
    );

    return (props: Omit<T, 'onDateClick'>) => (
        <Component onDateClick={handleDateClick} {...(props as T)} />
    );
};
