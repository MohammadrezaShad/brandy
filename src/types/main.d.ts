/* eslint-disable no-unused-vars */
import { FC, ReactChild } from 'react';

import { DeviceTypes } from '@/constants/device-types';
import { ThemeTypes } from '@/constants/theme-types';

export type GetLayout = (page: ReactChild, deviceType?: DeviceType) => JSX.Element;
export type DeviceType = typeof DeviceTypes.MOBILE | typeof DeviceTypes.DESKTOP;
export type ThemeType = typeof ThemeTypes.DARK | typeof ThemeTypes.LIGHT;
export type ReactComponent<T> = FC<T> & { getLayout: GetLayout };
export type LayoutProps = {
  children: unknown;
  deviceType: DeviceType;
};
