import { Outlet } from 'react-router-dom';
import * as S from './MainPage.styles';
import { MainNav } from '../../components/MainNav/MainNav';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function MainPage({ isLoading }) {
  return (
    <S.Main>
      <MainNav />
      <Outlet />
      <Sidebar isLoading={isLoading} />
    </S.Main>
  );
}
