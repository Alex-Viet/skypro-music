import { useEffect, useState } from 'react';
import './App.css';
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
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <CenterBlock isLoading={isLoading} />
          <Sidebar isLoading={isLoading} />
        </main>
        <div className="bar">
          <Bar isLoading={isLoading} />
        </div>
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
