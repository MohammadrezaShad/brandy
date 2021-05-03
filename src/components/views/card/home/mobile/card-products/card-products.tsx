import useTranslation from 'next-translate/useTranslation';
import { FC } from 'react';

import Delete from '@/assets/vectors/Delete.svg';
import Minus from '@/assets/vectors/Minus.svg';
import Plus from '@/assets/vectors/Plus.svg';
import Typography from '@/components/shared/typography';
import { typographyColor, typographyDisplay, typographyVariant } from '@/constants/typography-config';

import * as S from './card-products.styled';

const CardProducts: FC = () => {
  const { t } = useTranslation('common');
  return (
    <>
      {Array.from({ length: 2 }, (_, i) => i + 1).map((id) => (
        <S.Wrapper key={id}>
          <S.TopContent>
            <S.ImgWrap>
              <S.Img src="/images/res/Kid.png" alt="test" />
            </S.ImgWrap>
            <S.Content>
              <S.HeadWrap>
                <Typography display={typographyDisplay.BLOCK} gutterLeft={1}>
                  ست کت و شلوار مارک رومانـسون
                </Typography>
                <S.CloseIcon as={Delete} />
              </S.HeadWrap>
              <Typography
                color={typographyColor.PRIMARY}
                variant={typographyVariant.BODY_MD_NORMAL}
                display={typographyDisplay.BLOCK}
              >
                {t('productId')} : 84857898
              </Typography>
              <S.DetailWrap>
                <S.Color />
                <Typography color={typographyColor.PRIMARY} gutterLeft={1}>
                  {t('color')} : صورتی
                </Typography>
                <S.Separator />
                <Typography color={typographyColor.PRIMARY} gutterRight={1}>
                  سایز M
                </Typography>
              </S.DetailWrap>
              <S.PriceWrap>
                <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} gutterLeft={1}>
                  {t('unitPrice')}
                </Typography>
                <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>
                  {(5390000).toLocaleString('de-DE')} {t('currency')}
                </Typography>
              </S.PriceWrap>
              <S.PriceWrap>
                <Typography
                  color={typographyColor.ON_ERROR}
                  gutterLeft={1}
                  variant={typographyVariant.SUBTITLE_XS_NORMAL}
                >
                  {t('discount')}
                </Typography>
                <Typography color={typographyColor.ON_ERROR} variant={typographyVariant.SUBTITLE_XS_NORMAL}>
                  {(5390000).toLocaleString('de-DE')} {t('currency')}
                </Typography>
              </S.PriceWrap>
            </S.Content>
          </S.TopContent>
          <S.BottomContent>
            <S.QuantityWrap>
              <S.QuantityIcon>
                <Minus />
              </S.QuantityIcon>
              <Typography variant={typographyVariant.HEADLINE1} gutterLeft={2} gutterRight={2}>
                3
              </Typography>
              <S.QuantityIcon>
                <Plus />
              </S.QuantityIcon>
            </S.QuantityWrap>
            <S.FinalPrice>
              <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL} gutterLeft={1}>
                {t('totalPrice')}
              </Typography>
              <Typography variant={typographyVariant.SUBTITLE_XS_NORMAL}>
                {(5390000).toLocaleString('de-DE')} {t('currency')}
              </Typography>
            </S.FinalPrice>
          </S.BottomContent>
        </S.Wrapper>
      ))}
    </>
  );
};

export default CardProducts;
