import { Dispatch, SetStateAction } from 'react';

import { auth } from '../../../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setToken: Dispatch<SetStateAction<string>>) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    if (!accessToken) throw new Error('No access token found');

    const { displayName, email, photoURL, uid: firebaseId } = result.user;

    localStorage.setItem('accessToken', accessToken || '');
    setToken(accessToken || '');

    const firstName = displayName?.split(' ')[0];
    const lastName = displayName?.split(' ')[-1];

    return {
      displayName,
      firstName,
      email,
      lastName,
      photoURL,
      firebaseId
    };
  } catch (error) {
    // TODO: Find a better way to handle errors
    console.log(error);
  }
}

export const signOut = async (setToken: Dispatch<SetStateAction<string>>) => {
  try {
    await auth.signOut();
    localStorage.removeItem('accessToken');
    setToken('');
  } catch (error) {
    console.log(error);
  }
}
