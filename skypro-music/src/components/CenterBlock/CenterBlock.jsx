import './CenterBlock.css';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Track from '../Track/Track';

export default function CenterBlock({ isLoading }) {
  return (
    <div className="main__centerblock centerblock">
      <Search />

      <h2 className="centerblock__h2">Треки</h2>
      <Filter />

      <div className="centerblock__content">
        <div className="content__title playlist-title">
          <div className="playlist-title__col col01">Трек</div>
          <div className="playlist-title__col col02">ИСПОЛНИТЕЛЬ</div>
          <div className="playlist-title__col col03">АЛЬБОМ</div>
          <div className="playlist-title__col col04">
            <svg className="playlist-title__svg" alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </svg>
          </div>
        </div>
        <div className="content__playlist playlist">
          <Track
            track="Guilt"
            author="Nero"
            album="Welcome Reality"
            time="4:44"
            isLoading={isLoading}
          />

          <Track
            track="Elektro"
            author="Dynoro, Outwork, Mr. Gee"
            album="Elektro"
            time="2:22"
            isLoading={isLoading}
          />

          <Track
            track="I’m Fire"
            author="Ali Bakgor"
            album="I’m Fire"
            time="2:22"
            isLoading={isLoading}
          />

          <Track
            track="Non Stop"
            extra=" (Remix)"
            author="Стоункат, Psychopath"
            album="Non Stop"
            time="4:12"
            isLoading={isLoading}
          />

          <Track
            track="Run Run"
            extra=" (feat. AR/CO)"
            author="Jaded, Will Clarke, AR/CO"
            album="Run Run"
            time="2:54"
            isLoading={isLoading}
          />

          <Track
            track="Eyes on Fire"
            extra=" (Zeds Dead Remix)"
            author="Blue Foundation, Zeds Dead"
            album="Eyes on Fire"
            time="5:20"
            isLoading={isLoading}
          />

          <Track
            track="Mucho Bien"
            extra=" (Hi Profile Remix)"
            author="HYBIT, Mr. Black, Offer Nissim, Hi Profile"
            album="Mucho Bien"
            time="3:41"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="Knives n Cherries"
            author="minthaze"
            album="Captivating"
            time="1:48"
            isLoading={isLoading}
          />

          <Track
            track="How Deep Is Your Love"
            author="Calvin Harris, Disciples"
            album="How Deep Is Your Love"
            time="3:32"
            isLoading={isLoading}
          />

          <Track
            track="Morena"
            author="Tom Boxer"
            album="Soundz Made in Romania"
            time="3:36"
            isLoading={isLoading}
          />

          <Track isLoading={isLoading} />
        </div>
      </div>
    </div>
  );
}
