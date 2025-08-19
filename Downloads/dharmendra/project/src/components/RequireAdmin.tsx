import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const RequireAdmin: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAdminAuthenticated } = useAuth();
  const location = useLocation();
  if (!isAdminAuthenticated) {
    return <Navigate to="/login" replace state={{ from: location.pathname }} />;
  }
  return <>{children}</>;
};

export default RequireAdmin;


