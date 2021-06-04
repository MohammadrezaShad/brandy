/* eslint-disable no-nested-ternary */
/* eslint-disable no-unused-vars */
import {FC, memo} from 'react';

import Typography from '@/components/shared/typography';
import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';

import * as S from './tabs.styled';

type TabItems = {
  id: number;
  text: string;
};

type TabsProps = {
  selectedTabIndex: number;
  spaceAround?: boolean;
  border?: boolean;
  handleTabChange: (index: number) => void;
  tabItems: TabItems[];
  lightFontSize?: boolean;
  darkSelect?: boolean;
};

const Tabs: FC<TabsProps> = ({
  tabItems = [
    {id: 1, text: 'مشخصات'},
    {id: 2, text: 'ویژگی'},
  ],
  handleTabChange,
  selectedTabIndex = 0,
  spaceAround,
  border = true,
  lightFontSize,
  darkSelect,
}) => (
  <S.Wrapper $spaceAround={spaceAround} $border={border}>
    {tabItems.map((tabItem: TabItems, index: number) => (
      <S.Item
        onClick={() => handleTabChange && handleTabChange(index)}
        key={tabItem.id}
        selected={selectedTabIndex === index}
        darkSelect={darkSelect}
      >
        <Typography
          variant={
            lightFontSize
              ? typographyVariant.SUBTITLE_MD_NORMAL
              : typographyVariant.HEADLINE1
          }
          color={
            selectedTabIndex === index && darkSelect
              ? typographyColor.ON_SURFACE
              : selectedTabIndex === index
              ? typographyColor.ON_SUCCESS
              : typographyColor.PRIMARY
          }
        >
          {tabItem.text}
        </Typography>
      </S.Item>
    ))}
  </S.Wrapper>
);

export default memo(Tabs);
