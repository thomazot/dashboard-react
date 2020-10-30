import React, { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

const theme = {};

export interface ITheme {
  children: ReactNode;
}

const Theme = ({ children }: ITheme) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};

export default Theme;
