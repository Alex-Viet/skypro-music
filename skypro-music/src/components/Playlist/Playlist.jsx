import Skeleton from '../Skeleton/Skeleton';
import * as S from './Playlist.styles';

export function getPlaylistNumber(number) {
  return `img/playlist${number}.png`;
}

function Playlist({ number, isLoading }) {
  return (
    <S.SidebarItem>
      {isLoading ? (
        <Skeleton className="skeleton__sidebar-item" />
      ) : (
        <S.SidebarLink href="!#">
          <S.SidebarImage
            src={getPlaylistNumber(number)}
            alt="day's playlist"
          />
        </S.SidebarLink>
      )}
    </S.SidebarItem>
  );
}

export default Playlist;
