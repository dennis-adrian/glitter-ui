export type FirebaseUser = {
  accessToken?: string;
  displayName?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  photoURL?: string;
  firebaseId?: string;
}

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
  isApproved: boolean;
  instagramProfile: string;
  isAdmin: boolean;
  isArtist: boolean;
}
