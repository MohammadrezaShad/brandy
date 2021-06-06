import {UseFilters} from '@/helpers/use-filters';
import ProductHead from '@/shared/product/product-head';
import ProductList from '@/shared/product/product-list';

import CategoryBanner from './category-banner';
import CategoryFilters from './category-filters';
import * as S from './category-view.styled';

const CategoryView = () => {
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
  } = UseFilters(2000, 5000);

  const submitFilters = () => {
    console.log('submitFilter');
  };

  return (
    <>
      <CategoryBanner />
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
      <S.Filters>
        <CategoryFilters />
      </S.Filters>
      <S.ProductWrap>
        <ProductList />
      </S.ProductWrap>
    </>
  );
};

export default CategoryView;
