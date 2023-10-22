import React, { useCallback, useState } from 'react';

import type { Props as CalendarProps } from '@/components/Calendar';
import type { Props as FieldProps } from '@/components/Field';
import { useDatePicker } from '@/hooks/useDatePicker';
import { setCurrentDate } from '@/store/actions';

import { StyledRelativeCalendar, Wrapper } from './styled';

export const withOpenCalendar = <T extends FieldProps>(Component: React.ComponentType<T>) => (
    props: T & CalendarProps,
) => {
    const {
        state: {
            selectedYear,
            selectedMonth,
        },
        dispatch,
    } = useDatePicker();
    const [showCalendar, setShowCalendar] = useState(false);
    const handleToggleShowCalendar = useCallback(() => {
        setShowCalendar((prev) => !prev);
        if (selectedYear && selectedMonth) {
            dispatch(setCurrentDate({
                year: selectedYear,
                month: selectedMonth,
            }));
        }
    }, [selectedYear, selectedMonth]);

    return (
        <Wrapper>
            <Component
                {...(props as T)}
                onIconClick={handleToggleShowCalendar}
            />
            {showCalendar && <StyledRelativeCalendar />}
        </Wrapper>
    );
};
