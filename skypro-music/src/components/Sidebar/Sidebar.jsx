import Playlist from '../Playlist/Playlist';
import * as S from './Sidebar.styles';

function Sidebar({ isLoading }) {
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
          <Playlist number="01" isLoading={isLoading} />
          <Playlist number="02" isLoading={isLoading} />
          <Playlist number="03" isLoading={isLoading} />
        </S.SidebarList>
      </S.SidebarBlock>
    </S.MainSidebar>
  );
}

export default Sidebar;
