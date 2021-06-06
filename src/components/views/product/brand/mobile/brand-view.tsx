import {UseFilters} from '@/helpers/use-filters';
import ProductHead from '@/shared/product/product-head';
import ProductList from '@/shared/product/product-list';

import BrandBanner from './brand-banner';
import BrandCategory from './brand-category';
import * as S from './brand-view.styled';

const BrandView = () => {
  const {
    sizingFilters,
    templateFilters,
    coloringFilters,
    minPrice,
    maxPrice,
    resetFilter,
    handleChangeSizingFilter,
    handleChangeTemplateFilter,
    handleChangeColoringFilter,
    renderActiveFiltersStatus,
    removeActiveColoringFilter,
    removeActiveSizingFilter,
    removeActiveTemplateFilter,
    getActiveFilters,
    changeMinPriceAction,
    changeMaxPriceAction,
    removeAllfilters,
  } = UseFilters(2000, 50000);

  const submitFilters = () => {
    console.log('submitFilter');
  };

  return (
    <>
      <BrandBanner />
      <S.HeadWrap>
        <ProductHead
          sizingFilters={sizingFilters}
          templateFilters={templateFilters}
          coloringFilters={coloringFilters}
          minPrice={minPrice}
          maxPrice={maxPrice}
          resetFilter={resetFilter}
          handleChangeSizingFilter={handleChangeSizingFilter}
          handleChangeTemplateFilter={handleChangeTemplateFilter}
          handleChangeColoringFilter={handleChangeColoringFilter}
          renderActiveFiltersStatus={renderActiveFiltersStatus}
          removeActiveColoringFilter={removeActiveColoringFilter}
          removeActiveSizingFilter={removeActiveSizingFilter}
          removeActiveTemplateFilter={removeActiveTemplateFilter}
          getActiveFilters={getActiveFilters}
          changeMinPriceAction={changeMinPriceAction}
          changeMaxPriceAction={changeMaxPriceAction}
          removeAllfilters={removeAllfilters}
          submitFilters={submitFilters}
        />
      </S.HeadWrap>
      <S.Wrap>
        <BrandCategory />
      </S.Wrap>
      <S.ProductWrap>
        <ProductList />
      </S.ProductWrap>
    </>
  );
};

export default BrandView;
