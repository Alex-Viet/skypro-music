import { useEffect, useState } from 'react';
import * as S from './App.styles';
import Bar from './components/Bar/Bar';
import CenterBlock from './components/CenterBlock/CenterBlock';
import MainNav from './components/MainNav/MainNav';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <S.GlobalStyles />
      <S.Wrapper>
        <S.Container>
          <S.Main>
            <MainNav />
            <CenterBlock isLoading={isLoading} />
            <Sidebar isLoading={isLoading} />
          </S.Main>
          <S.Bar>
            <Bar isLoading={isLoading} />
          </S.Bar>
          <footer />
        </S.Container>
      </S.Wrapper>
    </>
  );
}

export default App;
