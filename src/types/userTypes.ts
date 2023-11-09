export type FirebaseUser = {
  displayName: string;
  email: string;
  firstName: string;
  lastName: string;
  photoURL: string;
  firebaseId: string;
}

export type User = {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  country: string;
  city: string;
  phone: string;
  firebaseId: string;
  photoUrl: string;
  isCustomPhoto: boolean;
}
