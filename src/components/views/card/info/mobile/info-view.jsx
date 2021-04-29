import CardAddress from './card-address';
import CardPack from './card-pack';
import CardSendMethod from './card-send-method';
import * as S from './info-view.stled';

const InfoView = () => {
  console.log('InfoView');
  return (
    <S.Wrapper>
      <S.Wrap>
        <CardAddress />
      </S.Wrap>
      <S.Wrap>
        <CardSendMethod />
      </S.Wrap>
      <S.Wrap>
        <CardPack />
      </S.Wrap>
    </S.Wrapper>
  );
};

export default InfoView;
