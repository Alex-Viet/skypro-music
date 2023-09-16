import { PLAYLISTS } from '../../playlists';
import { Skeleton } from '../Skeleton/Skeleton';
import * as S from './Playlist.styles';

export function Playlist({ isLoading }) {
  return (
    <S.SidebarItem>
      {PLAYLISTS.map((playlist) => {
        if (isLoading) {
          return (
            <Skeleton
              width="250px"
              height="150px"
              margin="0 0 30px 0"
              key={playlist.id}
            />
          );
        }
        return (
          <S.SidebarLink to={`/category/${playlist.id}`} key={playlist.id}>
            <S.SidebarImage src={playlist.img} alt="day's playlist" />
          </S.SidebarLink>
        );
      })}
    </S.SidebarItem>
  );
}
