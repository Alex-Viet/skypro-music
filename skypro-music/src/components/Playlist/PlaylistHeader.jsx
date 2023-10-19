import * as S from './Playlist.styles';

export const PlaylistHeader = () => {
  return (
    <S.ContentTitle>
      <S.ColTrackName>Трек</S.ColTrackName>
      <S.ColAuthor>ИСПОЛНИТЕЛЬ</S.ColAuthor>
      <S.ColAlbum>АЛЬБОМ</S.ColAlbum>
      <S.ColTrackTime>
        <S.PlaylistTitleSvg alt="time">
          <use xlinkHref="img/icon/sprite.svg#icon-watch" />
        </S.PlaylistTitleSvg>
      </S.ColTrackTime>
    </S.ContentTitle>
  );
};
