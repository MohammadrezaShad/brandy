import {FC} from 'react';

import ArrowUp from '@/assets/vectors/F-Up.svg';
import Toman from '@/assets/vectors/Toman.svg';
import {
  typographyColor,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import RangeSlider from '@/shared/range-slider';
import Typography from '@/shared/typography';
import {FiltersProps} from '@/types/main';

import * as S from './product-filters.styled';
import ProductFiltersBottom from './product-filters-bottom';
import ProductFiltersHead from './product-filters-head';
import ProductFiltersSizing from './product-filters-section';

type ProductFiltersProp = {
  handleCloseDrawer: () => void;
  submitFilters: () => void;
} & FiltersProps;

const ProductFilters: FC<ProductFiltersProp> = ({
  handleCloseDrawer,
  sizingFilters,
  templateFilters,
  coloringFilters,
  minPrice,
  maxPrice,
  resetFilter,
  changeMaxPriceAction,
  changeMinPriceAction,
  handleChangeColoringFilter,
  handleChangeTemplateFilter,
  handleChangeSizingFilter,
  removeActiveColoringFilter,
  removeActiveSizingFilter,
  removeActiveTemplateFilter,
  getActiveFilters,
  renderActiveFiltersStatus,
  removeAllfilters,
  submitFilters,
}) => (
  <>
    <S.Head>
      <ProductFiltersHead
        activeSizingFilters={getActiveFilters(sizingFilters)}
        activeTemplateFilters={getActiveFilters(templateFilters)}
        activeColoringFilters={getActiveFilters(coloringFilters)}
        handleCloseDrawer={handleCloseDrawer}
        removeActiveColoringFilter={removeActiveColoringFilter}
        removeActiveSizingFilter={removeActiveSizingFilter}
        removeActiveTemplateFilter={removeActiveTemplateFilter}
      />
    </S.Head>
    <S.Content>
      <S.Wrap>
        <S.FiltersWrap>
          <S.Input type='checkbox' id='sizing-label' />
          <S.Block htmlFor='sizing-label'>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              سایزبندی
            </Typography>
            <S.BlockContent>
              <Typography
                variant={typographyVariant.SUBTITLE_XS_NORMAL}
                color={typographyColor.ON_PRIMARY}
                gutterLeft={1}
              >
                {renderActiveFiltersStatus(sizingFilters)}
              </Typography>
              <S.Icon as={ArrowUp} />
            </S.BlockContent>
          </S.Block>
          <S.FiltersContent>
            <ProductFiltersSizing
              handleChangeFilter={handleChangeSizingFilter}
              filters={sizingFilters}
              wrapId='sizing-filters'
            />
          </S.FiltersContent>
        </S.FiltersWrap>
        <S.FiltersWrap>
          <S.Input type='checkbox' id='coloring-label' />
          <S.Block htmlFor='coloring-label'>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              رنگ بندی
            </Typography>
            <S.BlockContent>
              <Typography
                variant={typographyVariant.SUBTITLE_XS_NORMAL}
                color={typographyColor.ON_PRIMARY}
                gutterLeft={1}
              >
                {renderActiveFiltersStatus(coloringFilters)}
              </Typography>
              <S.Icon as={ArrowUp} />
            </S.BlockContent>
          </S.Block>
          <S.FiltersContent>
            <ProductFiltersSizing
              handleChangeFilter={handleChangeColoringFilter}
              filters={coloringFilters}
              wrapId='coloring-filters'
            />
          </S.FiltersContent>
        </S.FiltersWrap>
        <S.FiltersWrap>
          <S.Input type='checkbox' id='template-label' />
          <S.Block htmlFor='template-label'>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              نوع الگو
            </Typography>
            <S.BlockContent>
              <Typography
                variant={typographyVariant.SUBTITLE_XS_NORMAL}
                color={typographyColor.ON_PRIMARY}
                gutterLeft={1}
              >
                {renderActiveFiltersStatus(templateFilters)}
              </Typography>
              <S.Icon as={ArrowUp} />
            </S.BlockContent>
          </S.Block>
          <S.FiltersContent>
            <ProductFiltersSizing
              handleChangeFilter={handleChangeTemplateFilter}
              filters={templateFilters}
              wrapId='template-filters'
            />
          </S.FiltersContent>
        </S.FiltersWrap>
        <S.FiltersWrap>
          <S.Input type='checkbox' id='range-label' />
          <S.Block htmlFor='range-label'>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              محدوده قیمت
            </Typography>
            <S.BlockContent>
              <S.Icon as={ArrowUp} />
            </S.BlockContent>
          </S.Block>
          <S.FiltersContent>
            <S.RangeWrap>
              <RangeSlider
                minValue={
                  <Typography
                    display={typographyDisplay.BLOCK}
                    variant={typographyVariant.HEADLINE1}
                  >
                    {minPrice.toLocaleString('de-DE')} <Toman />
                  </Typography>
                }
                maxValue={
                  <Typography
                    display={typographyDisplay.BLOCK}
                    variant={typographyVariant.HEADLINE1}
                  >
                    {maxPrice.toLocaleString('de-DE')} <Toman />
                  </Typography>
                }
                minValueCallback={changeMinPriceAction}
                maxValueCallback={changeMaxPriceAction}
                resetRange={resetFilter}
              />
            </S.RangeWrap>
          </S.FiltersContent>
        </S.FiltersWrap>
      </S.Wrap>
    </S.Content>
    <S.Bottom>
      <ProductFiltersBottom
        removeAllfilters={removeAllfilters}
        submitFilters={submitFilters}
      />
    </S.Bottom>
  </>
);

export default ProductFilters;
