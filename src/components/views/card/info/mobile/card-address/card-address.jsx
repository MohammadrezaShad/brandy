import Note from '@/assets/vectors/Note.svg';
import Typography from '@/components/shared/typography';
import { typographyColor, typographyComponent, typographyVariant } from '@/constants/typography-config';

import * as S from './card-address.styled';

const CardAddress = () => {
  console.log('CardAddress');
  return (
    <>
      <S.Head>
        <Typography variant={typographyVariant.BODY_MD_MEDIUM}>آدرس پستی</Typography>
        <Typography color={typographyColor.ON_SUCCESS} variant={typographyVariant.BODY_SM_MEDIUM}>
          <S.Icon as={Note} /> تغییر آدرس
        </Typography>
      </S.Head>
      <S.Content>
        <Typography gutterBottom={1} color={typographyColor.ON_PRIMARY} variant={typographyVariant.BODY_MD_MEDIUM}>
          علی اصغر داوودی
        </Typography>
        <Typography variant={typographyVariant.BODY_MD_NORMAL} component={typographyComponent.P}>
          خوزستان، بندرماهشهر، ناحیه صنعتی، خیابان امام، کوچه مولوی، آپارتمان فجر جنوبی، طبقه سوم، پلاک 6
        </Typography>
      </S.Content>
    </>
  );
};

export default CardAddress;
