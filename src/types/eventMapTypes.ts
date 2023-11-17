import { User } from "./userTypes";

export type StandOrientation = 'HORIZONTAL' | 'VERTICAL';
type StandStatus = 'AVAILABLE' | 'RESERVED' | 'CONFIRMED';

export type StandModel = {
  id?: number;
  label?: string;
  left?: number;
  orientation: StandOrientation;
  standNumber: number;
  status: StandStatus
  top?: number;
  reservations?: Reservation[];
};

export type ElementSize = {
  wide: number;
  narrow: number;
};

export type StandPosition = {
  id: number;
  left: number;
  top: number;
};

export type Reservation = {
  id?: number;
  status?: ReservationStatus;
  standId?: number;
  festivalId?: number;
  artists: User[];
  stand?: StandModel;
};

export type ReservationStatus = 'PENDING' | 'APPROVED' | 'REJECTED' | 'CANCELLED';
export enum ReservationStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}
