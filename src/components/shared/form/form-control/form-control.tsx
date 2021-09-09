import React, {FC, ReactNode} from 'react';

import {Component} from '@/types/main';

import * as S from './form-control.styled';

interface FormControlProps {
  children?: ReactNode;
  component?: Component;
}

const FormControl: FC<FormControlProps> = ({children, component}) => (
  <S.FormControl as={component}>{children}</S.FormControl>
);

export default FormControl;
