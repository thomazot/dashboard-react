import React from 'react';
import {
  Box,
  Button,
  Container,
  Paper,
  TextField,
  Typography,
} from '@material-ui/core';
import useStyles from './Login.style';
import { useHistory } from 'react-router-dom';

const Login = () => {
  const classes = useStyles();
  const history = useHistory();

  function handleSubmit() {
    history.push('/dashboard');
  }

  return (
    <main className={classes.main}>
      <Container maxWidth="xs">
        <Paper>
          <form onSubmit={handleSubmit}>
            <Box p={3}>
              <Typography align="center" variant="h5" component="h1">
                Área Restrita
              </Typography>
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="username"
                name="username"
                label="E-Mail"
                autoComplete="email"
                autoFocus
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="password"
                label="Senha"
                id="password"
                type="password"
                autoComplete="current-password"
              />
              <Box className={classes.actions}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  Login
                </Button>
              </Box>
            </Box>
          </form>
        </Paper>
      </Container>
    </main>
  );
};

export default Login;
