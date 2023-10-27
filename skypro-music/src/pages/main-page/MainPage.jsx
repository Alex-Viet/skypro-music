import { Outlet, useLocation } from 'react-router-dom';
import * as S from './MainPage.styles';
import { MainNav } from '../../components/MainNav/MainNav';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Search } from '../../components/Search/Search';

export function MainPage({ isLoading }) {
  const { pathname } = useLocation();
  let title = 'Треки';

  if (pathname === '/favorites') {
    title = 'Мои треки';
  }

  if (pathname === '/category/1') {
    title = 'Классическая музыка';
  }

  if (pathname === '/category/2') {
    title = 'Электронная музыка';
  }

  if (pathname === '/category/3') {
    title = 'Рок музыка';
  }

  return (
    <S.Main>
      <MainNav />
      <S.MainPlaylist>
        <Search />
        <S.PlaylistTitle>{title}</S.PlaylistTitle>
        <Outlet />
      </S.MainPlaylist>
      <Sidebar isLoading={isLoading} />
    </S.Main>
  );
}
