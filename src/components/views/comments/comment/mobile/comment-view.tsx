import {Form, Formik, FormikHelpers} from 'formik';
import React, {FC, ReactNode, useState} from 'react';
import * as Yup from 'yup';

import CommentAlbum from './comment-album';
import CommentBottom from './comment-bottom';
import CommentDetail from './comment-detail';
import CommentHead from './comment-head';
import CommentScore from './comment-score';
import CommentSize from './comment-size';
import CommentSizeDetail from './comment-size-detail';
import * as S from './comment-view.styled';

type CommentViewProps = {
  children?: ReactNode;
};

interface IValues {
  rate: number;
  detail: string | number;
  files: unknown[];
  size: string;
  height: string | undefined;
  weight: string | undefined;
  bust: string | undefined;
  basin: string | undefined;
}

const initialValues: IValues = {
  rate: 0,
  detail: '',
  files: [],
  size: '',
  height: '',
  weight: '',
  bust: '',
  basin: '',
};

const onSubmit = (values: IValues, submitProps: FormikHelpers<IValues>) => {
  console.log('Form data', values);
  console.log('submitProps', submitProps);
  // submitProps.setSubmitting(false);
  // submitProps.resetForm();
};

const validationSchema = Yup.object({});

const CommentView: FC<CommentViewProps> = () => {
  const [formValues, setFormValues] = useState(null);

  return (
    <Formik
      initialValues={formValues || initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
      // validateOnChange={false}
      // validateOnBlur={false}
      // validateOnMount
    >
      {({values, setFieldValue, handleSubmit}) => (
        <Form>
          <S.Wrapper>
            <S.Block>
              <CommentHead />
            </S.Block>
            <S.Block>
              <CommentScore rate={values.rate} />
            </S.Block>
            <S.Block>
              <CommentDetail />
            </S.Block>
            <S.Block>
              <CommentAlbum
                files={values.files}
                setFieldValue={setFieldValue}
              />
            </S.Block>
            <S.Block>
              <CommentSize size={values.size} />
            </S.Block>
            <S.Block>
              <CommentSizeDetail />
            </S.Block>
            <S.Block>
              <CommentBottom />
            </S.Block>
          </S.Wrapper>
        </Form>
      )}
    </Formik>
  );
};

export default CommentView;
