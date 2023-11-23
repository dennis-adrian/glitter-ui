import { ElementSize } from '../../types/eventMapTypes';

export const getStandSize = (
  imageSize: { width: number; height: number },
  proportions: { wideSide: number; narrowSide: number },
): ElementSize => ({
  wide: imageSize.width * (proportions.wideSide || 0.089),
  narrow: imageSize.height * (proportions.narrowSide || 0.059),
});
