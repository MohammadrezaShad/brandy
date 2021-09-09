import {Field, Form, Formik, FormikHelpers} from 'formik';
import React, {FC, ReactNode} from 'react';
import * as Yup from 'yup';

import {typographyVariant} from '@/constants/typography-config';
import Button from '@/shared/button';
import Checkbox from '@/shared/form/checkbox';
import FormControl from '@/shared/form/form-control';
import Input from '@/shared/form/input';
import Typography from '@/shared/typography';

import * as S from './display-name-form.styled';

interface NationalCodeFormProps {
  children?: ReactNode;
}

interface IValues {
  nationalCode: string;
  foreignNational: boolean;
}

const initialValues: IValues = {
  nationalCode: '',
  foreignNational: false,
};

const validationSchema = Yup.object({});

const NationalCodeForm: FC<NationalCodeFormProps> = props => {
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
      {({values, setFieldValue}) => (
        <S.Form as={Form}>
          <FormControl>
            <Typography gutterBottom={2}> کد ملی خود را وارد کنید</Typography>
            <Field as={Input} hasBorder name='nationalCode' type='number' />
          </FormControl>
          <FormControl>
            <Checkbox
              name='foreignNational'
              checked={values.foreignNational}
              onChange={event => {
                setFieldValue('foreignNational', event.currentTarget.checked);
              }}
            >
              <Typography
                gutterRight={1}
                variant={typographyVariant.BODY_MD_NORMAL}
              >
                تبعه خارجی فاقد کد ملی هستم
              </Typography>
            </Checkbox>
          </FormControl>
          <FormControl component={S.FormControl}>
            <Button type='submit'>تایید اطلاعات</Button>
          </FormControl>
        </S.Form>
      )}
    </Formik>
  );
};

export default NationalCodeForm;
