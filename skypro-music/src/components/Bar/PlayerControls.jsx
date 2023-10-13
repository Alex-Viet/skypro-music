import { useDispatch } from 'react-redux';
import { playNextTrack, playPrevTrack } from '../../store/slices/playlistSlice';
import * as S from './PlayerControls.styles';

export function PlayerControls({
  togglePlay,
  isPlaying,
  toggleLoop,
  isLooping,
  currentTrack,
  currentTime,
  rewindTrack,
}) {
  const dispatch = useDispatch();

  const handleNotRealized = () => {
    alert('Еще не реализовано');
  };

  const handleNextTrack = () => {
    dispatch(playNextTrack(currentTrack.id));
  };

  const handlePreviousTrack = () => {
    if (currentTime > 5) {
      rewindTrack(0);
    } else {
      dispatch(playPrevTrack(currentTrack.id));
    }
  };

  return (
    <S.PlayerControls>
      <S.PlayerBtnPrev className="_btn" onClick={handlePreviousTrack}>
        <S.PlayerBtnPrevSvg alt="prev">
          <use xlinkHref="img/icon/sprite.svg#icon-prev" />
        </S.PlayerBtnPrevSvg>
      </S.PlayerBtnPrev>
      <S.PlayerBtnPlay className="_btn" onClick={togglePlay}>
        <S.PlayerBtnPlaySvg alt="play">
          {isPlaying ? (
            <svg
              width="15"
              height="19"
              viewBox="0 0 15 19"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="5" height="19" />
              <rect x="10" width="5" height="19" />
            </svg>
          ) : (
            <svg
              width="15"
              height="20"
              viewBox="0 0 15 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M15 10L-1.01012e-06 0.47372L-1.84293e-06 19.5263L15 10Z" />
            </svg>
          )}
        </S.PlayerBtnPlaySvg>
      </S.PlayerBtnPlay>
      <S.PlayerBtnNext className="_btn" onClick={handleNextTrack}>
        <S.PlayerBtnNextSvg alt="next">
          <use xlinkHref="img/icon/sprite.svg#icon-next" />
        </S.PlayerBtnNextSvg>
      </S.PlayerBtnNext>
      <S.PlayerBtnRepeat className="_btn-icon" onClick={toggleLoop}>
        <S.PlayerBtnRepeatSvg alt="repeat" $isLooping={isLooping}>
          <use xlinkHref="img/icon/sprite.svg#icon-repeat" />
        </S.PlayerBtnRepeatSvg>
      </S.PlayerBtnRepeat>
      <S.PlayerBtnShuffle className="_btn-icon" onClick={handleNotRealized}>
        <S.PlayerBtnShuffleSvg alt="shuffle">
          <use xlinkHref="img/icon/sprite.svg#icon-shuffle" />
        </S.PlayerBtnShuffleSvg>
      </S.PlayerBtnShuffle>
    </S.PlayerControls>
  );
}
