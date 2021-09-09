/* eslint-disable no-unused-vars */
import {FC, ReactChild} from 'react';

import {DeviceTypes} from '@/constants/device-types';
import {ThemeTypes} from '@/constants/theme-types';

export type GetLayout = (
  page: ReactChild,
  deviceType?: DeviceType,
) => JSX.Element;
export type DeviceType = typeof DeviceTypes.MOBILE | typeof DeviceTypes.DESKTOP;
export type ThemeType = typeof ThemeTypes.DARK | typeof ThemeTypes.LIGHT;
export type ReactComponent<T> = FC<T> & {getLayout: GetLayout};
export type LayoutProps = {
  children: unknown;
  deviceType: DeviceType;
};

export type ValueOf<T> = T[keyof T];

export type Filter = {
  id: number;
  checked: boolean;
  title: string;
  color?: string;
};

export type FiltersProps = {
  sizingFilters: Filter[];
  templateFilters: Filter[];
  coloringFilters: Filter[];
  minPrice: number;
  maxPrice: number;
  handleChangeSizingFilter: (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  handleChangeTemplateFilter: (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  handleChangeColoringFilter: (
    filterId: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => void;
  resetFilter: boolean;
  renderActiveFiltersStatus: (filters: Filter[]) => string | number;
  removeActiveColoringFilter: (filterId: number) => void;
  removeActiveSizingFilter: (filterId: number) => void;
  removeActiveTemplateFilter: (filterId: number) => void;
  getActiveFilters: (filters: Filter[]) => Filter[];
  changeMinPriceAction: (coefficient: number) => void;
  changeMaxPriceAction: (coefficient: number) => void;
  removeAllfilters: () => void;
};

export type Component = React.ElementType | keyof JSX.IntrinsicElements;
