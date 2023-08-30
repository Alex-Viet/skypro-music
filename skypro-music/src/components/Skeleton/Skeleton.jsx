import StyledSkeleton from './Skeleton.styles';

function Skeleton({ width, height, margin }) {
  return <StyledSkeleton $width={width} $height={height} $margin={margin} />;
}

export default Skeleton;
