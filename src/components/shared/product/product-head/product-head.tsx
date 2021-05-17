import {FC, useState} from 'react';

import Filter from '@/assets/vectors/Filter.svg';
import New from '@/assets/vectors/New.svg';
import ViewOne from '@/assets/vectors/view_1.svg';
import ViewTwo from '@/assets/vectors/view_2.svg';
import ViewThree from '@/assets/vectors/view_3.svg';
import {AppearanceModes} from '@/constants/appearance-modes';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Appearance from '@/dialogs/product/appearance';
import {useAppearance} from '@/helpers/use-appearance';
import Drawer from '@/shared/drawer';
import Typography from '@/shared/typography';
import {FiltersProps} from '@/types/main';

import ProductFilters from './product-filters';
import * as S from './product-head.styled';

type ProductHeadProps = {
  submitFilters: () => void;
} & FiltersProps;

const ProductHead: FC<ProductHeadProps> = ({
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
}) => {
  const [openDrawer, setOpenDrawer] = useState(false);
  const {
    isAppearanceModalShow,
    appearanceMode,
    setAppearanceMode,
    handleCloseAppearanceModal,
    handleOpenAppearanceModal,
  } = useAppearance();

  const handleCloseDrawer = () => {
    setOpenDrawer(false);
  };

  const handleOpenDrawer = () => {
    setOpenDrawer(true);
  };

  const renderAppearanceIcon = () => {
    if (appearanceMode === AppearanceModes.VIEW_ONE) {
      return ViewOne;
    }
    if (appearanceMode === AppearanceModes.VIEW_TWO) {
      return ViewTwo;
    }
    return ViewThree;
  };

  return (
    <S.Wrapper>
      <S.Block onClick={handleOpenDrawer}>
        <S.Icon as={Filter} />
        <Typography
          nowWrap
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
          color={typographyColor.ON_PRIMARY}
        >
          فـیلترها
        </Typography>
      </S.Block>
      <S.Block>
        <S.Icon as={New} />
        <Typography
          nowWrap
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
          color={typographyColor.ON_PRIMARY}
        >
          جدیدترین
        </Typography>
      </S.Block>
      <S.Block onClick={handleOpenAppearanceModal}>
        <S.Icon as={renderAppearanceIcon()} />
        <Typography
          nowWrap
          variant={typographyVariant.SUBTITLE_XS_NORMAL}
          color={typographyColor.ON_PRIMARY}
        >
          {appearanceMode}
        </Typography>
      </S.Block>
      <Appearance
        open={isAppearanceModalShow}
        onClose={handleCloseAppearanceModal}
        appearanceMode={appearanceMode}
        setAppearanceMode={setAppearanceMode}
      />
      <Drawer openDrawer={openDrawer} handleCloseDrawer={handleCloseDrawer}>
        <ProductFilters
          handleCloseDrawer={handleCloseDrawer}
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
      </Drawer>
    </S.Wrapper>
  );
};

export default ProductHead;
