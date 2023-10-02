import { useAuth } from '../../contexts/AuthContext';
import { PLAYLISTS } from '../../playlists';
import { Playlist } from '../Playlist/Playlist';
import * as S from './Sidebar.styles';

export function Sidebar({ isLoading, setCurrentTrack }) {
  const { user, logout } = useAuth();

  const handleLogout = () => {
    logout();
    setCurrentTrack(null);
  };

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{user}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogout}>
          <S.SidebarLogoutSvg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </S.SidebarLogoutSvg>
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
