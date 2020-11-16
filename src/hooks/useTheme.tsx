import { createMuiTheme, useMediaQuery } from '@material-ui/core';
import { deepOrange, orange } from '@material-ui/core/colors';

const useTheme = () => {
  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createMuiTheme({
    palette: {
      type: prefersDarkMode ? 'dark' : 'light',
      primary: {
        main: orange[500],
      },
      secondary: {
        main: deepOrange[900],
      },
    },
  });

  return {
    theme,
  };
};

export default useTheme;
