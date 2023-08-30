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
        <div className="skeleton__playlist-track">
          <S.TrackTitle>
            <Skeleton className="skeleton__track-title-image" />
            <div>
              <Skeleton className="skeleton__track-title-text" />
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <Skeleton className="skeleton__track-author" />
          </S.TrackAuthor>
          <S.TrackAlbum>
            <Skeleton className="skeleton-track__album" />
          </S.TrackAlbum>
        </div>
      ) : (
        <S.PlaylistTrack>
          <S.TrackTitle>
            <S.TrackTitleImage>
              <S.TrackTitleSvg alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </S.TrackTitleSvg>
            </S.TrackTitleImage>
            <div>
              <S.TrackTitleLink href="http://">
                {track}
                <S.TrackTitleSpan>{extra}</S.TrackTitleSpan>
              </S.TrackTitleLink>
            </div>
          </S.TrackTitle>
          <S.TrackAuthor>
            <S.TrackAuthorLink href="http://">{author}</S.TrackAuthorLink>
          </S.TrackAuthor>
          <S.TrackAlbum>
            <S.TrackAlbumLink href="http://">{album}</S.TrackAlbumLink>
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
