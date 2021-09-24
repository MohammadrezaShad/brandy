import React, {FC, ReactNode, useState} from 'react';

import Alarm from '@/assets/vectors/Btn Alarm.svg';
import Setting from '@/assets/vectors/Btn Setting.svg';
import Camera from '@/assets/vectors/Camera.svg';
import Profile from '@/assets/vectors/Profile.svg';
import ChangeProfilePicture from '@/components/dialogs/profile';
import Typography from '@/components/shared/typography';
import {
  typographyAlign,
  typographyColor,
  typographyDisplay,
} from '@/constants/typography-config';

import * as S from './profile-head.styled';

interface ProfileHeadProps {
  children?: ReactNode;
}

const ProfileHead: FC<ProfileHeadProps> = props => {
  const [isOpen, setIsOpen] = useState(false);
  const onClose = () => {
    setIsOpen(false);
  };
  const onOpen = () => {
    setIsOpen(true);
  };
  console.log('ProfileHeadProps');
  return (
    <S.Wrap>
      <S.Block>
        <Setting />
        <S.Profile onClick={onOpen}>
          <Profile />
          <S.Camera as={Camera} />
        </S.Profile>
        <ChangeProfilePicture open={isOpen} onClose={onClose} />
        <Alarm />
      </S.Block>
      <Typography
        gutterTop={2}
        display={typographyDisplay.BLOCK}
        align={typographyAlign.CENTER}
      >
        علـی اصـغر داوودی
      </Typography>
      <Typography
        gutterTop={1}
        display={typographyDisplay.BLOCK}
        color={typographyColor.ON_PRIMARY}
        align={typographyAlign.CENTER}
      >
        0916 851 8065
      </Typography>
    </S.Wrap>
  );
};

export default ProfileHead;
