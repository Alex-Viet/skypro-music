import * as S from './Playlist.styles';
import { Filter } from '../Filter/Filter';
import { Track } from '../Track/Track';
import { PlaylistHeader } from './PlaylistHeader';

export function Playlist({ isLoading, trackListError }) {
  return (
    <>
      <Filter />

      <S.PlaylistContent>
        <PlaylistHeader />
        <S.ContentPlaylist>
          <Track isLoading={isLoading} trackListError={trackListError} />
        </S.ContentPlaylist>
      </S.PlaylistContent>
    </>
  );
}
