import * as S from '../../components/Playlist/Playlist.styles';
import { PlaylistHeader } from '../../components/Playlist/PlaylistHeader';
import { Track } from '../../components/Track/Track';

export const Favorites = ({ isLoading, trackListError }) => {
  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <Track isLoading={isLoading} trackListError={trackListError} />
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
};
