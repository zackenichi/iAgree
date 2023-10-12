import { createContext, useState, useEffect, FC } from 'react';
import { User } from 'firebase/auth';
import { useNavigate } from 'react-router-dom';
import { SignOutUser, userStateListener } from '../firebase/firebase';
import { PropsWithChildren } from '../resources/interfaces/PropsWithChildren';

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

  useEffect(() => {
    const unsubscribe = userStateListener((user) => {
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

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
