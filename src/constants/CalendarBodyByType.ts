import type { JSX } from 'react';

import { Days } from '@/components/Days';
import { Months } from '@/components/Months';
import { Years } from '@/components/Years';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';
import { CalendarBodyProps } from '@/typing';

export const calendarBodies: Record<
    TypeOfCalendar,
    (props: CalendarBodyProps) => JSX.Element
> = {
    [TypeOfCalendar.Days]: Days,
    [TypeOfCalendar.Months]: Months,
    [TypeOfCalendar.Years]: Years,
};
