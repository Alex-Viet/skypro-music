import * as S from './MainPage.styles';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { MainNav } from '../../components/MainNav/MainNav';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function MainPage({ tracks, isLoading, setCurrentTrack }) {
  return (
    <S.Main>
      <MainNav setCurrentTrack={setCurrentTrack} />
      <CenterBlock
        isLoading={isLoading}
        tracks={tracks}
        setCurrentTrack={setCurrentTrack}
      />
      <Sidebar isLoading={isLoading} />
    </S.Main>
  );
}
