import Skeleton from '../../Skeleton/Skeleton';
import * as S from './TrackPlay.styles';

export default function TrackPlay({ isLoading }) {
  return (
    <S.TrackPlayContain>
      {isLoading ? (
        <>
          <S.TrackPlayImage>
            <Skeleton className="skeleton__track-play-image" />
          </S.TrackPlayImage>
          <S.TrackPlayAuthor>
            <Skeleton className="skeleton__track-play-author-album" />
          </S.TrackPlayAuthor>
          <S.TrackPlayAlbum>
            <Skeleton className="skeleton__track-play-author-album" />
          </S.TrackPlayAlbum>
        </>
      ) : (
        <>
          <S.TrackPlayImage>
            <S.TrackPlaySvg alt="music">
              <use xlinkHref="img/icon/sprite.svg#icon-note" />
            </S.TrackPlaySvg>
          </S.TrackPlayImage>
          <S.TrackPlayAuthor>
            <S.TrackPlayAuthorLink href="http://">
              Ты та...
            </S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href="http://">
              Баста
            </S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        </>
      )}
    </S.TrackPlayContain>
  );
}
