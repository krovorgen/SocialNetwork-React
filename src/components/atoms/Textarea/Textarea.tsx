import React, { DetailedHTMLProps, FC, TextareaHTMLAttributes } from 'react';
import cn from 'classnames';

import styles from './styles.module.scss';

type DefaultTextAreaProps = DetailedHTMLProps<TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement>;

interface ITextAreaProps {
  error?: string;
  addClass?: string;
}

export const Textarea: FC<ITextAreaProps & DefaultTextAreaProps> = ({ addClass, error, ...props }) => {
  return (
    <div className={styles.root}>
      <textarea className={cn(styles.textarea, addClass, { [styles.error]: error })} {...props} />
      {error ? <p className={styles.error}>{error}</p> : null}
    </div>
  );
};
