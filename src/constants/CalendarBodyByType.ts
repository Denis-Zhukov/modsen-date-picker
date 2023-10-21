import type { JSX } from 'react';

import { Days } from '@/components/Days';
import { Months } from '@/components/Months';
import { TypeOfCalendar } from '@/constants/TypeOfCalendar';

export const calendarBodies: Record<
    TypeOfCalendar,
    (props: { range?: [Date, Date] }) => JSX.Element
> = {
    [TypeOfCalendar.Days]: Days,
    [TypeOfCalendar.Months]: Months,
    [TypeOfCalendar.Years]: Days,
};
