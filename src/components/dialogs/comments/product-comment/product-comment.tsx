import {useRouter} from 'next/router';
import React, {FC, useState} from 'react';

import Close from '@/assets/vectors/Close.svg';
import {buttonColors, buttonSizes} from '@/constants/button-config';
import {typographyAlign, typographyColor} from '@/constants/typography-config';
import Button from '@/shared/button';
import Dialog from '@/shared/dialog';
import Typography from '@/shared/typography';

import * as S from './product-comment.styled';

type ProductCommentProps = {
  open: boolean;
  onClose: () => void;
};

const ProductComment: FC<ProductCommentProps> = ({open, onClose}) => {
  const [selectedProduct, setSelectedProduct] = useState(1);
  const {asPath, push} = useRouter();
  const handleClickProduct = (id: number) => {
    setSelectedProduct(id);
  };
  return (
    <Dialog open={open} onClose={onClose}>
      <S.Wrapper>
        <S.Head>
          <Typography gutterLeft={2}>
            برای کدام یک از سفارشاتان نظر می‌دهید؟
          </Typography>
          <S.HeadIcon as={Close} />
        </S.Head>
        <S.Content>
          <S.Product onClick={() => handleClickProduct(1)}>
            <S.ProductImage
              selected={selectedProduct === 1}
              src='/images/res/Image.png'
              alt='test'
            />
            <Typography
              color={selectedProduct === 1 ? typographyColor.ERROR : null}
              gutterTop={2}
              align={typographyAlign.CENTER}
            >
              رنگ مشکی XL سایز
            </Typography>
          </S.Product>
          <S.Product onClick={() => handleClickProduct(2)}>
            <S.ProductImage
              selected={selectedProduct === 2}
              src='/images/res/Image.png'
              alt='test'
            />
            <Typography
              color={selectedProduct === 2 ? typographyColor.ERROR : null}
              gutterTop={2}
              align={typographyAlign.CENTER}
            >
              رنگ مشکی XL سایز
            </Typography>
          </S.Product>
        </S.Content>
        <S.Bottom>
          <S.ButtonWrap>
            <Button
              size={buttonSizes.MEDIUM}
              matchParent
              color={buttonColors.STROKE}
            >
              انصراف
            </Button>
          </S.ButtonWrap>
          <S.ButtonWrap>
            <Button
              onClick={() => push(`${asPath}/comment`)}
              size={buttonSizes.MEDIUM}
              matchParent
            >
              تایید
            </Button>
          </S.ButtonWrap>
        </S.Bottom>
      </S.Wrapper>
    </Dialog>
  );
};

export default ProductComment;
