import { TypeOfCalendar } from '@/constants/TypeOfCalendar';

type PartialDate = Partial<{ year: number; month: number; day: number }>;

export type Action =
    | {
          type: 'SET_SELECTED_DATE';
          payload: PartialDate;
      }
    | {
          type: 'SET_CURRENT_DATE';
          payload: Omit<PartialDate, 'day'>;
      }
    | {
          type: 'RESET_DATE';
          payload: null;
      }
    | {
          type: 'SET_CALENDAR_TYPE';
          payload: TypeOfCalendar;
      }
    | {
          type: 'SET_AMERICAN_STANDARD';
          payload: boolean;
      };

export const setSelectedDate = (payload: PartialDate): Action => ({
    type: 'SET_SELECTED_DATE',
    payload,
});

export const setCurrentDate = (payload: PartialDate): Action => ({
    type: 'SET_CURRENT_DATE',
    payload,
});

export const resetDate = (): Action => ({
    type: 'RESET_DATE',
    payload: null,
});

export const setCalendarType = (payload: TypeOfCalendar): Action => ({
    type: 'SET_CALENDAR_TYPE',
    payload,
});

export const setAmericanStandard = (payload: boolean): Action => ({
    type: 'SET_AMERICAN_STANDARD',
    payload,
});
