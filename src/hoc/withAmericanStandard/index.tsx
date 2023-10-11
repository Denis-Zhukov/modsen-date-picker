import React from 'react';

import { Props as CalendarProps } from '@/components/Calendar';

export const withAmericanStandard = <T extends CalendarProps>(Component: React.ComponentType<T>) => (props: T) => <Component {...(props as T)} americanStandard />;
