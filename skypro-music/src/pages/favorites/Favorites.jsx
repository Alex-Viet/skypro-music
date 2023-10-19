import * as S from '../../components/Playlist/Playlist.styles';
import { PlaylistHeader } from '../../components/Playlist/PlaylistHeader';

export const Favorites = () => {
  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <div>Список треков</div>
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
};
