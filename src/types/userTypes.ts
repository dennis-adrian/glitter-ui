import { Festival } from "./festivalTypes";

export type FirebaseUser = {
  accessToken?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  photoURL?: string;
  firebaseId?: string;
}

export type UserStatus = 'ACTIVE' | 'WAITING_APPROVAL' | 'DISABLED'
export interface User {
  id?: number;
  firstName?: string;
  lastName?: string;
  displayName: string;
  email: string;
  country?: string;
  city?: string;
  phone: string;
  firebaseId: string;
  photoURL: string;
  isCustomPhoto: boolean;
  instagramProfile: string;
  isAdmin: boolean;
  isArtist: boolean;
  status: UserStatus;
  hasActiveReservation: boolean;
  festivals: Festival[];
}
