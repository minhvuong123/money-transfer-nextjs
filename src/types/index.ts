import { NextPage } from "next";
import { AppProps } from "next/app";
import { ReactElement, ReactNode } from "react";

export type NextPageWithLayout<P = {}, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: ReactElement) => ReactNode;
};

export type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

export type NavigationItemType = 'dashboard' | 'activity' | 'methods' | 'settings';

export type NavigationItem = {
  type: string;
  pathname: string;
}

export type MockPayementMethods = {
  type: string,
  last4: string,
  name: string
}