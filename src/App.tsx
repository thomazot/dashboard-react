import React from 'react';
import Routes from 'routes';
import useStyles from 'styles';
import { ThemeProvider } from '@material-ui/styles';
import { CssBaseline } from '@material-ui/core';
import useTheme from 'hooks/useTheme';

function App() {
  const { theme } = useTheme();
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className={classes.root}>
        <Routes />
      </div>
    </ThemeProvider>
  );
}

export default App;
