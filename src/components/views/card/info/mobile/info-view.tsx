import { useRouter } from 'next/router';
import useTranslation from 'next-translate/useTranslation';
import { FC, useState } from 'react';

import { buttonSizes } from '@/constants/button-config';
import { CorePackValues } from '@/constants/core-pack-values';
import Button from '@/shared/button';
import Paths from '@/utils/paths';

import CardAddress from './card-address';
import CardPack from './card-pack';
import CardSendMethod from './card-send-method';
import * as S from './info-view.stled';

const InfoView: FC = () => {
  const [selectedPackId, setSelectedPackId] = useState(CorePackValues.REGULAR);
  const { push } = useRouter();
  const { t } = useTranslation('common');
  return (
    <S.Wrapper>
      <S.Wrap>
        <CardAddress />
      </S.Wrap>
      <S.Wrap>
        <CardSendMethod />
      </S.Wrap>
      <S.Wrap>
        <CardPack selectedPackId={selectedPackId} setSelectedPackId={setSelectedPackId} />
      </S.Wrap>
      <S.Button>
        <Button
          onClick={() => push({ pathname: Paths.card.payment.getPath() }, undefined, { scroll: false })}
          matchParent
          size={buttonSizes.LARGE}
        >
          {t('submitInfo')}
        </Button>
      </S.Button>
    </S.Wrapper>
  );
};

export default InfoView;
