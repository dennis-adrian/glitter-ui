import { auth } from '../../../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential?.accessToken;
    const { displayName, email, photoURL, uid: firebaseId } = result.user;

    localStorage.setItem('token', token || '');

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
