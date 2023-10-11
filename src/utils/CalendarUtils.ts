import { TypeOfDay } from '@/components/CalendarDay/types';
import { DateUtils } from '@/utils/DateUtils';

export class CalendarUtils {
    static getTypeCalendarDay(
        range: [Date, Date] | undefined,
        currentDate: Date,
    ): TypeOfDay {
        if (!range) return 'default';
        console.log(range[0]);
        if (currentDate > range[0] && currentDate < range[1]) return 'between';
        if (DateUtils.isSameDays(range[0], currentDate)) return 'start';
        if (DateUtils.isSameDays(range[1], currentDate)) return 'end';
        return 'default';
    }
}
