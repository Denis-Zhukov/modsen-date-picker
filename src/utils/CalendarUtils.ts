import { TypeOfDay } from '@/components/CalendarCell/types';
import { DateUtils } from '@/utils/DateUtils';
import { LocalStorageUtils } from '@/utils/LocalStorageUtils';

export class CalendarUtils {
    static getTypeCalendarDay(
        range: [Date, Date] | undefined,
        currentDate: Date,
    ): TypeOfDay {
        if (!range) return 'default';
        if (currentDate > range[0] && currentDate < range[1]) return 'between';
        if (DateUtils.isSameDays(range[0], currentDate)) return 'start';
        if (DateUtils.isSameDays(range[1], currentDate)) return 'end';
        return 'default';
    }

    static getTypeCalendarMonth(
        range: [Date, Date] | undefined,
        currentDate: Date,
    ): TypeOfDay {
        if (!range) return 'default';
        if (DateUtils.isSameMonths(range[1], currentDate)) return 'end';
        if (currentDate > range[0] && currentDate < range[1]) return 'between';
        if (DateUtils.isSameMonths(range[0], currentDate)) return 'start';
        return 'default';
    }

    static getTypeCalendarYear(
        range: [Date, Date] | undefined,
        currentDate: Date,
    ): TypeOfDay {
        if (!range) return 'default';
        if (range[0].getFullYear() === currentDate.getFullYear()) return 'start';
        if (range[1].getFullYear() === currentDate.getFullYear()) return 'end';
        if (currentDate > range[0] && currentDate < range[1]) return 'between';
        return 'default';
    }

    static addTask(task: string, date: Date) {
        LocalStorageUtils.addItem('tasks', { task, date });
    }
}
