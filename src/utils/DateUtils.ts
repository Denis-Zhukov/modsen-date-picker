export class DateUtils {
    static getMonthDays(year: number, month: number) {
        const firstDay = new Date(year, month - 1, 1);
        const lastDayPrevMonth = new Date(year, month - 1, 0);
        console.log(year, month);
        const daysInMonth: { day: number; month: number; year: number }[] = [];

        const day = new Date(
            lastDayPrevMonth.setDate(
                lastDayPrevMonth.getDate()
                    - (firstDay.getDay() === 0 ? 5 : firstDay.getDay() - 2),
            ),
        );

        const lastDay = new Date(year, month, 0);
        while (day < lastDay || daysInMonth.length < 42) {
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
