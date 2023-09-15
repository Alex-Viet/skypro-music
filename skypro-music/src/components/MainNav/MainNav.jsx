import { useState } from 'react';
import * as S from './MainNav.styles';
import { NavBurger } from './NavBurger';
import { NavLogo } from './NavLogo';
import { NavMenu } from './NavMenu';

export function MainNav({ setCurrentTrack }) {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  return (
    <S.MainNav>
      <NavLogo />
      <NavBurger toggleVisibility={toggleVisibility} />
      {isVisible && <NavMenu setCurrentTrack={setCurrentTrack} />}
    </S.MainNav>
  );
}
