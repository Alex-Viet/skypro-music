/* eslint-disable object-curly-newline */
import Skeleton from '../Skeleton/Skeleton';
import './Track.css';

export default function Track({
  track,
  extra,
  author,
  album,
  time,
  isLoading,
}) {
  return (
    <div className="playlist__item">
      {isLoading ? (
        <div className="skeleton__playlist-track">
          <div className="track__title">
            <Skeleton className="skeleton__track-title-image" />
            <div className="track__title-text">
              <Skeleton className="skeleton__track-title-text" />
            </div>
          </div>
          <div className="track__author">
            <Skeleton className="skeleton__track-author" />
          </div>
          <div className="track__album">
            <Skeleton className="skeleton-track__album" />
          </div>
        </div>
      ) : (
        <div className="playlist__track track">
          <div className="track__title">
            <div className="track__title-image">
              <svg className="track__title-svg" alt="music">
                <use xlinkHref="img/icon/sprite.svg#icon-note" />
              </svg>
            </div>
            <div className="track__title-text">
              <a className="track__title-link" href="http://">
                {track}
                <span className="track__title-span">{extra}</span>
              </a>
            </div>
          </div>
          <div className="track__author">
            <a className="track__author-link" href="http://">
              {author}
            </a>
          </div>
          <div className="track__album">
            <a className="track__album-link" href="http://">
              {album}
            </a>
          </div>
          <div className="track__time">
            <svg className="track__time-svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-like" />
            </svg>
            <span className="track__time-text">{time}</span>
          </div>
        </div>
      )}
    </div>
  );
}
