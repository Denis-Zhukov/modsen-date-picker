import { CalendarUtils } from '@/utils/CalendarUtils';

describe('CalendarUtils', () => {
    describe('getTypeCalendarDay', () => {
        it('should return "default" when range is undefined', () => {
            const result = CalendarUtils.getTypeCalendarDay(
                undefined,
                new Date(),
            );
            expect(result).toBe('default');
        });

        it('should return "between" when currentDate is between the range', () => {
            const currentDate = new Date('2023-10-15');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [
                Date,
                Date,
            ];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('between');
        });

        it('should return "start" when currentDate is the same as the start of the range', () => {
            const currentDate = new Date('2023-10-10');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [
                Date,
                Date,
            ];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('start');
        });

        it('should return "end" when currentDate is the same as the end of the range', () => {
            const currentDate = new Date('2023-10-20');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [
                Date,
                Date,
            ];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('end');
        });

        it('should return "default" when currentDate is not in any special range', () => {
            const currentDate = new Date('2023-10-05');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [
                Date,
                Date,
            ];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('default');
        });
    });

    describe('getTypeCalendarDay', () => {
        it('should return "default" when range is undefined', () => {
            const result = CalendarUtils.getTypeCalendarDay(undefined, new Date());
            expect(result).toBe('default');
        });

        it('should return "between" when currentDate is between the range', () => {
            const currentDate = new Date('2023-10-15');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('between');
        });

        it('should return "start" when currentDate is the same as the start of the range', () => {
            const currentDate = new Date('2023-10-10');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('start');
        });

        it('should return "end" when currentDate is the same as the end of the range', () => {
            const currentDate = new Date('2023-10-20');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('end');
        });

        it('should return "default" when currentDate is not in any special range', () => {
            const currentDate = new Date('2023-10-05');
            const range = [new Date('2023-10-10'), new Date('2023-10-20')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarDay(range, currentDate);
            expect(result).toBe('default');
        });
    });

    describe('getTypeCalendarYear', () => {
        it('should return "default" when range is undefined', () => {
            const result = CalendarUtils.getTypeCalendarYear(undefined, new Date());
            expect(result).toBe('default');
        });

        it('should return "between" when currentDate is between the range', () => {
            const currentDate = new Date('2024-10-15');
            const range = [new Date('2023-01-01'), new Date('2025-12-31')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarYear(range, currentDate);
            expect(result).toBe('between');
        });

        it('should return "start" when currentDate year matches the start year of the range', () => {
            const currentDate = new Date('2023-01-15');
            const range = [new Date('2023-01-01'), new Date('2025-12-31')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarYear(range, currentDate);
            expect(result).toBe('start');
        });

        it('should return "end" when currentDate year matches the end year of the range', () => {
            const currentDate = new Date('2025-12-15');
            const range = [new Date('2023-01-01'), new Date('2025-12-31')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarYear(range, currentDate);
            expect(result).toBe('end');
        });

        it('should return "default" when currentDate year does not match the start or end year of the range', () => {
            const currentDate = new Date('2026-01-15');
            const range = [new Date('2023-01-01'), new Date('2025-12-31')] as [Date, Date];
            const result = CalendarUtils.getTypeCalendarYear(range, currentDate);
            expect(result).toBe('default');
        });
    });
});
