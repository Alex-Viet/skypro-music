import { styled } from 'styled-components';

export const Popup = styled.div`
  position: absolute;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  border-radius: 12px;
  overflow: hidden;
  background-color: #313131;
  width: 248px;
  height: 305px;
  padding: 34px;
  top: 49px;
`;

export const FilterPopupPerformer = styled(Popup)`
  left: 92px;
`;

export const FilterPopupYear = styled(Popup)`
  left: 240px;
`;

export const FilterPopupGenre = styled(Popup)`
  left: 390px;
`;

export const PopupList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 28px;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 4px;
    background-color: #4b4949;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 4px;
    background-color: #ffffff;
  }
`;

export const PopupTextLink = styled.a`
  color: #fff;

  &:hover {
    color: #b672ff;
    text-decoration-line: underline;
  }
`;
