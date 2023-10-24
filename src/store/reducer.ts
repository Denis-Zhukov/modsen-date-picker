import { TypeOfCalendar } from '@/constants/TypeOfCalendar';

import type { Action } from './actions';

export interface State {
    selectedYear: number | null;
    selectedMonth: number | null;
    selectedDay: number | null;

    currentYear: number;
    currentMonth: number;

    americanStandard: boolean;
    type: TypeOfCalendar;
}

const initialState: State = {
    selectedYear: null,
    selectedMonth: null,
    selectedDay: null,

    currentYear: 21,
    currentMonth: 6,

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
            selectedYear: payload?.year ?? state.selectedYear,
            selectedMonth: payload?.month ?? state.selectedMonth,
            selectedDay: payload?.day ?? state.selectedDay,
        };
    case 'SET_CURRENT_DATE':
        return {
            ...state,
            currentYear: payload?.year ?? state.currentYear,
            currentMonth: payload?.month ?? state.currentMonth,
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
    case 'SET_AMERICAN_STANDARD':
        return {
            ...state,
            americanStandard: payload,
        };
    default:
        return state as State;
    }
};
