import * as S from './Search.styles';

export default function Search() {
  return (
    <S.CenterBlockSearch>
      <S.SearchSvg>
        <use xlinkHref="img/icon/sprite.svg#icon-search" />
      </S.SearchSvg>
      <S.SearchTextInput type="search" placeholder="Поиск" name="search" />
    </S.CenterBlockSearch>
  );
}
