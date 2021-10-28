import React, { FC } from 'react';

import { IProfileInfoProps } from '../types';
import { Preloader } from '../../Preloader';
import silhouette from '../../../images/siluet.svg';

import styles from '../style.module.scss';

export const ProfileInfo: FC<IProfileInfoProps> = ({ profile }) => {
  return (
    <>
      {!profile ? (
        <Preloader />
      ) : (
        <div className={styles['profile__inner']}>
          <div className={styles['profile__wrap']}>
            <div className={styles['profile__avatar']}>
              <img
                src={profile?.photos.small ? profile?.photos.small : silhouette}
                alt={profile?.fullName}
              />
            </div>
            <div className={styles['profile__info']}>
              <p className={styles['profile__name']}>{profile.fullName}</p>
              <p className={styles['profile__status']}>{profile.aboutMe}</p>
              <div className={styles['profile__job']}>
                Job:
                <p>{profile.lookingForAJob ? 'В поисках работы' : 'Не ищу работу'}</p>
                <p>{profile.lookingForAJobDescription}</p>
              </div>
            </div>
            <ul className={styles['profile__links']}>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.github} className="profile__contact">
                  {profile.contacts.github}
                </a>
                {profile.contacts.github}
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.instagram} className="profile__contact">
                  {profile.contacts.instagram}
                </a>
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.vk} className="profile__contact">
                  {profile.contacts.vk}
                </a>
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.twitter} className="profile__contact">
                  {profile.contacts.twitter}
                </a>
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.facebook} className="profile__contact">
                  {profile.contacts.facebook}
                </a>
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.mainLink} className="profile__contact">
                  {profile.contacts.mainLink}
                </a>
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.youtube} className="profile__contact">
                  {profile.contacts.youtube}
                </a>
              </li>
              <li className={styles['profile__link']}>
                <a href={profile.contacts.website} className="profile__contact">
                  {profile.contacts.website}
                </a>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};
