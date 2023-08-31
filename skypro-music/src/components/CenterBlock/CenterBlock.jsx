import * as S from './CenterBlock.styles';
import Filter from '../Filter/Filter';
import Search from '../Search/Search';
import Track from '../Track/Track';

export default function CenterBlock({ isLoading }) {
  return (
    <S.MainCenterBlock>
      <Search />

      <S.CenterBlockTitle>Треки</S.CenterBlockTitle>
      <Filter />

      <S.CenterBlockContent>
        <S.ContentTitle>
          <S.Col01>Трек</S.Col01>
          <S.Col02>ИСПОЛНИТЕЛЬ</S.Col02>
          <S.Col03>АЛЬБОМ</S.Col03>
          <S.Col04>
            <S.PlaylistTitleSvg alt="time">
              <use xlinkHref="img/icon/sprite.svg#icon-watch" />
            </S.PlaylistTitleSvg>
          </S.Col04>
        </S.ContentTitle>
        <S.ContentPlaylist>
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
        </S.ContentPlaylist>
      </S.CenterBlockContent>
    </S.MainCenterBlock>
  );
}
