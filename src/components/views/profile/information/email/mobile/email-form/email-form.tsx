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

import * as S from './email-form.styled';

interface EmailFormProps {
  children?: ReactNode;
  setHasCode: React.Dispatch<React.SetStateAction<boolean>>;
}

const EmailForm: FC<EmailFormProps> = ({setHasCode}) => {
  const [email, setEmail] = useState('');
  const onSumbit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setHasCode(true);
    console.log(email);
  };
  return (
    <>
      <PageHead>ثبت پست الکترونیک</PageHead>
      <S.Wrap>
        <S.Content onSubmit={onSumbit}>
          <FormControl>
            <Typography gutterBottom={2}>پست الکترونیک</Typography>
            <Input
              hasBorder
              type='email'
              handleChange={event => {
                setEmail(event.target.value);
              }}
            />
          </FormControl>
          <FormControl component={S.FormControl}>
            <Button type='submit'>تایید اطلاعات</Button>
          </FormControl>
        </S.Content>
      </S.Wrap>
    </>
  );
};

export default EmailForm;
