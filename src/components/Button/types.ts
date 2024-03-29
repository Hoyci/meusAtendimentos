import { ButtonHTMLAttributes } from 'react';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  outlined?: boolean;
  maxWidth?: string;
  isLoading?: boolean;
}
