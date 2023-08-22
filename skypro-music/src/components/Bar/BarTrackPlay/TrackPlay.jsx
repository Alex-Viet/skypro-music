import Skeleton from '../../Skeleton/Skeleton';
import '../Bar.css';

export default function TrackPlay({ isLoading }) {
  return (
    <div className="track-play__contain">
      {isLoading ? (
        <>
          <div className="track-play__image">
            <Skeleton className="skeleton__track-play-image" />
          </div>
          <div className="track-play__author">
            <Skeleton className="skeleton__track-play-author-album" />
          </div>
          <div className="track-play__album">
            <Skeleton className="skeleton__track-play-author-album" />
          </div>
        </>
      ) : (
        <>
          <div className="track-play__image">
            <svg className="track-play__svg" alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </svg>
          </div>
          <div className="track-play__author">
            <a className="track-play__author-link" href="http://">
              Ты та...
            </a>
          </div>
          <div className="track-play__album">
            <a className="track-play__album-link" href="http://">
              Баста
            </a>
          </div>
        </>
      )}
    </div>
  );
}
