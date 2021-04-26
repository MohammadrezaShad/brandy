import PropTypes from 'prop-types';
import React from 'react';

import Typography from '@/components/shared/typography';
import { typographyColor, typographyVariant } from '@/constants/typography-config';

import * as S from './tabs.styled';

const Tabs = ({
  tabItems = [
    { id: 1, text: 'مشخصات' },
    { id: 2, text: 'ویژگی' },
  ],
  handleTabChange,
  selectedTabIndex = 0,
  spaceAround,
}) => (
  <S.Wrapper $spaceAround={spaceAround}>
    {tabItems.map((tabItem, index) => (
      <S.Item
        onClick={() => handleTabChange && handleTabChange(index)}
        key={tabItem.id}
        selected={selectedTabIndex === index}
      >
        <Typography
          variant={typographyVariant.HEADLINE1}
          color={selectedTabIndex === index ? typographyColor.ON_SUCCESS : typographyColor.PRIMARY}
        >
          {tabItem.text}
        </Typography>
      </S.Item>
    ))}
  </S.Wrapper>
);

export default React.memo(Tabs);

Tabs.propTypes = {
  handleTabChange: PropTypes.func,
  tabItems: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
    }),
  ).isRequired,
};
