import { DayOfWeek } from '@/constants/DayOfWeek';
import { DateUtils } from '@/utils/DateUtils';

describe('DateUtils', () => {
    describe('getMonthDays', () => {
        test('getMonthDays should return an empty array if year or month is not provided', () => {
            expect(DateUtils.getMonthDays(null, 10)).toEqual([]);
            expect(DateUtils.getMonthDays(2023, null)).toEqual([]);
            expect(DateUtils.getMonthDays(null, null)).toEqual([]);
        });

        test('getMonthDays should return an array of days in a month', () => {
            const daysInOctober2023 = DateUtils.getMonthDays(2023, 10);

            expect(daysInOctober2023[0]).toEqual({
                day: 25,
                month: 9,
                year: 2023,
                isHoliday: false,
            });

            expect(daysInOctober2023[daysInOctober2023.length - 1]).toEqual({
                day: 5,
                month: 11,
                year: 2023,
                isHoliday: true,
            });
        });

        test('getMonthDays should return an array of days in a month using American standard if isAmericanStandard is true', () => {
            const daysInOctober2023 = DateUtils.getMonthDays(2023, 10, true);

            expect(daysInOctober2023[0]).toEqual({
                day: 1,
                month: 10,
                year: 2023,
                isHoliday: true,
            });

            expect(daysInOctober2023[daysInOctober2023.length - 1]).toEqual({
                day: 11,
                month: 11,
                year: 2023,
                isHoliday: true,
            });
        });
    });

    describe('getDaysOfWeek', () => {
        test('getDaysOfWeek should return days of the week in the default order', () => {
            const daysOfWeek = DateUtils.getDaysOfWeek();

            expect(daysOfWeek).toEqual([
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
                DayOfWeek.Sunday,
            ]);
        });

        test('getDaysOfWeek should return days of the week in American standard order if isAmericanStandard is true', () => {
            const daysOfWeekAmerican = DateUtils.getDaysOfWeek(true);

            expect(daysOfWeekAmerican).toEqual([
                DayOfWeek.Sunday,
                DayOfWeek.Monday,
                DayOfWeek.Tuesday,
                DayOfWeek.Wednesday,
                DayOfWeek.Thursday,
                DayOfWeek.Friday,
                DayOfWeek.Saturday,
            ]);
        });
    });

    describe('getYears', () => {
        test('getYears should return an array of 12 years centered around the current year', () => {
            const currentYear = 2023;
            const years = DateUtils.getYears(currentYear);

            expect(years).toEqual([
                2019, 2020, 2021, 2022, 2023, 2024, 2025, 2026, 2027, 2028,
                2029, 2030,
            ]);
        });

        test('getYears should return an array centered around the current year when the current year is a multiple of 10', () => {
            const currentYear = 2030;
            const years = DateUtils.getYears(currentYear);

            expect(years).toEqual([
                2029, 2030, 2031, 2032, 2033, 2034, 2035, 2036, 2037, 2038,
                2039, 2040,
            ]);
        });
    });

    describe('getFormatDate', () => {
        test('getFormatDate should return an empty string if year, month, or day is not provided', () => {
            expect(DateUtils.getFormatDate(null, 10, 15)).toEqual('');
            expect(DateUtils.getFormatDate(2023, null, 15)).toEqual('');
            expect(DateUtils.getFormatDate(2023, 10, null)).toEqual('');
            expect(DateUtils.getFormatDate(null, null, null)).toEqual('');
        });

        test('getFormatDate should format the date in YYYY-MM-DD format', () => {
            const formattedDate = DateUtils.getFormatDate(2023, 10, 15);
            expect(formattedDate).toEqual('2023-10-15');
        });

        test('getFormatDate should pad single-digit month and day with leading zeros', () => {
            const formattedDate = DateUtils.getFormatDate(2023, 3, 5);
            expect(formattedDate).toEqual('2023-03-05');
        });

        test('getFormatDate should not pad double-digit month and day', () => {
            const formattedDate = DateUtils.getFormatDate(2023, 12, 25);
            expect(formattedDate).toEqual('2023-12-25');
        });
    });

    describe('getNumberFromFormatDate', () => {
        test('getNumberFromFormatDate should return an array of year, month, and day from a valid date string', () => {
            const dateStr = '2023-10-15';
            const result = DateUtils.getNumberFromFormatDate(dateStr);

            expect(result).toEqual([2023, 10, 15]);
        });

        test('getNumberFromFormatDate should return an array with month as 1 for January', () => {
            const dateStr = '2023-01-15';
            const result = DateUtils.getNumberFromFormatDate(dateStr);

            expect(result).toEqual([2023, 1, 15]);
        });

        test('getNumberFromFormatDate should return an array with month as 12 for December', () => {
            const dateStr = '2023-12-25';
            const result = DateUtils.getNumberFromFormatDate(dateStr);

            expect(result).toEqual([2023, 12, 25]);
        });

        test('getNumberFromFormatDate should handle leading zeros in month and day', () => {
            const dateStr = '2023-03-05';
            const result = DateUtils.getNumberFromFormatDate(dateStr);

            expect(result).toEqual([2023, 3, 5]);
        });

        test('getNumberFromFormatDate should handle single-digit month and day', () => {
            const dateStr = '2023-3-5';
            const result = DateUtils.getNumberFromFormatDate(dateStr);

            expect(result).toEqual([2023, 3, 5]);
        });

        test('getNumberFromFormatDate should handle invalid date strings', () => {
            const invalidDateStr = 'invalid-date';
            const result = DateUtils.getNumberFromFormatDate(invalidDateStr);

            expect(result).toEqual([NaN, NaN, NaN]);
        });
    });

    describe('isSameDays', () => {
        test('isSameDays should return true for the same date', () => {
            const date1 = new Date(2023, 10, 15);
            const date2 = new Date(2023, 10, 15);
            const result = DateUtils.isSameDays(date1, date2);

            expect(result).toBe(true);
        });

        test('isSameDays should return false for different years', () => {
            const date1 = new Date(2022, 10, 15);
            const date2 = new Date(2023, 10, 15);
            const result = DateUtils.isSameDays(date1, date2);

            expect(result).toBe(false);
        });

        test('isSameDays should return false for different months', () => {
            const date1 = new Date(2023, 9, 15);
            const date2 = new Date(2023, 10, 15);
            const result = DateUtils.isSameDays(date1, date2);

            expect(result).toBe(false);
        });

        test('isSameDays should return false for different days', () => {
            const date1 = new Date(2023, 10, 14);
            const date2 = new Date(2023, 10, 15);
            const result = DateUtils.isSameDays(date1, date2);

            expect(result).toBe(false);
        });

        test('isSameDays should handle time within the same day', () => {
            const date1 = new Date(2023, 10, 15, 12, 30, 0);
            const date2 = new Date(2023, 10, 15, 18, 45, 30);
            const result = DateUtils.isSameDays(date1, date2);

            expect(result).toBe(true);
        });
    });

    describe('isSameMonths', () => {
        test('isSameMonths should return true for the same month and year', () => {
            const date1 = new Date(2023, 10, 15);
            const date2 = new Date(2023, 10, 20);
            const result = DateUtils.isSameMonths(date1, date2);

            expect(result).toBe(true);
        });

        test('isSameMonths should return false for different years', () => {
            const date1 = new Date(2022, 10, 15);
            const date2 = new Date(2023, 10, 20);
            const result = DateUtils.isSameMonths(date1, date2);

            expect(result).toBe(false);
        });

        test('isSameMonths should return false for different months', () => {
            const date1 = new Date(2023, 9, 15);
            const date2 = new Date(2023, 10, 20);
            const result = DateUtils.isSameMonths(date1, date2);

            expect(result).toBe(false);
        });

        test('isSameMonths should handle time within the same month', () => {
            const date1 = new Date(2023, 10, 15, 12, 30, 0);
            const date2 = new Date(2023, 10, 20, 18, 45, 30);
            const result = DateUtils.isSameMonths(date1, date2);

            expect(result).toBe(true);
        });

        test('isSameMonths should handle different years within the same month', () => {
            const date1 = new Date(2022, 10, 15);
            const date2 = new Date(2023, 10, 20);
            const result = DateUtils.isSameMonths(date1, date2);

            expect(result).toBe(false);
        });
    });

    describe('prevMonth', () => {
        test('prevMonth should return the previous month in the same year', () => {
            const result = DateUtils.prevMonth(2023, 5);
            expect(result).toEqual({ year: 2023, month: 4 });
        });

        test('prevMonth should handle the transition from January to December of the previous year', () => {
            const result = DateUtils.prevMonth(2023, 1);
            expect(result).toEqual({ year: 2022, month: 12 });
        });

        test('prevMonth should return the previous month when month is not January', () => {
            const result = DateUtils.prevMonth(2023, 10);
            expect(result).toEqual({ year: 2023, month: 9 });
        });

        test('prevMonth should handle the transition from December to January of the same year', () => {
            const result = DateUtils.prevMonth(2023, 12);
            expect(result).toEqual({ year: 2023, month: 11 });
        });
    });

    describe('nextMonth', () => {
        test('nextMonth should return the next month in the same year', () => {
            const result = DateUtils.nextMonth(2023, 5);
            expect(result).toEqual({ year: 2023, month: 6 });
        });

        test('nextMonth should handle the transition from December to January of the next year', () => {
            const result = DateUtils.nextMonth(2023, 12);
            expect(result).toEqual({ year: 2024, month: 1 });
        });

        test('nextMonth should return the next month when month is not December', () => {
            const result = DateUtils.nextMonth(2023, 10);
            expect(result).toEqual({ year: 2023, month: 11 });
        });

        test('nextMonth should handle the transition from January to February of the same year', () => {
            const result = DateUtils.nextMonth(2023, 1);
            expect(result).toEqual({ year: 2023, month: 2 });
        });
    });
});
