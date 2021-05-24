import {useRouter} from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import {FC, useState} from 'react';

import ArrowRight from '@/assets/vectors/F-Right.svg';
import Tabs from '@/components/shared/tabs';
import {
  typographyAlign,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import Typography from '@/shared/typography';
import Paths from '@/utils/paths';

import * as S from './card-header.styled';

const CardHeader: FC = () => {
  const [selectedTabIndex, setSelectedTabIndex] = useState<number>(0);
  const handleTabChange = (tabIndex: number): void => {
    setSelectedTabIndex(tabIndex);
  };
  const {pathname, back} = useRouter();
  const {t} = useTranslation('common');
  return (
    <S.Head>
      <S.ArrowRight as={ArrowRight} onClick={() => back()} />
      {pathname === Paths.card.home.getPath() ? (
        <S.TabWrap>
          <Tabs
            tabItems={[
              {id: 1, text: t('card')},
              {id: 2, text: t('favorites')},
            ]}
            selectedTabIndex={selectedTabIndex}
            handleTabChange={handleTabChange}
            border={false}
            spaceAround
          />
        </S.TabWrap>
      ) : (
        <S.Text>
          <Typography
            variant={typographyVariant.BODY_MD_MEDIUM}
            align={typographyAlign.CENTER}
            display={typographyDisplay.BLOCK}
          >
            {t('card')}
          </Typography>
        </S.Text>
      )}
    </S.Head>
  );
};

export default CardHeader;
