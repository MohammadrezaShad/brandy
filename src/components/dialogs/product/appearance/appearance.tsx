import { Dispatch, FC, SetStateAction } from 'react';

import ViewOne from '@/assets/vectors/view_1_fill.svg';
import ViewTwo from '@/assets/vectors/view_2_fill.svg';
import ViewThree from '@/assets/vectors/view_3_fill.svg';
import { AppearanceModes } from '@/constants/appearance-modes';
import Dialog from '@/shared/dialog';
import { ValueOf } from '@/types/main';

import * as S from './appearance.styled';

type AppearanceProps = {
  open: boolean;
  onClose: () => void;
  appearanceMode: ValueOf<typeof AppearanceModes>;
  setAppearanceMode: Dispatch<SetStateAction<AppearanceModes>>;
};

const Appearance: FC<AppearanceProps> = ({ open, onClose, appearanceMode, setAppearanceMode }) => {
  console.log(appearanceMode);
  return (
    <Dialog open={open} onClose={onClose}>
      <S.Wrapper>
        <S.IconWrap onClick={() => setAppearanceMode(AppearanceModes.VIEW_ONE)}>
          <S.Icon as={ViewOne} />
          <S.Point selected={appearanceMode === AppearanceModes.VIEW_ONE} />
        </S.IconWrap>
        <S.IconWrap onClick={() => setAppearanceMode(AppearanceModes.VIEW_TWO)}>
          <S.Icon as={ViewTwo} />
          <S.Point selected={appearanceMode === AppearanceModes.VIEW_TWO} />
        </S.IconWrap>
        <S.IconWrap onClick={() => setAppearanceMode(AppearanceModes.VIEW_THREE)}>
          <S.Icon as={ViewThree} />
          <S.Point selected={appearanceMode === AppearanceModes.VIEW_THREE} />
        </S.IconWrap>
      </S.Wrapper>
    </Dialog>
  );
};

export default Appearance;
