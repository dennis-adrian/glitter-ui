import { StandModel } from './eventMapTypes';
import { User } from './userTypes';

export type Reservation = {
  id?: number;
  status?: ReservationStatus;
  standId?: number;
  festivalId?: number;
  artists: User[];
  stand?: StandModel;
};

export type ReservationUpdate = Reservation & {
  artistsIdsToAdd?: number[];
  artistsIdsToRemove?: number[];
};

export type ReservationStatus =
  | 'PENDING'
  | 'APPROVED'
  | 'REJECTED'
  | 'CANCELLED';

export enum ReservationStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
}
