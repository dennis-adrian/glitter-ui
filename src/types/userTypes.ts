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
  displayName: string;
  email: string;
  country: string;
  city: string;
  phone: string;
  firebaseId: string;
  photoURL: string;
  isCustomPhoto: boolean;
}
