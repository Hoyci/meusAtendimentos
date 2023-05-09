import React, { createContext, useEffect, useState } from 'react';
import { User, UserCredential } from 'firebase/auth';
import { signIn, signUp, signOut } from '../services/auth';
import { auth } from '../services';
import { getUser, UserInfoType } from '../services/database';

interface AuthContextValue {
  userProfileInfos: UserInfoType | null;
  setUserProfileInfos: React.Dispatch<
    React.SetStateAction<UserInfoType | null>
  >;
  currentUser: User | null;
  setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
  signUp: (
    name: string,
    email: string,
    password: string
  ) => Promise<UserCredential>;
  signIn: (email: string, password: string) => Promise<UserCredential>;
  signOut: () => Promise<void>;
}

interface IAuthProvider {
  children: React.ReactNode;
}

export const AuthContext = createContext<AuthContextValue>({
  userProfileInfos: null,
  setUserProfileInfos: () => {},
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
  const [userProfileInfos, setUserProfileInfos] = useState<UserInfoType | null>(
    null
  );
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
      setIsLoading(false);
    });
  }, []);

  useEffect(() => {
    const getUserInfos = async (uid: string) => {
      const userInfos = await getUser(uid);
      userInfos && setUserProfileInfos(userInfos);
    };

    if (currentUser) {
      getUserInfos(currentUser.uid);
    } else {
      setUserProfileInfos(null);
    }
  }, [currentUser]);

  if (isLoading) {
    return <h1>Carregando...</h1>;
  }

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
