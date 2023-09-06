import { styled } from 'styled-components';

const StyledSkeleton = styled.div`
  background: #313131;
  width: ${(props) => (props.$width ? props.$width : 'auto')};
  height: ${(props) => (props.$height ? props.$height : 'auto')};
  margin: ${(props) => (props.$margin ? props.$margin : 'auto')};
`;

export default StyledSkeleton;
