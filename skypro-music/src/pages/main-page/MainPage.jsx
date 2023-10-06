import * as S from './MainPage.styles';
import { CenterBlock } from '../../components/CenterBlock/CenterBlock';
import { MainNav } from '../../components/MainNav/MainNav';
import { Sidebar } from '../../components/Sidebar/Sidebar';

export function MainPage({ isLoading, setCurrentTrack, trackListError }) {
  return (
    <S.Main>
      <MainNav setCurrentTrack={setCurrentTrack} />
      <CenterBlock
        isLoading={isLoading}
        setCurrentTrack={setCurrentTrack}
        trackListError={trackListError}
      />
      <Sidebar isLoading={isLoading} setCurrentTrack={setCurrentTrack} />
    </S.Main>
  );
}
