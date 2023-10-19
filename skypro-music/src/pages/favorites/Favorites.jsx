import * as S from '../../components/CenterBlock/CenterBlock.styles';
import { Search } from '../../components/Search/Search';

export const Favorites = () => {
  return (
    <S.MainCenterBlock>
      <Search />

      <S.CenterBlockTitle>Мои треки</S.CenterBlockTitle>
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
          <div>Список треков</div>
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
};
