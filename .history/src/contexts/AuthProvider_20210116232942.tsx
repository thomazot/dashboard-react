import React, { createContext, useMemo, useState } from 'react';

export interface IUser {
  name: string;
  email: string;
  password: string;
}
export interface IAuthProvider {
  user?: IUser;
  onLogin?: (user: IUser) => void;
  onLogout?: () => void;
}
export const AuthProviderContext = createContext<IAuthProvider>({
  user: undefined,
});

const initAuthData: IUser | undefined = undefined;

const AuthProvider: React.FC = (props) => {
  const [auth, setAuth] = useState<IUser | undefined>(initAuthData);
  const onLogout = () => setAuth(initAuthData);
  const onLogin = (newAuth: IUser) => setAuth(newAuth);
  const authDataValue = useMemo<IAuthProvider>(
    () => ({ user: auth, onLogin, onLogout }),
    [auth]
  );

  return <AuthProviderContext.Provider value={authDataValue} {...props} />;
};

export default AuthProvider;
