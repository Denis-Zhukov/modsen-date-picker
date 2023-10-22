import React from 'react';

import type { State } from '@/store/reducer';
import type { Action } from '@/store/actions';

export interface DatePickerContext {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const DatePickerContext = React.createContext<DatePickerContext | undefined>(undefined);
