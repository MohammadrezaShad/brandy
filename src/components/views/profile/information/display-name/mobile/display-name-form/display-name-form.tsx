import {Field, Form, Formik, FormikHelpers} from 'formik';
import React, {FC, ReactNode, useState} from 'react';
import * as Yup from 'yup';

import Button from '@/shared/button';
import FormControl from '@/shared/form/form-control';
import Input from '@/shared/form/input';
import Typography from '@/shared/typography';

import * as S from './display-name-form.styled';

interface DisplayNameFormProps {
  children?: ReactNode;
}

interface IValues {
  name: string;
  surname: string;
}

const initialValues: IValues = {
  name: '',
  surname: '',
};

const validationSchema = Yup.object({});

const DisplayNameForm: FC<DisplayNameFormProps> = props => {
  const onSubmit = (values: IValues, submitProps: FormikHelpers<IValues>) => {
    console.log('Form data', values);
    console.log('submitProps', submitProps);
    // submitProps.setSubmitting(false);
    // submitProps.resetForm();
  };
  return (
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
            <Typography gutterBottom={2}>نام</Typography>
            <Field as={Input} hasBorder name='name' />
          </FormControl>
          <FormControl>
            <Typography gutterBottom={2}>نام خانوادگی</Typography>
            <Field as={Input} hasBorder name='surname' />
          </FormControl>
          <FormControl component={S.FormControl}>
            <Button type='submit'>تایید اطلاعات</Button>
          </FormControl>
        </S.Form>
      )}
    </Formik>
  );
};

export default DisplayNameForm;
