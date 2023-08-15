import './App.css';
import Bar from './components/Bar';
import CenterBlock from './components/CenterBlock';
import MainNav from './components/MainNav';
import Sidebar from './components/Sidebar';

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
