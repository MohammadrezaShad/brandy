import React, {FC, ReactNode} from 'react';

import {typographyColor} from '@/constants/typography-config';
import Typography from '@/shared/typography';

import * as S from './wallet-log.styled';

interface WalletLogProps {
  children?: ReactNode;
}

const WalletLog: FC<WalletLogProps> = ({children}) => {
  console.log('WalletLog');
  return (
    <S.Wrap>
      <Typography gutterBottom={4}>تاریخچه تراکنش‌ها</Typography>
      <S.Item>
        <S.Head>
          <Typography>واریـز</Typography>
          <S.Block>
            <Typography gutterLeft={1} color={typographyColor.SUCCESS}>
              120.000
            </Typography>
            <Typography>تومان</Typography>
          </S.Block>
        </S.Head>
        <S.Bottom>
          <Typography color={typographyColor.PRIMARY}>
            موجودی‌: 4.000.000 تومان
          </Typography>
          <Typography color={typographyColor.PRIMARY}>
            1400/05/16 - 14:16
          </Typography>
        </S.Bottom>
      </S.Item>
      <S.Item>
        <S.Head>
          <Typography>واریـز</Typography>
          <S.Block>
            <Typography gutterLeft={1} color={typographyColor.SUCCESS}>
              120.000
            </Typography>
            <Typography>تومان</Typography>
          </S.Block>
        </S.Head>
        <S.Bottom>
          <Typography color={typographyColor.PRIMARY}>
            موجودی‌: 4.000.000 تومان
          </Typography>
          <Typography color={typographyColor.PRIMARY}>
            1400/05/16 - 14:16
          </Typography>
        </S.Bottom>
      </S.Item>
    </S.Wrap>
  );
};

export default WalletLog;
