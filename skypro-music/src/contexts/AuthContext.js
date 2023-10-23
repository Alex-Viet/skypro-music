import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState('');
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/');
  };

  const logout = async () => {
    setUser(null);
    localStorage.clear();
    await new Promise((resolve) => {
      setTimeout(resolve, 100);
    });
    navigate('/login');
  };

  const userContext = useMemo(
    () => ({
      user,
      login,
      logout,
    }),
    [user, login, logout],
  );

  return (
    <AuthContext.Provider value={userContext}>{children}</AuthContext.Provider>
  );
}
