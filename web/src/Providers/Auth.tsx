import { createContext, useEffect, FC } from 'react';

import { useNavigate } from 'react-router-dom';
import { SignOutUser, userStateListener } from '../firebase/firebase';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../services';

import { User } from '../resources/interfaces/User';
import { setCurrentUser } from '../store/Reducers';

interface AuthContextProps {
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  signOut: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  getCurrentUser();

  useEffect(() => {
    const unsubscribe = userStateListener(async (user) => {
      if (user) {
        const userDocument = (await getCurrentUser()) as User;
        dispatch(setCurrentUser(userDocument));
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [dispatch, navigate]);

  const signOut = () => {
    SignOutUser();
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ signOut }}>{children}</AuthContext.Provider>
  );
};

export { AuthProvider };
