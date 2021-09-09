import {Field, Form, Formik, FormikHelpers} from 'formik';
import Link from 'next/link';
import React, {FC, FormEvent, ReactNode, useState} from 'react';
import * as Yup from 'yup';

import {
  typographyColor,
  typographyVariant,
} from '@/constants/typography-config';
import Button from '@/shared/button';
import FormControl from '@/shared/form/form-control';
import Input from '@/shared/form/input';
import Select from '@/shared/form/select';
import PageHead from '@/shared/page-head';
import Typography from '@/shared/typography';

import * as S from './phone-number.styled';

interface PhoneNumberProps {
  children?: ReactNode;
}

interface IValues {
  phoneNumber: string;
  areaCode: string;
}

const initialValues: IValues = {
  phoneNumber: '',
  areaCode: '',
};

const validationSchema = Yup.object({
  newPassword: Yup.string().required('Password is required'),
  password: Yup.string().required('Password is required'),
});

const areaCodeOptions = [
  {id: 1, value: 1, label: '061 - بند ماهشهر'},
  {id: 2, value: 2, label: '021 - تهران'},
];

const PhoneNumber: FC<PhoneNumberProps> = () => {
  const onSubmit = (values: IValues, submitProps: FormikHelpers<IValues>) => {
    console.log('Form data', values);
    console.log('submitProps', submitProps);
    // submitProps.setSubmitting(false);
    // submitProps.resetForm();
  };
  const handleSizeChange = (): void => {
    'size change';
  };
  return (
    <>
      <PageHead> ثبت شماره تلفن ثابت </PageHead>
      <S.Wrap>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
          enableReinitialize
          // validateOnChange={false}
          // validateOnBlur={false}
          validateOnMount
        >
          {({values, setFieldValue, handleSubmit}) => (
            <S.Form as={Form}>
              <FormControl>
                <S.Block>
                  <S.Wrapper>
                    <Typography gutterBottom={2}>شماره تلفن </Typography>
                    <Field as={Input} hasBorder name='currentPassword' />
                  </S.Wrapper>
                  <S.Wrapper>
                    <Typography gutterBottom={2}> پیش شماره </Typography>
                    <Select
                      isSearchable
                      placeholder='کد شهر'
                      onChange={handleSizeChange}
                      options={areaCodeOptions}
                    />
                  </S.Wrapper>
                </S.Block>
                <Typography
                  gutterTop={2}
                  variant={typographyVariant.BODY_MD_NORMAL}
                  color={typographyColor.ON_PRIMARY}
                >
                  درصورت ویرایش شماره خود، باید شماره جدید را مجددا تایید کنید
                </Typography>
              </FormControl>
              <FormControl component={S.FormControl}>
                <Button type='submit'>تغییر رمز عبور </Button>
              </FormControl>
            </S.Form>
          )}
        </Formik>
      </S.Wrap>
    </>
  );
};

export default PhoneNumber;
