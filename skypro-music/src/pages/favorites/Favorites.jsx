import * as S from '../../components/Playlist/Playlist.styles';
import { PlaylistHeader } from '../../components/Playlist/PlaylistHeader';
import { Track } from '../../components/Track/Track';

export const Favorites = ({ trackListError }) => {
  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <Track trackListError={trackListError} />
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
};
