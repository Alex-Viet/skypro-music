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
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);

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
    setCurrentTrack(null);
    navigate('/login', { replace: true });
  };

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
            setCurrentTrack={setCurrentTrack}
          />

          {currentTrack ? (
            <S.Bar>
              <audio
                controls
                src={currentTrack ? currentTrack.track_file : null}
              >
                <track kind="captions" />
              </audio>
              <Bar currentTrack={currentTrack} />
            </S.Bar>
          ) : null}
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
