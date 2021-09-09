import {Field, Form, Formik, FormikHelpers} from 'formik';
import Link from 'next/link';
import React, {FC, FormEvent, ReactNode, useState} from 'react';
import * as Yup from 'yup';

import ArrowLeft from '@/assets/vectors/F-Left.svg';
import {typographyColor} from '@/constants/typography-config';
import Button from '@/shared/button';
import FormControl from '@/shared/form/form-control';
import Input from '@/shared/form/password-input';
import PageHead from '@/shared/page-head';
import Typography from '@/shared/typography';

import * as S from './recovery-passowrd.styled';

interface RecoveryPasswordProps {
  children?: ReactNode;
}

interface IValues {
  currentPassword: string;
  newPassword: string;
}

const initialValues: IValues = {
  currentPassword: '',
  newPassword: '',
};

const validationSchema = Yup.object({
  newPassword: Yup.string().required('Password is required'),
  password: Yup.string().required('Password is required'),
  confirmNewPassword: Yup.string()
    .required('Please confirm your password')
    .oneOf([Yup.ref('password')], 'Passwords do not match'),
});

const RecoveryPassword: FC<RecoveryPasswordProps> = () => {
  const onSubmit = (values: IValues, submitProps: FormikHelpers<IValues>) => {
    console.log('Form data', values);
    console.log('submitProps', submitProps);
    // submitProps.setSubmitting(false);
    // submitProps.resetForm();
  };
  return (
    <>
      <PageHead>تغییر رمز عبور </PageHead>
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
                <Typography gutterBottom={2}>رمز عبور فعلی</Typography>
                <Field as={Input} hasBorder name='currentPassword' />
                <Link href='/profile/information/recovery-password/request'>
                  <S.Block>
                    <Typography color={typographyColor.ON_PRIMARY}>
                      بازیـابی رمز عبور
                    </Typography>
                    <S.Arrow as={ArrowLeft} />
                  </S.Block>
                </Link>
              </FormControl>
              <FormControl>
                <Typography gutterBottom={2}>رمز عبور جدید</Typography>
                <Field as={Input} hasBorder name='newPassword' />
              </FormControl>
              <FormControl>
                <Typography gutterBottom={2}>تکرار رمز عبور جدید</Typography>
                <Field as={Input} hasBorder name='confirmNewPassword' />
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

export default RecoveryPassword;
