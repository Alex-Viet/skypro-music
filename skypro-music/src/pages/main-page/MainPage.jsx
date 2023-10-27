import { Outlet, useLocation, useParams } from 'react-router-dom';
import * as S from './MainPage.styles';
import { MainNav } from '../../components/MainNav/MainNav';
import { Sidebar } from '../../components/Sidebar/Sidebar';
import { Search } from '../../components/Search/Search';
import { useGetCategoryQuery } from '../../services/tracks';

export function MainPage({ isLoading }) {
  const params = useParams();
  const { data } = useGetCategoryQuery({ id: params.id });
  const name = data?.name || '';
  const { pathname } = useLocation();
  let title = 'Треки';

  if (pathname === '/favorites') {
    title = 'Мои треки';
  }

  if (pathname === `/category/${params.id}`) {
    title = name;
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
