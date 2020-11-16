import { createStyles, makeStyles, Theme } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    main: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexGrow: 1,
      height: '100vh',
      overflow: 'auto',
    },
    actions: {
      padding: '16px 0',
    },
  })
);

export default useStyles;
