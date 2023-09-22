import * as S from './ProgressBar.styles';

export const ProgressBar = ({ currentTime, duration, handleProgressBarChange }) => {
  return (
    <S.ProgressInput
      type="range"
      min={0}
      max={duration || 'Infinity'}
      value={currentTime}
      step={0.01}
      onChange={handleProgressBarChange}
      $color="#ff0000"
    />
  );
};
