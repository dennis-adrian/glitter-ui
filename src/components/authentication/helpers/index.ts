import { auth } from '../../../config/firebase';
import { AuthError, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { FirebaseUser } from '../../../types/userTypes';

const provider = new GoogleAuthProvider();

export type RequestResult = AuthError | FirebaseUser;

export const signInWithGoogle = async (): Promise<RequestResult> => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    const { displayName, email, photoURL, uid: firebaseId } = result.user;

    const firstName = displayName?.split(' ')[0];
    const lastName = displayName?.split(' ')[-1];

    return {
      displayName: displayName || '',
      firstName,
      email: email || '',
      lastName,
      photoURL: photoURL || '',
      firebaseId,
      accessToken,
    };
  } catch (error) {
    return error as AuthError;
  }
}

export const isUser = (result: RequestResult) => {
  return (result as FirebaseUser).accessToken !== undefined;
}

export const isAuthError = (result: RequestResult) => {
  return (result as AuthError).code !== undefined;
}
