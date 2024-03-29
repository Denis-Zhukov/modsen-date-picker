import { useDatePicker } from '@/hooks/useDatePicker';
import { setCurrentDate } from '@/store/actions';
import { DateUtils } from '@/utils/DateUtils';

export const useGetSelectorHandlers = () => {
    const {
        state: { currentMonth, currentYear, type },
        dispatch,
    } = useDatePicker();

    if (type === 'days') {
        const handlePrev = () => {
            dispatch(
                setCurrentDate(DateUtils.prevMonth(currentYear, currentMonth)),
            );
        };

        const handleNext = () => {
            dispatch(
                setCurrentDate(DateUtils.nextMonth(currentYear, currentMonth)),
            );
        };

        return [handlePrev, handleNext];
    }

    if (type === 'months') {
        const handlePrev = () => {
            dispatch(setCurrentDate({ year: currentYear - 1 }));
        };

        const handleNext = () => {
            dispatch(setCurrentDate({ year: currentYear + 1 }));
        };

        return [handlePrev, handleNext];
    }

    const handlePrev = () => {
        dispatch(setCurrentDate({ year: currentYear - 10 }));
    };

    const handleNext = () => {
        dispatch(setCurrentDate({ year: currentYear + 10 }));
    };

    return [handlePrev, handleNext];
};
