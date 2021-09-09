import {useRouter} from 'next/router';
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

import * as S from './request-view.styled';

interface EmailFormProps {
  children?: ReactNode;
}

const Request: FC<EmailFormProps> = () => {
  const {push} = useRouter();
  const [field, setField] = useState('');
  const onSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(field);
    push('/profile/information/recovery-password/verification');
  };
  return (
    <>
      <PageHead>درخواست بازیابی رمز عبور</PageHead>
      <S.Wrap>
        <S.Content onSubmit={onSumbit}>
          <FormControl>
            <Typography gutterBottom={2}>
              پست الکترونیک یا شماره موبایل خود را وارد کنید
            </Typography>
            <Input
              hasBorder
              handleChange={event => {
                setField(event.target.value);
              }}
            />
          </FormControl>
          <FormControl component={S.FormControl}>
            <Button type='submit'>ارسال درخواست </Button>
          </FormControl>
        </S.Content>
      </S.Wrap>
    </>
  );
};

export default Request;
