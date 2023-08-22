import Playlist from '../Playlist/Playlist';
import './Sidebar.css';

function Sidebar({ isLoading }) {
  return (
    <div className="main__sidebar sidebar">
      <div className="sidebar__personal">
        <p className="sidebar__personal-name">Sergey.Ivanov</p>
        <div className="sidebar__icon">
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </div>
      </div>
      <div className="sidebar__block">
        <div className="sidebar__list">
          <Playlist number="01" isLoading={isLoading} />
          <Playlist number="02" isLoading={isLoading} />
          <Playlist number="03" isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
