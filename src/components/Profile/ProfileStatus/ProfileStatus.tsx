import React, { ChangeEvent, useState } from 'react';

import styles from './style.module.scss';

type Props = {
  status: string | null;
};

export const ProfileStatus = ({ status }: Props) => {
  const [editedStatus, setEditedStatus] = useState<boolean>(false);
  const [value, setValue] = useState<string | null>(status);

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  const toggleEditedStatus = () => {
    setEditedStatus(!editedStatus);
  };
  return (
    <div className={styles['status']}>
      {editedStatus ? (
        <input
          autoFocus
          type="text"
          value={value || ''}
          onChange={changeValueHandler}
          onBlur={toggleEditedStatus}
        />
      ) : (
        <span onDoubleClick={toggleEditedStatus} className={styles['text']}>
          {value ? value : 'Статус не задан'}
        </span>
      )}
    </div>
  );
};
