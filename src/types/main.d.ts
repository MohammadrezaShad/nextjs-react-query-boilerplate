/* eslint-disable no-unused-vars */
import type {FC, ReactChild, ReactNode} from 'react';
import type {Cookies} from 'react-cookie';
import type {AppProps} from 'next/app';

import {DeviceTypes} from '@/constants/device-types';
import {ThemeTypes} from '@/constants/theme-types';

export type GetLayout = (page: ReactChild, deviceType?: DeviceType) => JSX.Element;
export type DeviceType = typeof DeviceTypes.MOBILE | typeof DeviceTypes.DESKTOP;
export type ThemeType = typeof ThemeTypes.DARK | typeof ThemeTypes.LIGHT;

export type ReactComponent<T> = FC<T> & {getLayout: GetLayout};

export type LayoutProps = {
  children: ReactNode;
  deviceType: DeviceType;
};

export type ValueOf<T> = T[keyof T];

export type Component = React.ElementType | keyof JSX.IntrinsicElements;

export type AppExtendedProps = {
  cookies: Cookies;
  deviceType: DeviceType;
  Component: NextComponentType<NextPageContext, unknown, Record<string, unknown>> & {
    getLayout: GetLayout;
  };
} & AppProps;
