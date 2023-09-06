import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import GlobalStyles from './App.styles';
import AppRoutes from './routes';

function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'));
  const handleLogout = () => {
    setUser(localStorage.clear());
    navigate('/login', { replace: true });
  };

  return (
    <>
      <GlobalStyles />
      <AppRoutes
        user={user}
        onAuthButtonClick={user ? handleLogout : handleLogin}
      />
    </>
  );
}

export default App;
