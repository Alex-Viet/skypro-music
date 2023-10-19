import * as S from './Playlist.styles';
import { Filter } from '../Filter/Filter';
import { Search } from '../Search/Search';
import { Track } from '../Track/Track';

export function Playlist({ isLoading, trackListError }) {
  return (
    <S.MainPlaylist>
      <Search />

      <S.PlaylistTitle>Треки</S.PlaylistTitle>
      <Filter />

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
          <Track isLoading={isLoading} trackListError={trackListError} />
        </S.ContentPlaylist>
      </S.PlaylistContent>
    </S.MainPlaylist>
  );
}
