/* eslint-disable no-unused-vars */
/* eslint-disable prefer-destructuring */
import camelcase from 'camelcase';
import React, {FC, useContext} from 'react';
import ReactSelect, {ActionMeta, OptionsType} from 'react-select';
import {ThemeContext} from 'styled-components';

import * as S from './select.styled';

type SelectOption = {label: string; value: number};
type OnChange = (
  value: OptionsType<SelectOption>,
  actionMeta: ActionMeta<SelectOption>,
) => void;

type SelectProps = {
  options: OptionsType<SelectOption>;
  name?: string;
  value?: number;
  isDisabled?: boolean;
  isClearable?: boolean;
  isSearchable?: boolean;
  instanceId?: number;
  placeholder?: string;
  onChange: OnChange;
};

const Select: FC<SelectProps> = ({
  options,
  isDisabled,
  isClearable = false,
  isSearchable = false,
  name,
  value,
  instanceId,
  placeholder,
  onChange,
  ...restProps
}) => {
  const themeContext = useContext(ThemeContext);
  const customStyles = {
    control: (provided: any) => ({
      ...provided,
      borderColor: themeContext.palette.stroke,
      backgroundColor: themeContext.palette.onBack,
      outline: 'none',
      boxShadow: 'none',
      minHeight: '40px',
      borderRadius: themeContext.defaults.borderRadiusVariant,
      ':hover': {
        borderColor: themeContext.palette.stroke,
      },
    }),
    indicatorSeparator: () => ({
      display: 'none',
    }),
    singleValue: (provided: any) => {
      const fontStyles = themeContext.typography.bodyMdNormal.split(';');
      const output = {
        ...provided,
        color: themeContext.palette.onPrimary,
        margin: 0,
      };

      fontStyles.forEach(element => {
        const splited = element.split(':');
        output[camelcase(splited[0])] = splited[1];
      });

      return output;
    },
    dropdownIndicator: (
      provided: any,
      state: {selectProps: {menuIsOpen: any}},
    ) => ({
      ...provided,
      padding: themeContext.dim[1],
      paddingRight: 0,
      SVG: {
        transform: state.selectProps.menuIsOpen
          ? 'rotate(180deg)'
          : 'rotate(0)',
      },
      PATH: {
        fill: state.selectProps.menuIsOpen
          ? themeContext.palette.primary
          : themeContext.palette.primary,
      },
    }),
    valueContainer: (provided: any) => ({
      ...provided,
      paddingRight: themeContext.dim[2],
      paddingLeft: themeContext.dim[1],
    }),
    menu: (provided: any) => ({
      ...provided,
      border: `1px solid ${themeContext.palette.stroke}`,
      borderRadius: themeContext.defaults.borderRadiusVariant,
      borderTopRightRadius: 0,
      borderTopLeftRadius: 0,
      borderTop: 'none',
      // boxShadow: themeContext.defaults.shortBoxShadow,
      backgroundColor: themeContext.palette.onBack,
      top: '100%',
      paddingTop: themeContext.defaults.borderRadiusVariant,
      marginTop: `-${themeContext.defaults.borderRadiusVariant}`,
      '::before': {
        content: '""',
        position: 'absolute',
        top: themeContext.defaults.borderRadiusVariant,
        right: themeContext.dim[2],
        left: themeContext.dim[2],
      },
    }),
    option: (provided: any, state: {isSelected: boolean}) => {
      const fontStyles = themeContext.typography.bodyMdNormal.split(';');

      const output = {
        ...provided,
        color: state.isSelected
          ? themeContext.palette.onPrimary
          : themeContext.palette.onPrimary,
        backgroundColor: state.isSelected
          ? themeContext.palette.back
          : themeContext.palette.onBack,
        margin: 0,
        ':hover': {
          cursor: 'pointer',
          backgroundColor: state.isSelected
            ? themeContext.palette.back
            : themeContext.palette.stroke,
        },
      };

      fontStyles.forEach(element => {
        const splited = element.split(':');
        output[camelcase(splited[0])] = splited[1];
      });

      return output;
    },
  };
  return (
    <S.Wrapper
      styles={customStyles}
      as={ReactSelect}
      options={options}
      classNamePrefix='select'
      defaultValue={value}
      isDisabled={isDisabled}
      isClearable={isClearable}
      isSearchable={isSearchable}
      instanceId={instanceId}
      placeholder={placeholder}
      noOptionsMessage={() => 'موردی یافت نشد'}
      name={name}
      onChange={onChange}
      {...restProps}
    />
  );
};

export default Select;
