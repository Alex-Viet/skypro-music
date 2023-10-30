import { useSelector } from 'react-redux';
import * as S from '../../components/Playlist/Playlist.styles';
import { PlaylistHeader } from '../../components/Playlist/PlaylistHeader';
import { Track } from '../../components/Track/Track';
import { useGetFavoriteTracksQuery } from '../../services/tracks';

export const Favorites = ({ trackListError }) => {
  const token = useSelector((state) => state.auth.access);
  const { data = [], isLoading } = useGetFavoriteTracksQuery(token);
  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <Track
          trackListError={trackListError}
          tracks={data}
          isLoading={isLoading}
        />
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
};
