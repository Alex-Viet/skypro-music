import { PLAYLISTS } from '../../playlists';
import { Playlist } from '../Playlist/Playlist';
import * as S from './Sidebar.styles';

export function Sidebar({ isLoading }) {
  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>Sergey.Ivanov</S.SidebarPersonalName>
        <S.SidebarIcon>
          <svg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </svg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <Playlist isLoading={isLoading} playlists={PLAYLISTS} />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
