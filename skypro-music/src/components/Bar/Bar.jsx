import { useEffect, useRef, useState } from 'react';
import { formatSecondsToTime } from '../../utils/utils';
import * as S from './Bar.styles';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { TrackPlay } from './TrackPlay';
import { VolumeBar } from './VolumeBar';

export const AudioPlayer = ({ currentTrack }) => {
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
          />

          <S.PlayerTrackPlay>
            <TrackPlay currentTrack={currentTrack} />

            <S.TrackPlayLikeDis>
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
