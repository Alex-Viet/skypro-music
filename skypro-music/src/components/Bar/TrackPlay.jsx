import { Skeleton } from '../Skeleton/Skeleton';
import * as S from './TrackPlay.styles';

export function TrackPlay({ isLoading }) {
  return (
    <S.TrackPlayContain>
      {isLoading ? (
        <>
          <S.TrackPlayImage>
            <Skeleton width="51px" height="51px" />
          </S.TrackPlayImage>
          <S.TrackPlayAuthor>
            <Skeleton width="59px" height="15px" />
          </S.TrackPlayAuthor>
          <S.TrackPlayAlbum>
            <Skeleton width="59px" height="15px" />
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
            <S.TrackPlayAuthorLink href="!#">Ты та...</S.TrackPlayAuthorLink>
          </S.TrackPlayAuthor>
          <S.TrackPlayAlbum>
            <S.TrackPlayAlbumLink href="!#">Баста</S.TrackPlayAlbumLink>
          </S.TrackPlayAlbum>
        </>
      )}
    </S.TrackPlayContain>
  );
}
