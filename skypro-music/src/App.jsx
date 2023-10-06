import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getTracks } from './api';
import GlobalStyles from './App.styles';
import { AppRoutes } from './Routes';
import * as S from './pages/main-page/MainPage.styles';
import { AudioPlayer } from './components/Bar/Bar';
import { AuthProvider } from './contexts/AuthContext';
import { addTracks } from './store/slices/playlistSlice';

export function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackListError, setTrackListError] = useState(null);

  const dispatch = useDispatch();

  // загрузка треков из апи
  useEffect(() => {
    async function handleGetTracks() {
      try {
        setTrackListError(null);
        await getTracks().then((data) => {
          dispatch(addTracks(data));
        });
      } catch (error) {
        setTrackListError(error.message);
      }
    }

    handleGetTracks();
  }, [dispatch]);

  // залогиниться и разлогиниться
  const handleLogin = () => setUser(localStorage.setItem('user', 'token'));
  const handleLogout = () => {
    setUser(localStorage.clear());
    setCurrentTrack(null);
    navigate('/login', { replace: true });
  };

  // таймер скелетонов
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalStyles />
      <AuthProvider>
        <S.Wrapper>
          <S.Container>
            <AppRoutes
              user={user}
              onAuthButtonClick={user ? handleLogout : handleLogin}
              isLoading={isLoading}
              setCurrentTrack={setCurrentTrack}
              trackListError={trackListError}
            />

            {currentTrack && (
              <S.Bar>
                <AudioPlayer currentTrack={currentTrack} />
              </S.Bar>
            )}
            <footer />
          </S.Container>
        </S.Wrapper>
      </AuthProvider>
    </>
  );
}
