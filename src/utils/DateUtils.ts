export class DateUtils {
    static getMonthDays(
        year: number,
        month: number,
        isAmericanStandard = false,
    ) {
        const firstDay = new Date(year, month - 1, 1);
        const lastDayPrevMonth = new Date(year, month - 1, 0);
        const daysInMonth: { day: number; month: number; year: number }[] = [];

        const day = new Date(
            lastDayPrevMonth.setDate(
                isAmericanStandard
                    ? lastDayPrevMonth.getDate() - firstDay.getDay() + 1
                    : lastDayPrevMonth.getDate()
                          - (firstDay.getDay() === 0 ? 5 : firstDay.getDay() - 2),
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
}
