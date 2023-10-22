import React from 'react';

import type { Action } from '@/store/actions';
import type { State } from '@/store/reducer';

export interface DatePickerContext {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const DatePickerContext = React.createContext<DatePickerContext | undefined>(undefined);
