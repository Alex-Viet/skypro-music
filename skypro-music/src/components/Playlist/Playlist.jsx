import './Playlist.css';

export function getPlaylistNumber(number) {
  return `img/playlist${number}.png`;
}

function Playlist({ number }) {
  return (
    <div className="sidebar__item">
      <a className="sidebar__link" href="!#">
        <img
          className="sidebar__img"
          src={getPlaylistNumber(number)}
          alt="day's playlist"
        />
      </a>
    </div>
  );
}

export default Playlist;
