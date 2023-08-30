import * as S from './Bar.styles';
import PlayerControls from './BarPlayerControls/PlayerControls';
import TrackPlay from './BarTrackPlay/TrackPlay';

function Bar({ isLoading }) {
  return (
    <S.BarContent>
      <S.BarPlayerProgress />
      <S.BarPlayerBlock>
        <S.BarPlayer>
          <PlayerControls />

          <S.PlayerTrackPlay>
            <TrackPlay isLoading={isLoading} />

            <S.TrackPlayLikeDis>
              <S.TrackPlayLike>
                <S.TrackPlayLikeSvg alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackPlayLikeSvg>
              </S.TrackPlayLike>
              <S.TrackPlayDislike>
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
              <S.VolumeProgressLine type="range" name="range" />
            </S.VolumeProgress>
          </S.VolumeContent>
        </S.BarVolumeBlock>
      </S.BarPlayerBlock>
    </S.BarContent>
  );
}

export default Bar;
