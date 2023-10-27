import { useDispatch, useSelector } from 'react-redux';
import { useAuth } from '../../contexts/AuthContext';
import { PLAYLISTS } from '../../playlists';
import { setCurrentTrack } from '../../store/slices/playlistSlice';
import { Categories } from '../Categories/Categories';
import * as S from './Sidebar.styles';

export function Sidebar({ isLoading }) {
  const { logout } = useAuth();
  const dispatch = useDispatch();

  const username = useSelector((state) => state.auth.username);

  const handleLogout = () => {
    logout();
    dispatch(setCurrentTrack(null));
  };

  return (
    <S.MainSidebar>
      <S.SidebarPersonal>
        <S.SidebarPersonalName>{username}</S.SidebarPersonalName>
        <S.SidebarIcon onClick={handleLogout}>
          <S.SidebarLogoutSvg alt="logout">
            <use xlinkHref="img/icon/sprite.svg#logout" />
          </S.SidebarLogoutSvg>
        </S.SidebarIcon>
      </S.SidebarPersonal>
      <S.SidebarBlock>
        <S.SidebarList>
          <Categories isLoading={isLoading} playlists={PLAYLISTS} />

        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}
