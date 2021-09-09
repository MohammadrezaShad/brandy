import React, {FC, FormEvent, ReactNode, useState} from 'react';

import {
  typographyAlign,
  typographyColor,
  typographyDisplay,
  typographyVariant,
} from '@/constants/typography-config';
import Button from '@/shared/button';
import FormControl from '@/shared/form/form-control';
import Input from '@/shared/form/input';
import PageHead from '@/shared/page-head';
import Typography from '@/shared/typography';

import * as S from './mobile-number-form.styled';

interface MobileNumberFormProps {
  children?: ReactNode;
  setHasCode: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileNumberForm: FC<MobileNumberFormProps> = ({setHasCode}) => {
  const [mobileNumber, setMobileNumber] = useState('');
  const onSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasCode(true);
    console.log(mobileNumber);
  };
  return (
    <>
      <PageHead>ثبت شماره موبایل</PageHead>
      <S.Wrap>
        <S.Content onSubmit={onSumbit}>
          <FormControl>
            <Typography gutterBottom={2}>شماره موبایل</Typography>
            <Input
              hasBorder
              type='number'
              handleChange={event => {
                setMobileNumber(event.target.value);
              }}
            />
            <Typography
              display={typographyDisplay.BLOCK}
              gutterTop={3}
              color={typographyColor.ON_PRIMARY}
              align={typographyAlign.CENTER}
              variant={typographyVariant.SUBTITLE_XS_NORMAL}
            >
              درصورت ویرایش شماره خود، باید شماره جدید را مجددا تایید کنید
            </Typography>
          </FormControl>
          <FormControl component={S.FormControl}>
            <Button type='submit'>تایید اطلاعات</Button>
          </FormControl>
        </S.Content>
      </S.Wrap>
    </>
  );
};

export default MobileNumberForm;
