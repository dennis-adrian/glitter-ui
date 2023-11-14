import { ElementSize } from '../../types/eventMapTypes';

export const getStandSize = (
  mapId: string,
  proportions: { wideSide: number; narrowSide: number },
): ElementSize | null => {
  const mapImg = document.getElementById(mapId);
  if (!mapImg) return null;

  const { width: imgWidth, height: imgHeight } = mapImg.getBoundingClientRect();

  return {
    wide: imgWidth * (proportions.wideSide || 0.089),
    narrow: imgHeight * (proportions.narrowSide || 0.059),
  };
};
