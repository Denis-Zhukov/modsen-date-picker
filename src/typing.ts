export interface CalendarBodyProps {
    min?: Date;
    max?: Date;
    range?: [Date, Date];
    onDateClick?: (year: number, month: number, day: number) => void;
    holidays?: Date[];
    withHolidays?: boolean;
}
