import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

interface AuthContextValue {
  isAdminAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  expectedHint: string | undefined;
}

const AuthContext = createContext<AuthContextValue | undefined>(undefined);

const STORAGE_KEY = 'adminAuth';

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState<boolean>(() => {
    try {
      return localStorage.getItem(STORAGE_KEY) === 'true';
    } catch {
      return false;
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, isAdminAuthenticated ? 'true' : 'false');
    } catch {}
  }, [isAdminAuthenticated]);

  const getExpectedPassword = (): string => {
    // Configure via .env as VITE_ADMIN_PASSWORD="your-strong-password"
    return (import.meta as any).env?.VITE_ADMIN_PASSWORD || 'admin123';
  };

  const login = (password: string): boolean => {
    if (password === getExpectedPassword()) {
      setIsAdminAuthenticated(true);
      return true;
    }
    return false;
  };

  const logout = () => setIsAdminAuthenticated(false);

  const value = useMemo<AuthContextValue>(
    () => ({ isAdminAuthenticated, login, logout, expectedHint: (import.meta as any).env?.VITE_ADMIN_PASSWORD ? 'env' : 'default' }),
    [isAdminAuthenticated]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export function useAuth(): AuthContextValue {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}


