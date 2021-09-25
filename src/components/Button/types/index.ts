import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react';

export type DefaultButtonPropsType = DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

export interface IButtonProps {
  addClass?: string;
  size?: 'full';
  onClick?: () => void;
  active?: boolean;
  variant?: 'navigation';
}
