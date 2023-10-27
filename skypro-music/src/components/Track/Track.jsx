import { useDispatch, useSelector } from 'react-redux';
import { useLocation, useParams } from 'react-router-dom';
import { setCurrentTrack, setPlaylist } from '../../store/slices/playlistSlice';
import { formatSecondsToTime } from '../../utils/utils';
import { Skeleton } from '../Skeleton/Skeleton';
import {
  useGetFavoriteTracksQuery,
  useAddFavoriteTracksMutation,
  useDeleteFavoriteTracksMutation,
} from '../../services/tracks';
import * as S from './Track.styles';

export function Track({ trackListError, categoryTracks }) {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const params = useParams();

  const token = useSelector((state) => state.auth.access);
  const { data = [] } = useGetFavoriteTracksQuery(token);
  const [addFavoriteTrack] = useAddFavoriteTracksMutation();
  const [deleteFavoriteTrack] = useDeleteFavoriteTracksMutation();
  const favoriteTracks = data;
  const favTrackId = favoriteTracks.map((el) => el.id);

  let tracks = useSelector((state) => state.playlist.tracks);
  const isPlaying = useSelector((state) => state.playlist.isPlaying);
  const currentTrack = useSelector((state) => state.playlist.currentTrack);
  const isLoading = useSelector((state) => state.playlist.isLoading);
  const pageName = pathname === '/' ? 'Main' : 'Favorites';

  if (pageName === 'Favorites') {
    tracks = favoriteTracks;
  }

  if (pathname === `/category/${params.id}`) {
    tracks = categoryTracks;
    console.log(tracks);
  }

  const toggleAddDeleteFavoriteTracks = async (track) => {
    if (favTrackId.includes(track.id)) {
      try {
        await deleteFavoriteTrack({ id: track.id, access: token }).unwrap();
      } catch (error) {
        console.log(error.message);
      }
    } else {
      try {
        await addFavoriteTrack({ id: track.id, access: token }).unwrap();
      } catch (error) {
        console.log(error.message);
      }
    }
  };

  const handleSetCurrentTrack = (elem) => {
    dispatch(setCurrentTrack(elem));
    if (pageName === 'Favorites') {
      dispatch(setPlaylist([...favoriteTracks]));
    } else if ((pathname === `/category/${params.id}`)) {
      dispatch(setPlaylist([...categoryTracks]));
    } else {
      dispatch(setPlaylist([...tracks]));
    }
  };

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
        tracks.length > 0 ? (
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
                      onClick={() => handleSetCurrentTrack(track)}
                    >
                      {track.name}
                      <S.TrackTitleSpan />
                    </S.TrackTitleLink>
                  </div>
                </S.TrackTitle>
                <S.TrackAuthor>
                  <S.TrackAuthorLink href="!#">
                    {track.author}
                  </S.TrackAuthorLink>
                </S.TrackAuthor>
                <S.TrackAlbum>
                  <S.TrackAlbumLink href="!#">{track.album}</S.TrackAlbumLink>
                </S.TrackAlbum>
                <div>
                  <S.TrackLikeSvg
                    alt="like"
                    onClick={() => toggleAddDeleteFavoriteTracks(track)}
                  >
                    <svg
                      width="14"
                      height="12"
                      viewBox="0 0 16 14"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="Vector 13">
                        <path
                          d="M8.36529 12.751C14.2458 9.25098 17.3111 3.96019 13.9565 1.51832C11.7563 -0.0832586 9.29718 1.19273 8.36529 2.00669H8.34378H8.34372H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34372H8.34378H8.36529Z"
                          fill={
                            favTrackId.includes(track.id)
                              ? '#B672FF'
                              : 'transparent'
                          }
                        />
                        <path
                          d="M8.34372 2.00669H8.36529C9.29718 1.19273 11.7563 -0.0832586 13.9565 1.51832C17.3111 3.96019 14.2458 9.25098 8.36529 12.751H8.34372M8.34378 2.00669H8.32221C7.39032 1.19273 4.93121 -0.0832586 2.73102 1.51832C-0.623552 3.96019 2.44172 9.25098 8.32221 12.751H8.34378"
                          stroke={
                            favTrackId.includes(track.id)
                              ? '#B672FF'
                              : 'transparent'
                          }
                        />
                      </g>
                    </svg>
                  </S.TrackLikeSvg>
                  <S.TrackTimeText>
                    {formatSecondsToTime(track.duration_in_seconds)}
                  </S.TrackTimeText>
                </div>
              </S.PlaylistTrack>
            );
          })
        ) : (
          <h3>Список пуст</h3>
        )
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
