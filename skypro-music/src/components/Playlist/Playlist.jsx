import Skeleton from '../Skeleton/Skeleton';
import './Playlist.css';

export function getPlaylistNumber(number) {
  return `img/playlist${number}.png`;
}

function Playlist({ number, isLoading }) {
  return (
    <div className="sidebar__item">
      {isLoading ? (
        <Skeleton className="skeleton__sidebar-item" />
      ) : (
        <a className="sidebar__link" href="!#">
          <img
            className="sidebar__img"
            src={getPlaylistNumber(number)}
            alt="day's playlist"
          />
        </a>
      )}
    </div>
  );
}

export default Playlist;
