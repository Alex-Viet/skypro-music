import * as S from '../MainNav.styles';

export default function NavMenu() {
  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink href="!#">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="!#">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink href="../signin.html">Войти</S.MenuLink>
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}
