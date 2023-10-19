import * as S from '../../components/Playlist/Playlist.styles';
import { Search } from '../../components/Search/Search';

export const Favorites = () => {
  return (
    <S.MainPlaylist>
      <Search />

      <S.PlaylistTitle>Мои треки</S.PlaylistTitle>
      <S.PlaylistContent>
        <S.ContentTitle>
          <S.ColTrackName>Трек</S.ColTrackName>
          <S.ColAuthor>ИСПОЛНИТЕЛЬ</S.ColAuthor>
          <S.ColAlbum>АЛЬБОМ</S.ColAlbum>
          <S.ColTrackTime>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.ColTrackTime>
        </S.ContentTitle>
        <S.ContentPlaylist>
          <div>Список треков</div>
        </S.ContentPlaylist>
      </S.PlaylistContent>
    </S.MainPlaylist>
  );
};
