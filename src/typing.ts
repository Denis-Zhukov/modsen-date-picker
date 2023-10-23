export interface CalendarBodyProps {
    range?: [Date, Date];
    onDateClick?: (year: number, month: number, day: number) => void;
}
