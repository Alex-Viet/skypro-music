import { useSelector } from 'react-redux';
import * as S from './Playlist.styles';
import { Track } from '../Track/Track';
import { PlaylistHeader } from './PlaylistHeader';

export function Playlist({ trackListError }) {
  const allTracks = useSelector((state) => state.playlist.tracks);
  const isLoading = useSelector((state) => state.playlist.isLoading);
  return (
    <S.PlaylistContent>
      <PlaylistHeader />
      <S.ContentPlaylist>
        <Track
          trackListError={trackListError}
          tracks={allTracks}
          isLoading={isLoading}
        />
      </S.ContentPlaylist>
    </S.PlaylistContent>
  );
}
