import * as S from './Playlist.styles';
import { Filter } from '../Filter/Filter';
import { Track } from '../Track/Track';
import { PlaylistHeader } from './PlaylistHeader';

export function Playlist({ trackListError }) {
  return (
    <>
      <Filter />

      <S.PlaylistContent>
        <PlaylistHeader />
        <S.ContentPlaylist>
          <Track trackListError={trackListError} />
        </S.ContentPlaylist>
      </S.PlaylistContent>
    </>
  );
}
