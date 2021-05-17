import {ChangeEvent, FC, useRef} from 'react';

import Close from '@/assets/vectors/Close.svg';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';
import {Filter} from '@/types/main';

import * as S from './product-filters-section.styled';

type ProductFiltersSizingProps = {
  filters: Filter[];
  wrapId: string;
  handleChangeFilter: (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
};

const ProductFiltersSizing: FC<ProductFiltersSizingProps> = ({
  filters,
  handleChangeFilter,
  wrapId,
}) => {
  const ref = useRef<HTMLDivElement>();
  return (
    <S.Container>
      <S.Input type='checkbox' id={wrapId} />
      <S.Wrapper ref={ref}>
        {filters.map(({id, checked, title, color}) => (
          <S.Filter key={id}>
            <S.FilterInput
              type='checkbox'
              checked={checked}
              onChange={event => handleChangeFilter(id, event)}
            />
            <S.Block>
              {color ? <S.Color /> : null}
              <Typography
                color={
                  checked
                    ? typographyColor.ON_SECONDARY
                    : typographyColor.PRIMARY
                }
                variant={typographyVariant.SUBTITLE_XS_NORMAL}
              >
                {title}
              </Typography>
              <S.Icon as={Close} />
            </S.Block>
          </S.Filter>
        ))}
      </S.Wrapper>
      {ref.current?.scrollHeight > 76 ? (
        <S.Continue>
          <S.DotWrap htmlFor={wrapId}>
            <S.Dot />
            <S.Dot />
            <S.Dot />
          </S.DotWrap>
        </S.Continue>
      ) : null}
    </S.Container>
  );
};

export default ProductFiltersSizing;
