import { useAuth } from '../../contexts/AuthContext';
import * as S from './MainNav.styles';

export function NavMenu({ setCurrentTrack }) {
  const { user, login, logout } = useAuth();

  const handleLogin = () => login();
  const handleLogout = () => {
    logout();
    setCurrentTrack(null);
  };

  return (
    <S.NavMenu>
      <S.MenuList>
        <S.MenuItem>
          <S.MenuLink to="/">Главное</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          <S.MenuLink to="/favorites">Мой плейлист</S.MenuLink>
        </S.MenuItem>
        <S.MenuItem>
          {localStorage.getItem('user') ? (
            <S.MenuLink user={user} onClick={handleLogout}>
              Выйти
            </S.MenuLink>
          ) : (
            <S.MenuLink user={user} onClick={handleLogin}>
              Войти
            </S.MenuLink>
          )}
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}
