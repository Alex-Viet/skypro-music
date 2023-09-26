import { formatSecondsToTime } from '../../utils/utils';
import * as S from './Bar.styles';
import { PlayerControls } from './PlayerControls';
import { ProgressBar } from './ProgressBar';
import { TrackPlay } from './TrackPlay';
import { VolumeBar } from './VolumeBar';

export const AudioPlayer = ({ currentTrack,
  isPlaying,
  isLooping,
  audioRef,
  togglePlay,
  toggleLoop,
  currentTime,
  duration,
  handleProgressBarChange,
  volume,
  handleVolumeBarChange }) => {
  return (
    <S.BarContent>
      <audio
        controls
        src={currentTrack ? currentTrack.track_file : null}
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
          <VolumeBar volume={volume} handleVolumeBarChange={handleVolumeBarChange} />

        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
};
