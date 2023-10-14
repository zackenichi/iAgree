import { createContext, useState, useEffect, FC } from 'react';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SignOutUser, userStateListener } from '../firebase/firebase';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';
// import { useDispatch } from 'react-redux';
import { getCurrentUser } from '../services';
// import { setLoggedInUser } from '../store/AuthenticationReducer';

interface AuthContextProps {
  currentUser: User | null;
  signOut: () => void;
}

export const AuthContext = createContext<AuthContextProps>({
  currentUser: null,
  signOut: () => {},
});

const AuthProvider: FC<PropsWithChildren> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();
  // const dispatch = useDispatch();

  getCurrentUser();

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      // console.log(user);
      setCurrentUser(user);
    });
    if (!currentUser) {
      navigate('/login');
    }
    return unsubscribe;
  }, [currentUser, navigate]);

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
