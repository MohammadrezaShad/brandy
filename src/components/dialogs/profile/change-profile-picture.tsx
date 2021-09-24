import {useRouter} from 'next/router';
import React, {FC, useState} from 'react';

import Close from '@/assets/vectors/Close.svg';
import {buttonColors, buttonSizes} from '@/constants/button-config';
import {typographyAlign, typographyColor} from '@/constants/typography-config';
import Button from '@/shared/button';
import Dialog from '@/shared/dialog';
import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';

import * as S from './change-profile-picture.styled';

type ChangeProfilePictureProps = {
  open: boolean;
  onClose: () => void;
};

const ChangeProfilePicture: FC<ChangeProfilePictureProps> = ({
  open,
  onClose,
}) => {
  const [profilePictureId, setProfilePictureId] = useState(1);
  const onProfilePictureClick = (id: number) => {
    setProfilePictureId(id);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Head>
          <Typography gutterLeft={2}>تصویر پروفایل </Typography>
          <S.HeadIcon as={Close} onClick={onClose} />
        </S.Head>
        <S.Content>
          <ScrollCarousel>
            <S.Part
              $isSelected={profilePictureId === 1}
              onClick={() => onProfilePictureClick(1)}
            >
              <S.Image src='/images/res/Kid.png' alt='test' />
            </S.Part>
            <S.Part
              $isSelected={profilePictureId === 2}
              onClick={() => onProfilePictureClick(2)}
            >
              <S.Image src='/images/res/Kid.png' alt='test' />
            </S.Part>
            <S.Part
              $isSelected={profilePictureId === 3}
              onClick={() => onProfilePictureClick(3)}
            >
              <S.Image src='/images/res/Kid.png' alt='test' />
            </S.Part>
            <S.Part
              $isSelected={profilePictureId === 4}
              onClick={() => onProfilePictureClick(4)}
            >
              <S.Image src='/images/res/Kid.png' alt='test' />
            </S.Part>
            <S.Part
              $isSelected={profilePictureId === 5}
              onClick={() => onProfilePictureClick(5)}
            >
              <S.Image src='/images/res/Kid.png' alt='test' />
            </S.Part>
          </ScrollCarousel>
        </S.Content>
        <S.Bottom>
          <S.ButtonWrap>
            <Button
              size={buttonSizes.MEDIUM}
              matchParent
              color={buttonColors.STROKE}
              onClick={onClose}
            >
              انصراف
            </Button>
          </S.ButtonWrap>
          <S.ButtonWrap>
            <Button onClick={onClose} size={buttonSizes.MEDIUM} matchParent>
              تایید
            </Button>
          </S.ButtonWrap>
        </S.Bottom>
      </S.Wrapper>
    </Dialog>
  );
};

export default ChangeProfilePicture;
