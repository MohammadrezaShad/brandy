import React, {FC, ReactNode, useState} from 'react';

import Toman from '@/assets/vectors/Toman.svg';
import {buttonVariants} from '@/constants/button-config';
import {typographyVariant} from '@/constants/typography-config';
import IconProvider from '@/providers/icon-provider/icon-provider';
import Button from '@/shared/button';
import Tabs from '@/shared/tabs';
import Typography from '@/shared/typography';

import * as S from './profile-suggestions.styled';

interface ProfileSuggestionsProps {
  children?: ReactNode;
}

const ProfileSuggestions: FC<ProfileSuggestionsProps> = props => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  console.log('ProfileSuggestions');
  return (
    <S.Wrapper>
      <S.Tabs>
        <Tabs
          tabItems={[
            {id: 1, text: 'بازدید‌های اخیر'},
            {id: 2, text: 'New 2021'},
          ]}
          lightFontSize
          darkSelect
          selectedTabIndex={selectedTabIndex}
          handleTabChange={handleTabChange}
        />
      </S.Tabs>

      <S.Wrap>
        {Array.from({length: 8}, (_, i) => i + 1).map(id => (
          <S.ProductWrap key={id}>
            <S.Product>
              <S.Icon as={IconProvider} icon='wishlist' size='20px' />
            </S.Product>
            <Typography gutterTop={1} variant={typographyVariant.HEADLINE1}>
              {(567000).toLocaleString('de-DE')} <Toman />
            </Typography>
          </S.ProductWrap>
        ))}
      </S.Wrap>
      <S.ShowMore>
        <Button variant={buttonVariants.OUTLINE_DARK}>نمایش بیشتر</Button>
      </S.ShowMore>
    </S.Wrapper>
  );
};

export default ProfileSuggestions;
