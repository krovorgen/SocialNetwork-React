import React, { ChangeEvent, useEffect, useState } from 'react';

import styles from './style.module.scss';
import { useSelector } from 'react-redux';
import { RootStateType } from '../../../redux/store.type';
import { Input } from '@alfalab/core-components/input';

type Props = {
  updateUserStatus: (status: string) => void;
};

export const ProfileStatus = ({ updateUserStatus }: Props) => {
  const status: string = useSelector((state: RootStateType) => state.profilePage.status);
  const [value, setValue] = useState<string | null>(status);
  const [editedStatus, setEditedStatus] = useState<boolean>(false);

  const changeValueHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };

  const toggleEditedStatus = () => {
    if (editedStatus && value) {
      updateUserStatus(value);
    }
    setEditedStatus(!editedStatus);
  };

  useEffect(() => {
    setValue(status);
  }, [status]);

  return (
    <div className={styles['status']}>
      {editedStatus ? (
        <Input
          size="s"
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
