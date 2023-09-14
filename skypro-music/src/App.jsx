import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTracks } from './api';
import GlobalStyles from './App.styles';
import { AppRoutes } from './Routes';

export function App() {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function handleGetTracks() {
      await getTracks().then((data) => {
        setTracks(data);
      });
    }

    handleGetTracks();
  }, []);

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
        tracks={tracks}
      />
    </>
  );
}
