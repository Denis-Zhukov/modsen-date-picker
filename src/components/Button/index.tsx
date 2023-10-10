import React, { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

import { StyledButton } from '@/components/Button/styled';

export const Button = ({
    children,
    ...props
}: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
>) => <StyledButton {...props}>{children}</StyledButton>;
