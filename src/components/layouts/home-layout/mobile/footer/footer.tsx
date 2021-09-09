import React, {FC, ReactNode} from 'react';

import Brand from '@/assets/vectors/brand_icon.svg';
import Category from '@/assets/vectors/category_icon.svg';
import New2021 from '@/assets/vectors/new_2021_icon.svg';
import Profile from '@/assets/vectors/profile_icon.svg';
import ShopBag from '@/assets/vectors/shop_icon.svg';

import * as S from './footer.styled';

type FooterProps = {
  children?: ReactNode;
};

const Footer: FC<FooterProps> = () => (
  <S.Footer>
    <S.List>
      <S.Item selected>
        <S.Icon as={Profile} selected />
      </S.Item>
      <S.Item>
        <S.Icon as={New2021} />
      </S.Item>
      <S.Item>
        <S.Icon as={ShopBag} />
      </S.Item>
      <S.Item>
        <S.Icon as={Brand} />
      </S.Item>
      <S.Item>
        <S.Icon as={Category} />
      </S.Item>
    </S.List>
  </S.Footer>
);

export default Footer;
