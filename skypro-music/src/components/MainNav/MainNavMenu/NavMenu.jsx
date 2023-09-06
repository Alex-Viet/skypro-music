import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import * as S from '../MainNav.styles';

export default function NavMenu() {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  const handleLogin = () => setUser(localStorage.setItem('user', 'token'));
  const handleLogout = () => {
    setUser(localStorage.clear());
    navigate('/login', { replace: true });
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
        <S.MenuItem user={user}>
          {localStorage.getItem('user') ? (
            <S.MenuLink onClick={handleLogout}>Выйти</S.MenuLink>
          ) : (
            <S.MenuLink onClick={handleLogin}>Войти</S.MenuLink>
          )}
        </S.MenuItem>
      </S.MenuList>
    </S.NavMenu>
  );
}
