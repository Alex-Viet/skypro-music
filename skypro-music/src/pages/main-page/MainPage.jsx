import * as S from './MainPage.styles';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { MainNav } from '../../components/MainNav/MainNav';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function MainPage({ tracks, isLoading }) {
  return (
    <S.Main>
      <MainNav />
      <CenterBlock isLoading={isLoading} tracks={tracks} />
      <Sidebar isLoading={isLoading} />
    </S.Main>
  );
}
