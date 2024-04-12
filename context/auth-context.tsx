'use client';
import { fakeMentee, fakeMentor } from '@/dummy-data';
import { User } from '@/types';
import { createContext, useContext, useState } from 'react';

interface AuthContextProps {
  user: User | null;
  isLoggedIn: boolean;
  signIn: () => void;
  signUp: () => void;
  signOut: () => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  isLoggedIn: false,
  signIn: () => {},
  signUp: () => {},
  signOut: () => {},
});

export const useAuth = () => {
  return useContext(AuthContext);
};

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const signIn = () => {
    setUser(fakeMentee);
    setIsLoggedIn(true);
  };

  const signUp = () => {
    setUser(fakeMentor);
    setIsLoggedIn(true);
  };

  const signOut = () => {
    setUser(null);
    setIsLoggedIn(false);
  };

  const values = {
    user,
    isLoggedIn,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};
