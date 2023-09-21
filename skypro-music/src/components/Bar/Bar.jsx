import { useEffect, useRef, useState } from 'react';
import * as S from './Bar.styles';
import { PlayerControls } from './PlayerControls';
import { TrackPlay } from './TrackPlay';

export function Bar({ currentTrack }) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);

  // Audio-player
  const audioRef = useRef(null);

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
      // handleStart();        ВЕРНУТЬ ОБРАТНО!!!!!
    }
  }, [currentTrack]);

  const toggleLoop = () => {
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
      setIsLooping(!isLooping);
    }
  };

  return (
    <S.BarContent>
      <audio
        controls
        src={currentTrack ? currentTrack.track_file : null}
        ref={audioRef}
      >
        <track kind="captions" />
      </audio>
      <S.BarPlayerProgress />
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
          <S.VolumeContent>
            <S.VolumeImage>
              <S.VolumeSvg>
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
              </S.VolumeSvg>
            </S.VolumeImage>
            <S.VolumeProgress>
              <S.VolumeProgressLine
                className="_btn"
                type="range"
                name="range"
              />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}
