import { NavLink } from 'react-router-dom';
import { styled } from 'styled-components';

export const SidebarItem = styled.div`
  width: 250px;
  height: 150px;
`;

export const SidebarLink = styled(NavLink)`
  width: 100%;
  height: 100%;
`;

export const SidebarImage = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 30px;
`;
