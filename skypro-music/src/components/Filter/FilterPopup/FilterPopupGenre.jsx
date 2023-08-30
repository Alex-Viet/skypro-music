import * as S from './FilterPopup.styles';

function FilterPopupGenre() {
  return (
    <S.FilterPopupGenre>
      <S.PopupList>
        <li key="1">
          <S.PopupTextLink href="#!">
            Рок
          </S.PopupTextLink>
        </li>
        <li key="2">
          <S.PopupTextLink href="#!">
            Хип-хоп
          </S.PopupTextLink>
        </li>
        <li key="3">
          <S.PopupTextLink href="#!">
            Поп-музыка
          </S.PopupTextLink>
        </li>
        <li key="4">
          <S.PopupTextLink href="#!">
            Техно
          </S.PopupTextLink>
        </li>
        <li key="5">
          <S.PopupTextLink href="#!">
            Инди
          </S.PopupTextLink>
        </li>
      </S.PopupList>
    </S.FilterPopupGenre>
  );
}

export default FilterPopupGenre;
