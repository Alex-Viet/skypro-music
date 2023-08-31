import * as S from './FilterPopup.styles';

function FilterPopupYear() {
  return (
    <S.FilterPopupYear>
      <S.PopupList>
        <li key="1">
          <S.PopupTextLink href="#!">
            1992
          </S.PopupTextLink>
        </li>
        <li key="2">
          <S.PopupTextLink href="#!">
            1993
          </S.PopupTextLink>
        </li>
        <li key="3">
          <S.PopupTextLink href="#!">
            1994
          </S.PopupTextLink>
        </li>
      </S.PopupList>
    </S.FilterPopupYear>
  );
}

export default FilterPopupYear;
