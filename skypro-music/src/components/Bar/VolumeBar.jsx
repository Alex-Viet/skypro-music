import * as S from './VolumeBar.styles';

export const VolumeBar = ({ volume, handleVolumeBarChange }) => {
  return (
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
          min={0}
          max={1}
          step={0.01}
          value={volume}
          onChange={handleVolumeBarChange}
        />
      </S.VolumeProgress>
    </S.VolumeContent>
  );
};
