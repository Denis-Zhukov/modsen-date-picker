import { useContext } from 'react';

import { DatePickerContext } from '@/contexts/DatePickerContext';

export const useDatePicker = () => {
    const context = useContext(DatePickerContext);
    if (context === undefined) {
        throw new Error('useDatePicker must be used within a DatePickerProvider');
    }
    return context;
};
