import { setCurrentDate } from '@/components/DatePicker/store/actions';
import { DayOfWeek } from '@/constants/DayOfWeek';

export class DateUtils {
    static getMonthDays(
        year: number | null,
        month: number | null,
        isAmericanStandard = false,
    ) {
        if (!year || !month) return [];
        const firstDay = new Date(year, month - 1, 1);
        const lastDayPrevMonth = new Date(year, month - 1, 0);
        const daysInMonth: { day: number; month: number; year: number }[] = [];

        const day = new Date(
            lastDayPrevMonth.setDate(
                isAmericanStandard
                    ? lastDayPrevMonth.getDate() - firstDay.getDay() + 1
                    : lastDayPrevMonth.getDate() -
                          (firstDay.getDay() === 0 ? 5 : firstDay.getDay() - 2),
            ),
        );

        const maxRow = 6;
        const countDaysOfWeek = 7;

        const lastDay = new Date(year, month, 0);
        while (day < lastDay || daysInMonth.length < maxRow * countDaysOfWeek) {
            daysInMonth.push({
                day: day.getDate(),
                month: day.getMonth() + 1,
                year,
            });
            day.setDate(day.getDate() + 1);
        }

        return daysInMonth;
    }

    static getDaysOfWeek(isAmericanStandard = false) {
        const daysOfWeek = Object.values(DayOfWeek);
        if (isAmericanStandard) daysOfWeek.unshift(daysOfWeek.pop()!);
        return daysOfWeek;
    }

    static isSameDays(date1: Date, date2: Date) {
        const year1 = date1.getFullYear();
        const month1 = date1.getMonth();
        const day1 = date1.getDate();

        const year2 = date2.getFullYear();
        const month2 = date2.getMonth();
        const day2 = date2.getDate();

        return year1 === year2 && month1 === month2 && day1 === day2;
    }

    static prevMonth(year: number, month: number) {
        if (month - 1 < 1) return { year: year - 1, month: 12 };
        return { year, month: month - 1 };
    }

    static nextMonth(year: number, month: number) {
        if (month + 1 > 12) return { year: year + 1, month: 1 };
        return { year, month: month + 1 };
    }
}
