import StyledSkeleton from './Skeleton.styles';

export function Skeleton({ width, height, margin }) {
  return <StyledSkeleton $width={width} $height={height} $margin={margin} />;
}
