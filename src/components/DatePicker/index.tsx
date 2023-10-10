import React, { useCallback, useState } from 'react';

import { Calendar } from '@/components/Calendar';
import {
    StyledDatePicker,
    StyledRelativeCalendar,
} from '@/components/DatePicker/styled';
import { Field } from '@/components/Field';

export const DatePicker = () => {
    const [year, setYear] = useState(2023);
    const [month, setMonth] = useState(10);

    const handleChangeMonthYear = useCallback(
        (newYear: number, newMonth: number) => {
            setYear(newYear);
            setMonth(newMonth);
        },
        [],
    );

    const [showCalendar, setShowCalendar] = useState(false);

    const handleToggleCalendar = useCallback(
        () => setShowCalendar((prev) => !prev),
        [],
    );

    return (
        <StyledDatePicker>
            <Field onIconClick={handleToggleCalendar} />
            {showCalendar && (
                <StyledRelativeCalendar
                    year={year}
                    month={month}
                    onChangeMonth={handleChangeMonthYear}
                />
            )}
        </StyledDatePicker>
    );
};
