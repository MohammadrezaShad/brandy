import Appearance from '@/dialogs/product/appearance';
import { useAppearance } from '@/helpers/use-appearance';
import ProductHead from '@/shared/product/product-head';
import ProductList from '@/shared/product/product-list';

import BrandBanner from './brand-banner';
import BrandCategory from './brand-category';
import * as S from './brand-view.styled';

const BrandView = () => {
  const {
    isAppearanceModalShow,
    appearanceMode,
    setAppearanceMode,
    handleCloseAppearanceModal,
    handleOpenAppearanceModal,
  } = useAppearance();

  return (
    <>
      <BrandBanner />
      <S.HeadWrap>
        <ProductHead handleOpenAppearanceModal={handleOpenAppearanceModal} appearanceMode={appearanceMode} />
      </S.HeadWrap>
      <S.Wrap>
        <BrandCategory />
      </S.Wrap>
      <S.ProductWrap>
        <ProductList />
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
