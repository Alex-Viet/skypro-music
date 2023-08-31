import { useState } from 'react';
import * as S from './MainNav.styles';
import NavBurger from './MainNavBurger/NavBurger';
import NavLogo from './MainNavLogo/NavLogo';
import NavMenu from './MainNavMenu/NavMenu';

export default function MainNav() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <S.MainNav>
      <NavLogo />
      <NavBurger toggleVisibility={toggleVisibility} />
      {isVisible && <NavMenu />}
    </S.MainNav>
  );
}
