import { TypeOfCalendar } from '@/constants/TypeOfCalendar';

import type { Action } from './actions';

export interface State {
    selectedYear: number | null;
    selectedMonth: number | null;
    selectedDay: number | null;

    currentYear: number;
    currentMonth: number;
    currentDay: number;

    americanStandard: false;
    type: TypeOfCalendar;
}

const initialState: State = {
    selectedYear: null,
    selectedMonth: null,
    selectedDay: null,

    currentYear: 21,
    currentMonth: 6,
    currentDay: 2023,

    americanStandard: false,
    type: TypeOfCalendar.Days,
};

export const datePickerReducer = (
    state: State = initialState,
    { type, payload }: Action,
): State => {
    switch (type) {
    case 'SET_SELECTED_DATE':
        return {
            ...state,
            selectedYear: payload?.year ?? null,
            selectedMonth: payload?.month ?? null,
            selectedDay: payload?.day ?? null,
        };
    case 'SET_CURRENT_DATE':
        return {
            ...state,
            currentYear: payload?.year ?? state.currentYear,
            currentMonth: payload?.month ?? state.currentMonth,
            currentDay: payload?.day ?? state.currentDay,
        };
    case 'RESET_DATE':
        return {
            ...state,
            selectedYear: null,
            selectedMonth: null,
            selectedDay: null,
        } as State;
    case 'SET_CALENDAR_TYPE':
        return {
            ...state,
            type: payload,
        };
    default:
        return state as State;
    }
};
