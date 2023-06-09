import React, { createContext, useEffect, useState } from 'react';
import { User, UserCredential } from 'firebase/auth';
import { signIn, signUp, signOut } from '../services/auth';
import { auth } from '../services';
import { UserInfoType } from '../types';

interface AuthContextValue {
  userProfileInfos: UserInfoType | null;
  setUserProfileInfos: React.Dispatch<
    React.SetStateAction<UserInfoType | null>
  >;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>({
  userProfileInfos: null,
  currentUser: null,
  setUserProfileInfos: () => {},
  setCurrentUser: () => {},
});

export const AuthProvider = ({ children }: IAuthProvider) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [userProfileInfos, setUserProfileInfos] = useState<UserInfoType | null>(
    null
  );

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });
  }, []);

  const value = {
    userProfileInfos,
    setUserProfileInfos,
    currentUser,
    setCurrentUser,
    signIn,
    signUp,
    signOut,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
