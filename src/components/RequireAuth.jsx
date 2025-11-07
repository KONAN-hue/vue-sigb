import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/useAuth';

export default function RequireAuth({ children, allowedRoles }) {
  const { user } = useAuth();

  if (!user?.isLoggedIn) {
    // Not logged in -> go to login
    return <Navigate to="/login" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(user.role)) {
    // Logged in but not authorized -> redirect to home (or a 403 page)
    return <Navigate to="/" replace />;
  }

  return children;
}
