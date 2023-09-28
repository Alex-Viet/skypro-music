import * as S from './TrackPlay.styles';

export function TrackPlay({ currentTrack }) {
  return (
    <S.TrackPlayContain>
      <>
        <S.TrackPlayImage>
          <S.TrackPlaySvg alt="music">
            <use xlinkHref="img/icon/sprite.svg#icon-note" />
          </S.TrackPlaySvg>
        </S.TrackPlayImage>
        <S.TrackPlayAuthor>
          <S.TrackPlayAuthorLink href="!#">
            {currentTrack && currentTrack.name}
          </S.TrackPlayAuthorLink>
        </S.TrackPlayAuthor>
        <S.TrackPlayAlbum>
          <S.TrackPlayAlbumLink href="!#">
            {currentTrack && currentTrack.author}
          </S.TrackPlayAlbumLink>
        </S.TrackPlayAlbum>
      </>
    </S.TrackPlayContain>
  );
}
