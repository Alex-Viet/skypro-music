import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getTracks } from './api';
import GlobalStyles from './App.styles';
import { AppRoutes } from './Routes';
import * as S from './pages/main-page/MainPage.styles';
import { AudioPlayer } from './components/Bar/Bar';

export function App() {
  const [user, setUser] = useState(null);
  const [tracks, setTracks] = useState([]);
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  const [currentTrack, setCurrentTrack] = useState(null);
  const [trackListError, setTrackListError] = useState(null);

  // загрузка треков из апи
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

  // Audio player
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  const audioRef = useRef(null);

  // запуск/пауза
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

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  // прогресс трека
  const [currentTime, setCurrentTime] = useState(0);
  let duration = 0;

  if (audioRef.current) {
    duration = audioRef.current.duration;
  }

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.autoplay = true;
      audioRef.current.addEventListener('timeupdate', () => {
        setCurrentTime(audioRef.current.currentTime);
        return () => {
          audioRef.current.removeEventListener('timeupdate', () => {
            setCurrentTime(audioRef.current.currentTime);
          });
        };
      });
    }
  });

  const handleProgressBarChange = (event) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // звук
  const [volume, setVolume] = useState(0.5);

  const handleVolumeBarChange = (event) => {
    setVolume(event.target.value);
  };

  if (audioRef.current) {
    audioRef.current.volume = parseFloat(volume);
  }

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
              <AudioPlayer
                currentTrack={currentTrack}
                isPlaying={isPlaying}
                isLooping={isLooping}
                audioRef={audioRef}
                togglePlay={togglePlay}
                toggleLoop={toggleLoop}
                currentTime={currentTime}
                duration={duration}
                handleProgressBarChange={handleProgressBarChange}
                volume={volume}
                handleVolumeBarChange={handleVolumeBarChange}
              />
            </S.Bar>
          ) : null}
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}
