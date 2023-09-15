import { formatTrackTime } from '../../utils/utils';
import { Skeleton } from '../Skeleton/Skeleton';
import * as S from './Track.styles';

export function Track({ isLoading, tracks, setCurrentTrack }) {
  return (
    <S.PlaylistItem>
      {isLoading ? (
        <>
          <S.PlaylistTrackSkeleton>
            <S.TrackTitle>
              <Skeleton width="51px" height="51px" margin="0 17px 12px 0" />
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
          <S.PlaylistTrackSkeleton>
            <S.TrackTitle>
              <Skeleton width="51px" height="51px" margin="0 17px 12px 0" />
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
          <S.PlaylistTrackSkeleton>
            <S.TrackTitle>
              <Skeleton width="51px" height="51px" margin="0 17px 12px 0" />
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
          <S.PlaylistTrackSkeleton>
            <S.TrackTitle>
              <Skeleton width="51px" height="51px" margin="0 17px 12px 0" />
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
        </>
      ) : (
        tracks.map((track) => {
          return (
            <S.PlaylistTrack key={track.id}>
              <S.TrackTitle>
                <S.TrackTitleImage>
                  <S.TrackTitleSvg alt="music">
                    <use xlinkHref="img/icon/sprite.svg#icon-note" />
                  </S.TrackTitleSvg>
                </S.TrackTitleImage>
                <div>
                  <S.TrackTitleLink onClick={() => setCurrentTrack(track)}>
                    {track.name}
                    <S.TrackTitleSpan />
                  </S.TrackTitleLink>
                </div>
              </S.TrackTitle>
              <S.TrackAuthor>
                <S.TrackAuthorLink href="!#">{track.author}</S.TrackAuthorLink>
              </S.TrackAuthor>
              <S.TrackAlbum>
                <S.TrackAlbumLink href="!#">{track.album}</S.TrackAlbumLink>
              </S.TrackAlbum>
              <div>
                <S.TrackTimeSvg alt="time">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </S.TrackTimeSvg>
                <S.TrackTimeText>
                  {formatTrackTime(track.duration_in_seconds)}
                </S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          );
        })
      )}
    </S.PlaylistItem>
  );
}
