import './App.css';
import Bar from './components/Bar/Bar';
import CenterBlock from './components/CenterBlock/CenterBlock';
import MainNav from './components/MainNav/MainNav';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="wrapper">
      <div className="container">
        <main className="main">
          <MainNav />
          <CenterBlock />
          <Sidebar />
        </main>
        <div className="bar">
          <Bar />
        </div>
        <footer className="footer" />
      </div>
    </div>
  );
}

export default App;
