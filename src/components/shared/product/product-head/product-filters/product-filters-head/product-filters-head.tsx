import React, {FC, useContext} from 'react';

import CloseSm from '@/assets/vectors/Close.svg';
import Close from '@/assets/vectors/Close-L.svg';
import {typographyColor} from '@/constants/typography-config';
import DeviceTypeContext from '@/context/device-type-context';
import ScrollCarousel from '@/shared/scroll-carousel';
import Typography from '@/shared/typography';
import {Filter} from '@/types/main';

import * as S from './product-filters-head.styled';

type ProductFiltersHeadProp = {
  handleCloseDrawer: () => void;
  removeActiveColoringFilter: (filterId: number) => void;
  removeActiveSizingFilter: (filterId: number) => void;
  removeActiveTemplateFilter: (filterId: number) => void;
  activeSizingFilters: Filter[];
  activeTemplateFilters: Filter[];
  activeColoringFilters: Filter[];
};

const ProductFiltersHead: FC<ProductFiltersHeadProp> = ({
  handleCloseDrawer,
  activeSizingFilters,
  activeTemplateFilters,
  activeColoringFilters,
  removeActiveColoringFilter,
  removeActiveSizingFilter,
  removeActiveTemplateFilter,
}) => {
  const {deviceType} = useContext(DeviceTypeContext);

  return (
    <>
      <S.HeadWrap>
        <Typography>فیلتر</Typography>
        <S.HeadIcon as={Close} onClick={handleCloseDrawer} />
      </S.HeadWrap>
      {activeSizingFilters.length ||
      activeTemplateFilters.length ||
      activeColoringFilters.length ? (
        <S.HeadWrap>
          <ScrollCarousel deviceType={deviceType}>
            {activeSizingFilters.map(({id, title}) => (
              <S.HeadFilterTag key={id}>
                <Typography color={typographyColor.ON_SECONDARY}>
                  {title}
                </Typography>
                <S.Icon
                  as={CloseSm}
                  onClick={() => removeActiveSizingFilter(id)}
                />
              </S.HeadFilterTag>
            ))}
            {activeTemplateFilters.map(({id, title}) => (
              <S.HeadFilterTag key={id}>
                <Typography color={typographyColor.ON_SECONDARY}>
                  {title}
                </Typography>
                <S.Icon
                  as={CloseSm}
                  onClick={() => removeActiveTemplateFilter(id)}
                />
              </S.HeadFilterTag>
            ))}
            {activeColoringFilters.map(({id, title, color}) => (
              <S.HeadFilterTag key={id}>
                {color ? <S.Color /> : null}
                <Typography color={typographyColor.ON_SECONDARY}>
                  {title}
                </Typography>
                <S.Icon
                  as={CloseSm}
                  onClick={() => removeActiveColoringFilter(id)}
                />
              </S.HeadFilterTag>
            ))}
          </ScrollCarousel>
        </S.HeadWrap>
      ) : null}
    </>
  );
};

export default ProductFiltersHead;
