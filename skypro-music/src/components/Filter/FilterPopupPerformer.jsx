import * as S from './FilterPopup.styles';

export function FilterPopupPerformer() {
  return (
    <S.FilterPopupPerformer>
      <S.PopupList>
        <li key="1">
          <S.PopupTextLink href="#!">Michael Jackson</S.PopupTextLink>
        </li>
        <li key="2">
          <S.PopupTextLink href="#!">Frank Sinatra</S.PopupTextLink>
        </li>
        <li key="3">
          <S.PopupTextLink href="#!">Calvin Harris</S.PopupTextLink>
        </li>
        <li key="4">
          <S.PopupTextLink href="#!">Zhu</S.PopupTextLink>
        </li>
        <li key="5">
          <S.PopupTextLink href="#!">Arctic Monkeys</S.PopupTextLink>
        </li>
      </S.PopupList>
    </S.FilterPopupPerformer>
  );
}
