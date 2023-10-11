import React, { useCallback, useState } from 'react';

import type { Props as CalendarProps } from '@/components/Calendar';
import type { Props as FieldProps } from '@/components/Field';

import { StyledRelativeCalendar, Wrapper } from './styled';

export const withOpenCalendar = <T extends FieldProps>(Component: React.ComponentType<T>) => ({
    year,
    month,
    onChangeMonth,
    americanStandard,
    ...props
}: T & CalendarProps) => {
    const [showCalendar, setShowCalendar] = useState(false);
    const handleToggleShowCalendar = useCallback(() => {
        setShowCalendar((prev) => !prev);
    }, [showCalendar]);

    return (
        <Wrapper>
            <Component
                {...(props as T)}
                onIconClick={handleToggleShowCalendar}
            />
            {showCalendar && (
                <StyledRelativeCalendar
                    year={year}
                    month={month}
                    onChangeMonth={onChangeMonth}
                    americanStandard={americanStandard}
                />
            )}
        </Wrapper>
    );
};
