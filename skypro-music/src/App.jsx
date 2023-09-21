import { useEffect, useState, useRef } from 'react';
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
  const [trackListError, setTrackListError] = useState(null);

  useEffect(() => {
    async function handleGetTracks() {
      try {
        setTrackListError(null);
        await getTracks().then((data) => {
          setTracks(data);
        });
      } catch (error) {
        setTrackListError(error.message);
      }
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

  // Audio-player
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    audioRef.current.play();
    setIsPlaying(true);
  };

  const handleStop = () => {
    audioRef.current.pause();
    setIsPlaying(false);
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
      handleStart();
    }
  }, [currentTrack]);

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
            trackListError={trackListError}
          />

          {currentTrack ? (
            <S.Bar>
              <audio
                controls
                src={currentTrack ? currentTrack.track_file : null}
                ref={audioRef}
              >
                <track kind="captions" />
              </audio>
              <Bar
                currentTrack={currentTrack}
                togglePlay={togglePlay}
                isPlaying={isPlaying}
              />
            </S.Bar>
          ) : null}
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
