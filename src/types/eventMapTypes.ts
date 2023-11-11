export type Stand = {
  isAvailable: boolean;
  isHorizontal: boolean;
  left?: number;
  top?: number;
  standNumber: number;
};

export type ElementSize = {
  width: number;
  height: number;
};

export type StandPosition = {
  id: number;
  left: number;
  top: number;
};
