import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const AuthContext = createContext({});

export function useAuth() {
  return useContext(AuthContext);
}

function getAuthFromLocalStorage() {
  try {
    return JSON.parse(localStorage.getItem('user'));
  } catch (error) {
    return null;
  }
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(getAuthFromLocalStorage());
  const navigate = useNavigate();

  const login = (userData) => {
    setUser(userData);
    localStorage.setItem('user', JSON.stringify(userData));
    navigate('/', { replace: true });
  };

  const logout = () => {
    setUser(null);
    localStorage.clear();
    navigate('/login', { replace: true });
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
