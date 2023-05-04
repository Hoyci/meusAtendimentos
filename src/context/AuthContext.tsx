import React, { createContext, useState } from 'react';
import { User, UserCredential } from 'firebase/auth';
import { signIn, signUp, signOut } from '../services/user';

interface AuthContextValue {
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  signUp: (email: string, password: string) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>({
  currentUser: null,
  setCurrentUser: () => {},
  signUp: async () => {
    throw new Error('AuthContext not initialized');
  },
  signIn: async () => {
    throw new Error('AuthContext not initialized');
  },
  signOut: async () => {
    throw new Error('AuthContext not initialized');
  },
});

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const value: AuthContextValue = {
    currentUser,
    setCurrentUser,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
