import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';

import styles from './styles.module.scss';
import cn from 'classnames';

type DefaultTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface ITextAreaProps {
  addClass?: string;
}

export const Textarea: FC<ITextAreaProps & DefaultTextAreaProps> = ({ addClass, ...props }) => {
  return <textarea className={cn(styles['textarea'], addClass)} {...props} />;
};
