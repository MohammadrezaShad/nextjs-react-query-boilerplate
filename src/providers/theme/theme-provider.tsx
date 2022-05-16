import React from 'react';
import {useCookies} from 'react-cookie';
import {ThemeProvider as StyleComponentThemeProvider} from 'styled-components';

import plazaUiTheme from '@/providers/theme/plaza-ui-theme';
import CookiesName from '@/src/constants/cookies-name';
import {ThemeTypes} from '@/src/constants/theme-types';
import ThemeContext from '@/src/contexts/theme-context';
import GlobalStyle from '@/src/styles/global-styles';
import {ThemeType} from '@/src/types/main';

export const ThemeProvider = ({children}: React.PropsWithChildren<unknown>) => {
  const [cookies, setCookie] = useCookies([CookiesName.Theme]);
  const [theme, setTheme] = React.useState(cookies[CookiesName.Theme] || ThemeTypes.LIGHT);

  const toggleTheme = React.useCallback(async () => {
    if (theme === ThemeTypes.LIGHT) {
      setTheme(ThemeTypes.DARK);
      setCookie(CookiesName.Theme, ThemeTypes.DARK);
    } else {
      setTheme(ThemeTypes.LIGHT);
      setCookie(CookiesName.Theme, ThemeTypes.LIGHT);
    }
  }, [setCookie, theme]);

  const value = React.useMemo(
    () => ({
      theme,
      toggleTheme,
    }),
    [theme, toggleTheme],
  );

  const getTheme = (themeName: ThemeType) => {
    switch (themeName) {
      case ThemeTypes.DARK:
        return plazaUiTheme;
      default:
        return plazaUiTheme;
    }
  };

  return (
    <ThemeContext.Provider value={value}>
      <StyleComponentThemeProvider theme={getTheme(theme)}>
        {children}
        <GlobalStyle />
      </StyleComponentThemeProvider>
    </ThemeContext.Provider>
  );
};
