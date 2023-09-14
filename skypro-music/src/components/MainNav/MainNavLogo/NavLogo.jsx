import { Link } from 'react-router-dom';
import * as S from '../MainNav.styles';

export default function NavLogo() {
  return (
    <S.NavLogo>
      <Link to="/">
        <S.LogoImage src="img/logo.png" alt="logo" />
      </Link>
    </S.NavLogo>
  );
}
