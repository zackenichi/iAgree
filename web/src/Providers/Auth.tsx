import { createContext, useState, useEffect, FC } from 'react';
import { User as FirebaseUser } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SignOutUser, userStateListener } from '../firebase/firebase';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../services';
import { setLoggedInUser } from '../store/AuthenticationReducer';
import { User } from '../resources/interfaces/User';

interface AuthContextProps {
  currentUser: FirebaseUser | null;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  signOut: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<FirebaseUser | null>(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  getCurrentUser();

  useEffect(() => {
    const unsubscribe = userStateListener(async (user) => {
      setCurrentUser(user);
      if (user) {
        const userDocument = (await getCurrentUser()) as User;
        dispatch(setLoggedInUser(userDocument));
      } else {
        navigate('/login');
      }
    });

    return unsubscribe;
  }, [currentUser, dispatch, navigate]);

  const signOut = () => {
    SignOutUser();
    setCurrentUser(null);
    navigate('/login');
  };

  return (
    <AuthContext.Provider value={{ currentUser, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
