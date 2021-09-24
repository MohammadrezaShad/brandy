import React, {FC, ReactNode, useState} from 'react';

import Minus from '@/assets/vectors/Minus.svg';
import Plus from '@/assets/vectors/Plus.svg';
import WalletIcon from '@/assets/vectors/WalletIcon.svg';
import {
  typographyAlign,
  typographyColor,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import Button from '@/shared/button';
import Typography from '@/shared/typography';

import * as S from './wallet-content.styled';

interface WalletContentProps {
  children?: ReactNode;
}

const WalletContent: FC<WalletContentProps> = ({children}) => {
  const [price, setPrice] = useState(0);
  const PRICE_COUNT = 10000;
  const priceInc = () => {
    setPrice(prevPrice => prevPrice + PRICE_COUNT);
  };
  const priceDec = () => {
    if (price <= 0) return;
    setPrice(prevPrice => prevPrice - PRICE_COUNT);
  };
  return (
    <>
      <S.Head>
        <S.Price>
          <Typography>موجودی فعلی</Typography>
          <Typography
            gutterTop={1}
            color={typographyColor.ERROR}
            variant={typographyVariant.HEADLINE1}
          >
            1.250.000 تومان
          </Typography>
        </S.Price>
        <WalletIcon />
      </S.Head>
      <Typography
        gutterTop={5}
        gutterBottom={3}
        color={typographyColor.ON_PRIMARY}
        display={typographyDisplay.BLOCK}
        align={typographyAlign.CENTER}
      >
        افزایش موجودی به شماره 09168518065 هستید
      </Typography>
      <S.Input>
        <S.Icon onClick={priceDec}>
          <Minus />
        </S.Icon>
        <Typography>{price.toLocaleString('de-DE')}</Typography>
        <S.Icon onClick={priceInc}>
          <Plus />
        </S.Icon>
      </S.Input>
      <Typography
        gutterTop={2}
        display={typographyDisplay.BLOCK}
        align={typographyAlign.CENTER}
      >
        مبلغ وارد شده باید بین 10.000 تا 10.000.000 تومان باشد
      </Typography>
      <S.ButtonWrap>
        <Button>افزایش موجـودی</Button>
      </S.ButtonWrap>
    </>
  );
};

export default WalletContent;
