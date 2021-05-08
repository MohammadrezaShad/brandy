import Appearance from '@/dialogs/product/appearance';
import { useAppearance } from '@/helpers/use-appearance';
import ProductHead from '@/shared/product/product-head';
import ProductList from '@/shared/product/product-list';

import CategoryBanner from './category-banner';
import CategoryFilters from './category-filters';
import * as S from './category-view.styled';

const CategoryView = () => {
  const {
    isAppearanceModalShow,
    appearanceMode,
    setAppearanceMode,
    handleCloseAppearanceModal,
    handleOpenAppearanceModal,
  } = useAppearance();
  return (
    <>
      <CategoryBanner />
      <ProductHead handleOpenAppearanceModal={handleOpenAppearanceModal} appearanceMode={appearanceMode} />
      <S.Filters>
        <CategoryFilters />
      </S.Filters>
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

export default CategoryView;
