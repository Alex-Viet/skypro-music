import { useParams } from 'react-router-dom';
import { useGetCategoryQuery } from '../../services/tracks';
import * as S from '../../components/Playlist/Playlist.styles';
import { PlaylistHeader } from '../../components/Playlist/PlaylistHeader';
import { Track } from '../../components/Track/Track';

export function Category({ trackListError }) {
  const params = useParams();
  const { data } = useGetCategoryQuery({ id: params.id });
  const categoryTracks = data?.items || [];

  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <Track trackListError={trackListError} categoryTracks={categoryTracks} />
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
}
