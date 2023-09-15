import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTracks } from './api';
import GlobalStyles from './App.styles';
import { AppRoutes } from './Routes';
import * as S from './pages/main-page/MainPage.styles';
import { Bar } from './components/Bar/Bar';

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

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <AppRoutes
            user={user}
            onAuthButtonClick={user ? handleLogout : handleLogin}
            tracks={tracks}
            isLoading={isLoading}
          />
          <S.Bar>
            <Bar isLoading={isLoading} />
          </S.Bar>
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
