import { useState } from 'react';

import { AppearanceModes } from '@/constants/appearance-modes';
import Appearance from '@/dialogs/product/appearance';

import BrandBanner from './brand-banner';
import BrandCategory from './brand-category';
import BrandHead from './brand-head';
import BrandProduct from './brand-product';
import * as S from './brand-view.styled';

const BrandView = () => {
  const [isAppearanceModalShow, setIsAppearanceModalShow] = useState(false);
  const [appearanceMode, setAppearanceMode] = useState(AppearanceModes.VIEW_TWO);

  const handleCloseAppearanceModal = () => {
    setIsAppearanceModalShow(false);
  };
  const handleOpenAppearanceModal = () => {
    setIsAppearanceModalShow(true);
  };
  return (
    <>
      <BrandBanner />
      <S.HeadWrap onClick={handleOpenAppearanceModal}>
        <BrandHead appearanceMode={appearanceMode} />
      </S.HeadWrap>
      <S.Wrap>
        <BrandCategory />
      </S.Wrap>
      <S.ProductWrap>
        <BrandProduct />
      </S.ProductWrap>
      <Appearance
        open={isAppearanceModalShow}
        onClose={handleCloseAppearanceModal}
        appearanceMode={appearanceMode}
        setAppearanceMode={setAppearanceMode}
      />
    </>
  );
};

export default BrandView;
