import './MainNav.css';
import { useState } from 'react';
import NavBurger from './MainNavBurger/NavBurger';
import NavLogo from './MainNavLogo/NavLogo';
import NavMenu from './MainNavMenu/NavMenu';

export default function MainNav() {
  const [isVisible, setIsVisible] = useState(true);

  const toggleVisibility = () => {
    setIsVisible(!isVisible);
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      toggleVisibility();
    }
  };

  return (
    <nav className="main__nav nav">
      <NavLogo />
      <NavBurger
        toggleVisibility={toggleVisibility}
        handleKeyPress={handleKeyPress}
      />
      {isVisible && <NavMenu />}
    </nav>
  );
}
