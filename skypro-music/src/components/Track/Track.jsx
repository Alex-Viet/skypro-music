import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { setCurrentTrack } from '../../store/slices/playlistSlice';
import { formatSecondsToTime } from '../../utils/utils';
import { Skeleton } from '../Skeleton/Skeleton';
import { useGetFavoriteTracksQuery } from '../../services/tracks';
import * as S from './Track.styles';

export function Track({ isLoading, trackListError }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

  const { data } = useGetFavoriteTracksQuery();

  let tracks;
  const isPlaying = useSelector((state) => state.playlist.isPlaying);
  const currentTrack = useSelector((state) => state.playlist.currentTrack);

  if (pathname === '/favorites') {
    tracks = data;
  } else {
    tracks = useSelector((state) => state.playlist.tracks);
  }

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
      ) : trackListError === null ? (
        tracks.map((track) => {
          return (
            <S.PlaylistTrack key={track.id}>
              <S.TrackTitle>
                <S.TrackTitleImage>
                  {currentTrack?.id !== track.id ? (
                    <S.TrackTitleSvg alt="music">
                      <use
                        xlinkHref={
                          isLoading ? '' : 'img/icon/sprite.svg#icon-note'
                        }
                      />
                    </S.TrackTitleSvg>
                  ) : (
                    <S.TrackTitleSvgActive alt="music" $isPlaying={isPlaying}>
                      <use xlinkHref="img/icon/sprite.svg#icon-dot" />
                    </S.TrackTitleSvgActive>
                  )}
                </S.TrackTitleImage>
                <div>
                  <S.TrackTitleLink
                    onClick={() => dispatch(setCurrentTrack(track))}
                  >
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
                  {formatSecondsToTime(track.duration_in_seconds)}
                </S.TrackTimeText>
              </div>
            </S.PlaylistTrack>
          );
        })
      ) : (
        <h3>
          Не удалось загрузить плейлист, попробуйте позже. Ошибка:
          {'  '}
          {trackListError}
        </h3>
      )}
    </S.PlaylistItem>
  );
}
