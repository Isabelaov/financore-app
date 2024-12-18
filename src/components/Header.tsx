import React from 'react';
import { LogoutButton } from './LogoutButton';
import { ProfileButton } from './ProfileButton';

export const HeaderLeft = () => {
  return (
    <>
      <LogoutButton />
    </>
  );
};

export const HeaderRight = () => {
  return (
    <>
      <ProfileButton />
    </>
  );
};
