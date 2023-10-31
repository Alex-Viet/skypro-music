import { useParams } from 'react-router-dom';
import { useGetCategoryQuery } from '../../services/tracks';
import * as S from '../../components/Playlist/Playlist.styles';
import { PlaylistHeader } from '../../components/Playlist/PlaylistHeader';
import { Track } from '../../components/Track/Track';

export function Category({ trackListError }) {
  const params = useParams();
  const { data, isLoading } = useGetCategoryQuery({ id: params.id });
  const categoryTracks = data?.items || [];

  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <Track
          trackListError={trackListError}
          tracks={categoryTracks}
          isLoading={isLoading}
        />
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
}
