import React, {FC, ReactNode, useState} from 'react';

import {typographyVariant} from '@/constants/typography-config';
import Tabs from '@/shared/tabs';
import Typography from '@/shared/typography';

import * as S from './home-top.styled';

type HomeTopProps = {
  children?: ReactNode;
};

const HomeTop: FC<HomeTopProps> = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  return (
    <div>
      <S.TabsWrap>
        <Tabs
          tabItems={[
            {id: 1, text: 'مردانه'},
            {id: 2, text: 'زنـانه'},
            {id: 3, text: 'کودکانه'},
            {id: 4, text: 'کفش'},
            {id: 5, text: 'جدید'},
          ]}
          lightFontSize
          darkSelect
          selectedTabIndex={selectedTabIndex}
          handleTabChange={handleTabChange}
        />
      </S.TabsWrap>
      <S.BannerWrap />
      <S.ImageWrap />
      <S.Tags>
        {Array.from({length: 3}, (_, i) => i + 1).map(id => (
          <S.TagsWrap key={id}>
            <S.Tag />
            <Typography gutterTop={1}>متن ورودی</Typography>
          </S.TagsWrap>
        ))}
      </S.Tags>
      <S.Titles>
        <Typography variant={typographyVariant.HEADLINE1} gutterLeft={6}>
          عناوین
        </Typography>
        <S.TitleWrap>
          <S.TagsWrap>
            <S.Tag />
            <Typography gutterTop={1}>متن ورودی</Typography>
          </S.TagsWrap>
          <S.TagsWrap>
            <S.Tag />
            <Typography gutterTop={1}>متن ورودی</Typography>
          </S.TagsWrap>
        </S.TitleWrap>
      </S.Titles>
    </div>
  );
};

export default HomeTop;
