import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getTracks } from './api';
import GlobalStyles from './App.styles';
import { AppRoutes } from './Routes';
import * as S from './pages/main-page/MainPage.styles';
import { AudioPlayer } from './components/Bar/Bar';
import { AuthProvider } from './contexts/AuthContext';
import { addTracks, setCurrentTrack } from './store/slices/playlistSlice';

export function App() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [trackListError, setTrackListError] = useState(null);

  const dispatch = useDispatch();

  const currentTrack = useSelector((state) => state.playlist.currentTrack);

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
    dispatch(setCurrentTrack(null));
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
              trackListError={trackListError}
            />

            {currentTrack && (
              <S.Bar>
                <AudioPlayer />
              </S.Bar>
            )}
            <footer />
          </S.Container>
        </S.Wrapper>
      </AuthProvider>
    </>
  );
}
