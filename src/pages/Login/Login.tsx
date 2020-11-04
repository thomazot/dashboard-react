import React from 'react';

const Login = () => {
  return (
    <section>
      <label htmlFor="username">E-Mail: </label>
      <input name="username" id="username" type="text" />
      <label htmlFor="password">Senha: </label>
      <input name="password" id="password" type="password" />
    </section>
  );
};

export default Login;
