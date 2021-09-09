import {useState} from 'react';

import ReviewHead from './review-head';
import ReviewList from './review-list';
import ReviewProducts from './review-products';
import * as S from './review-view.styled';

const ReviewView = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  const [value, setvalue] = useState('');
  return (
    <S.Wrap>
      <ReviewHead
        handleTabChange={handleTabChange}
        selectedTabIndex={selectedTabIndex}
      />

      <S.Block>
        {selectedTabIndex === 1 && <ReviewList />}
        {selectedTabIndex === 0 && <ReviewProducts />}
      </S.Block>
    </S.Wrap>
  );
};

export default ReviewView;
