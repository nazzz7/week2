import React from 'react';
import { Navigate } from 'react-router-dom';

/**
 * PrivateRoute Component
 * - Protects routes that require authentication.
 * - Redirects unauthenticated users to the login page.
 *
 * @param {object} props - The component's props.
 * @param {ReactNode} props.children - The child components to render if authenticated.
 * @returns {ReactNode} - The rendered component or redirection.
 */
const PrivateRoute = ({ children }) => {
  // Replace with your own authentication logic
  const isAuthenticated = !!localStorage.getItem('token'); // Check if a token exists in localStorage

  return isAuthenticated ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
