import useTranslation from 'next-translate/useTranslation';
import {useState} from 'react';

import Tabs from '@/components/shared/tabs';
import ProductItem from '@/shared/product/product-item';

import * as S from './produt-suggested.styled';

const ProdutSuggested = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const {t} = useTranslation('common');

  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };

  return (
    <>
      <Tabs
        spaceAround
        tabItems={[
          {id: 1, text: t('similarProducts')},
          {id: 2, text: t('newProduct')},
        ]}
        selectedTabIndex={selectedTabIndex}
        handleTabChange={handleTabChange}
      />
      <S.Content>
        <S.Item>
          <ProductItem />
        </S.Item>
        <S.Item>
          <ProductItem />
        </S.Item>
        <S.Item>
          <ProductItem />
        </S.Item>
        <S.Item>
          <ProductItem />
        </S.Item>
      </S.Content>
    </>
  );
};

export default ProdutSuggested;
