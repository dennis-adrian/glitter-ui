import { Dispatch, SetStateAction } from 'react';

import { auth } from '../../../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async (setToken: Dispatch<SetStateAction<string>>) => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const accessToken = credential?.accessToken;
    const { displayName, email, photoURL, uid: firebaseId } = result.user;

    localStorage.setItem('accessToken', accessToken || '');
    setToken(accessToken || '');

    return {
      displayName,
      email,
      photoURL,
      firebaseId
    };
  } catch (error) {
    // TODO: Find a better way to handle errors
    console.log(error);
  }
}
