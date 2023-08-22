import './Bar.css';
import PlayerControls from './BarPlayerControls/PlayerControls';
import TrackPlay from './BarTrackPlay/TrackPlay';

function Bar({ isLoading }) {
  return (
    <div className="bar__content">
      <div className="bar__player-progress" />
      <div className="bar__player-block">
        <div className="bar__player player">
          <PlayerControls />

          <div className="player__track-play track-play">
            <TrackPlay isLoading={isLoading} />

            <div className="track-play__like-dis">
              <div className="track-play__like _btn-icon">
                <svg className="track-play__like-svg" alt="like">
                  <use xlinkHref="img/icon/sprite.svg#icon-like" />
                </svg>
              </div>
              <div className="track-play__dislike _btn-icon">
                <svg className="track-play__dislike-svg" alt="dislike">
                  <use xlinkHref="img/icon/sprite.svg#icon-dislike" />
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div className="bar__volume-block volume">
          <div className="volume__content">
            <div className="volume__image">
              <svg className="volume__svg" alt="volume">
                <use xlinkHref="img/icon/sprite.svg#icon-volume" />
              </svg>
            </div>
            <div className="volume__progress _btn">
              <input
                className="volume__progress-line _btn"
                type="range"
                name="range"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Bar;
