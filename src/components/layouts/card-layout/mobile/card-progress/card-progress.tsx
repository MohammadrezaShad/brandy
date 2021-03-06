import {useRouter} from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {FC} from 'react';

import CardBag from '@/assets/vectors/CardBag.svg';
import Payment from '@/assets/vectors/Payment.svg';
import Send from '@/assets/vectors/Send.svg';
import Typography from '@/components/shared/typography';
import {typographyVariant} from '@/constants/typography-config';
import Paths from '@/utils/paths';

import * as S from './card-progress.styled';

const CardProgress: FC = () => {
  const {pathname} = useRouter();
  const {t} = useTranslation('common');
  return (
    <S.Wrapper>
      <S.Wrap>
        <S.Icon selected>
          <CardBag />
          <S.Text>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              {t('card')}
            </Typography>
          </S.Text>
        </S.Icon>
        <S.Line
          selected={
            pathname === Paths.card.info.getPath() ||
            pathname === Paths.card.payment.getPath()
          }
        />
        <S.Icon
          selected={
            pathname === Paths.card.info.getPath() ||
            pathname === Paths.card.payment.getPath()
          }
        >
          <Send />
          <S.Text>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              {t('sendInfo')}{' '}
            </Typography>
          </S.Text>
        </S.Icon>
        <S.Line selected={pathname === Paths.card.payment.getPath()} />
        <S.Icon selected={pathname === Paths.card.payment.getPath()}>
          <Payment />
          <S.Text>
            <Typography variant={typographyVariant.BODY_SM_MEDIUM}>
              {t('payment')}
            </Typography>
          </S.Text>
        </S.Icon>
      </S.Wrap>
      <S.Wrap />
    </S.Wrapper>
  );
};

export default CardProgress;
