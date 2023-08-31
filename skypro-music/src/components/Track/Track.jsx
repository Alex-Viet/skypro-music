/* eslint-disable object-curly-newline */
import Skeleton from '../Skeleton/Skeleton';
import * as S from './Track.styles';

export default function Track({
  track,
  extra,
  author,
  album,
  time,
  isLoading,
}) {
  return (
    <S.PlaylistItem>
      {isLoading ? (
        <S.PlaylistTrackSkeleton>
          <S.TrackTitle>
            <Skeleton width="51px" height="51px" margin="17px" />
            <div>
              <Skeleton width="356px" height="19px" />
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <Skeleton width="271px" height="19px" />
          </S.TrackAuthor>
          <S.TrackAlbum>
            <Skeleton width="305px" height="19px" />
          </S.TrackAlbum>
        </S.PlaylistTrackSkeleton>
      ) : (
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <div>
              <S.TrackTitleLink href="!#">
                {track}
                <S.TrackTitleSpan>{extra}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="!#">{author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="!#">{album}</S.TrackAlbumLink>
          </S.TrackAlbum>
          <div>
            <S.TrackTimeSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </S.TrackTimeSvg>
            <S.TrackTimeText>{time}</S.TrackTimeText>
          </div>
        </S.PlaylistTrack>
      )}
    </S.PlaylistItem>
  );
}
