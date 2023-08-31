import * as S from '../MainNav.styles';

export default function NavBurger({ toggleVisibility }) {
  return (
    <S.NavBurger onClick={toggleVisibility}>
      <S.BurgerLine />
      <S.BurgerLine />
      <S.BurgerLine />
    </S.NavBurger>
  );
}
