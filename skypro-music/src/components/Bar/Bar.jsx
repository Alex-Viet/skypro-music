import { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { formatSecondsToTime } from '../../utils/utils';
import {
  playTrack,
  stopTrack,
  playNextTrack,
} from '../../store/slices/playlistSlice';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { TrackPlay } from './TrackPlay';
import { VolumeBar } from './VolumeBar';
import * as S from './Bar.styles';

export const AudioPlayer = () => {
  const [isLooping, setIsLooping] = useState(false);

  const currentTrack = useSelector((state) => state.playlist.currentTrack);

  const audioRef = useRef(null);
  const dispatch = useDispatch();

  // запуск/пауза
  const isPlaying = useSelector((state) => state.playlist.isPlaying);

  const handleStart = () => {
    audioRef.current.play();
    dispatch(playTrack(true));
  };

  const handleStop = () => {
    audioRef.current.pause();
    dispatch(stopTrack(false));
  };

  const togglePlay = isPlaying ? handleStop : handleStart;

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.currentTime = 0;

      audioRef.current.onloadeddata = () => {
        handleStart();
      };
    }
  }, [currentTrack]);

  // автоповтор трека
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

      const updateTime = () => {
        if (audioRef.current) {
          setCurrentTime(audioRef.current.currentTime);
        }
      };

      audioRef.current.addEventListener('timeupdate', updateTime);

      return () => {
        if (audioRef.current) {
          audioRef.current.removeEventListener('timeupdate', updateTime);
        }
      };
    }
    return null;
  }, [currentTrack]);

  const handleProgressBarChange = (event) => {
    const newTime = parseFloat(event.target.value);
    setCurrentTime(newTime);
    if (audioRef.current) {
      audioRef.current.currentTime = newTime;
    }
  };

  // функция перемотки трека
  const rewindTrack = (value) => {
    if (audioRef.current) {
      audioRef.current.currentTime = value;
    }
    setCurrentTime(value);
  };

  // регулятор громкости
  const [volume, setVolume] = useState(0.5);

  const handleVolumeBarChange = (event) => {
    setVolume(event.target.value);
  };

  if (audioRef.current) {
    audioRef.current.volume = parseFloat(volume);
  }

  return (
    <S.BarContent>
      <audio
        controls
        src={currentTrack && currentTrack.track_file}
        ref={audioRef}
        style={{ display: 'none' }}
        onEnded={() => dispatch(playNextTrack())}
      >
        <track kind="captions" />
      </audio>
      <S.BarPlayerTime>
        {formatSecondsToTime(currentTime)}
        {' '}
        /
        {' '}
        {Number.isNaN(duration) ? '00:00' : formatSecondsToTime(duration)}
      </S.BarPlayerTime>
      <ProgressBar
        currentTime={currentTime}
        duration={duration}
        handleProgressBarChange={handleProgressBarChange}
      />

      <S.BarPlayerBlock>
        <S.BarPlayer>
          <PlayerControls
            togglePlay={togglePlay}
            isPlaying={isPlaying}
            toggleLoop={toggleLoop}
            isLooping={isLooping}
            currentTrack={currentTrack}
            currentTime={currentTime}
            rewindTrack={rewindTrack}
          />

          <S.PlayerTrackPlay>
            <TrackPlay currentTrack={currentTrack} />

            <S.TrackPlayLikeDis style={{ visibility: 'hidden' }}>
              <S.TrackPlayLike className="_btn-icon">
                <S.TrackPlayLikeSvg alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackPlayLikeSvg>
              </S.TrackPlayLike>
              <S.TrackPlayDislike className="_btn-icon">
                <S.TrackPlayDislikeSvg alt="dislike">
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                </S.TrackPlayDislikeSvg>
              </S.TrackPlayDislike>
            </S.TrackPlayLikeDis>
          </S.PlayerTrackPlay>
        </S.BarPlayer>
        <S.BarVolumeBlock>
          <VolumeBar
            volume={volume}
            handleVolumeBarChange={handleVolumeBarChange}
          />
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
};
