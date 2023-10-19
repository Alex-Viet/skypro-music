import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTracks } from './api/tracks';
import GlobalStyles from './App.styles';
import { AppRoutes } from './Routes';
import * as S from './pages/main-page/MainPage.styles';
import { AudioPlayer } from './components/Bar/Bar';
import { AuthProvider } from './contexts/AuthContext';
import { addTracks } from './store/slices/playlistSlice';

export function App() {
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
            <AppRoutes isLoading={isLoading} trackListError={trackListError} />

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
