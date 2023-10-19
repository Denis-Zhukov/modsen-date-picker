import React from 'react';

import type { State } from '@/components/DatePicker/store';
import type { Action } from '@/components/DatePicker/store/actions';

export interface Context {
    state: State;
    dispatch: React.Dispatch<Action>;
}

export const DatePickerContext = React.createContext<Context | undefined>(undefined);
