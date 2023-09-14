import * as S from './CenterBlock.styles';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import { Track } from '../Track/Track';

export default function CenterBlock({ isLoading, tracks }) {
  return (
    <S.MainCenterBlock>
      <Search />

      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      <Filter />

      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        <S.ContentPlaylist>
          <Track
            track="Guilt"
            author="Nero"
            album="Welcome Reality"
            time="4:44"
            isLoading={isLoading}
            tracks={tracks}
          />
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
}
