import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';
import ProductSurvey from '@/shared/product/product-survey';
import StarRating from '@/shared/star-rating';
import Typography from '@/shared/typography';

import * as S from './product-detail.styled';

const ProductDetail = () => (
  <S.Wrapper>
    <S.Block>
      <S.Wrap>
        <S.ImageWrap>
          <S.Image src='/images/res/Image.png' alt='test' />
        </S.ImageWrap>
      </S.Wrap>
      <S.Content>
        <S.Container>
          <S.TextWrap>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              کفش دخترانه اسپرت برند نایک
            </Typography>
            <Typography
              color={typographyColor.ON_PRIMARY}
              variant={typographyVariant.BODY_SM_MEDIUM}
            >
              کد محصول : KL00768
            </Typography>
          </S.TextWrap>
          <S.Icon as={IconProvider} icon='wishlist' size='20px' />
        </S.Container>
        <S.Container>
          <S.Tag>
            <S.TagImage src='/images/res/Brand.png' alt='test' />
          </S.Tag>
          <S.Rate>
            <StarRating rate={4.5} />
            <Typography variant={typographyVariant.HEADLINE1} gutterRight={1}>
              4.5
            </Typography>
          </S.Rate>
        </S.Container>
      </S.Content>
    </S.Block>
    <S.Block>
      <S.Survey>
        <ProductSurvey />
      </S.Survey>
    </S.Block>
  </S.Wrapper>
);

export default ProductDetail;
