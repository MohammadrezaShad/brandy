import useTranslation from 'next-translate/useTranslation';
import { Dispatch, FC, SetStateAction } from 'react';

import { CorePackValues } from '@/constants/core-pack-values';
import { typographyAlign, typographyColor, typographyDisplay, typographyVariant } from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './card-pack.styled';

type CardPackProps = {
  selectedPackId: CorePackValues;
  setSelectedPackId: Dispatch<SetStateAction<CorePackValues>>;
};

const CardPack: FC<CardPackProps> = ({ selectedPackId, setSelectedPackId }) => {
  const { t } = useTranslation('common');
  return (
    <>
      <Typography gutterBottom={2} display={typographyDisplay.BLOCK} variant={typographyVariant.BODY_MD_MEDIUM}>
        {t('pack')}
      </Typography>
      <S.Wrapper>
        <S.Container>
          <S.Wrap>
            <S.Block
              onClick={() => setSelectedPackId(CorePackValues.REGULAR)}
              selected={selectedPackId === CorePackValues.REGULAR}
            >
              <S.Image src="/images/res/VipPack.jpg" alt="RegularPack" />
            </S.Block>
            <Typography
              color={selectedPackId === CorePackValues.REGULAR ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
              gutterTop={2}
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
            >
              {t('regularPack')}
            </Typography>
          </S.Wrap>
          <S.Wrap>
            <S.Block
              onClick={() => setSelectedPackId(CorePackValues.GOLD)}
              selected={selectedPackId === CorePackValues.GOLD}
            >
              <S.Image src="/images/res/VipPack.jpg" alt="GoldPack" />
            </S.Block>
            <Typography
              color={selectedPackId === CorePackValues.GOLD ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
              gutterTop={2}
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
            >
              {t('goldPack')}
            </Typography>
          </S.Wrap>
          <S.Wrap>
            <S.Block
              onClick={() => setSelectedPackId(CorePackValues.VIP)}
              selected={selectedPackId === CorePackValues.VIP}
            >
              <S.Image src="/images/res/VipPack.jpg" alt="VipPack" />
            </S.Block>
            <Typography
              color={selectedPackId === CorePackValues.VIP ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
              gutterTop={2}
              display={typographyDisplay.BLOCK}
              align={typographyAlign.CENTER}
            >
              {t('vipPack')}
            </Typography>
          </S.Wrap>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default CardPack;
