import { styled, css } from 'styled-components';

export const PlayerControls = styled.div`
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  -ms-flex-direction: row;
  flex-direction: row;
  padding: 0 27px 0 31px;
`;

const playerBtnMixin = css`
  padding: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnPrev = styled.div`
  ${playerBtnMixin}

  margin-right: 23px;
`;

export const PlayerBtnPrevSvg = styled.svg`
  width: 15px;
  height: 14px;
`;

export const PlayerBtnPlay = styled.div`
  ${playerBtnMixin}

  margin-right: 23px;
`;

export const PlayerBtnPlaySvg = styled.svg`
  width: 22px;
  height: 20px;

  svg {
    fill: #d9d9d9;
  }

  &:hover svg {
    fill: #696969;
  }

  rect {
    fill: #d9d9d9;
  }

  &:hover rect {
    fill: #696969;
  }
`;

export const PlayerBtnNext = styled.div`
  ${playerBtnMixin}

  margin-right: 28px;
  fill: #a53939;
`;

export const PlayerBtnNextSvg = styled.svg`
  width: 15px;
  height: 14px;
  fill: inherit;
  stroke: #d9d9d9;
`;

export const PlayerBtnRepeat = styled.div`
  ${playerBtnMixin}

  margin-right: 24px;
`;

export const PlayerBtnRepeatSvg = styled.svg`
  width: 18px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$isLooping ? '#FFFFFF' : '#696969')};
`;

export const PlayerBtnShuffle = styled.div`
  ${playerBtnMixin}

  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
`;

export const PlayerBtnShuffleSvg = styled.svg`
  width: 19px;
  height: 12px;
  fill: transparent;
  stroke: ${(props) => (props.$isShuffle ? '#FFFFFF' : '#696969')};
`;
