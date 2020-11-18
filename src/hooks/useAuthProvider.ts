import { useContext } from 'react';
import { AuthProviderContext } from 'contexts/AuthProvider';

const useAuthProvider = () => useContext(AuthProviderContext);

export default useAuthProvider;
