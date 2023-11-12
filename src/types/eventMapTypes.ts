export type StandOrientation = 'HORIZONTAL' | 'VERTICAL';
type StandStatus = 'AVAILABLE' | 'RESERVED' | 'SOLD';

export type StandModel = {
  label?: string;
  left?: number;
  orientation: StandOrientation;
  standNumber: number;
  status: StandStatus
  top?: number;
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
