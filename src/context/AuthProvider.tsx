"use client";
import React, { useEffect, useState, ReactNode } from "react";
import { auth } from "@/Firebase";
import { useAuthUser } from "@/src/libs/firebase/userAuth";
import { createContext, useContext } from "react";
import firebase from "firebase/compat/app";

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
  const { data: user, isLoading, refetch } = useAuthUser();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(isLoading);
  }, [isLoading]);

  const logout = () => {
    auth.signOut().then(() => {
      refetch();
    });
  };

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider
      value={{ user: user || null, loading, isLoggedIn, logout }}
    >
      {!loading && children}
    </AuthContext.Provider>
  );
};

interface AuthContextProps {
  user: firebase.User | null;
  loading: boolean;
  isLoggedIn: boolean;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextProps | undefined>({
  user: null,
  loading: false,
  isLoggedIn: false,
  logout: () => {},
});

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within an AuthProvider");
  }
  return context;
};
