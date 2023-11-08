import { auth } from '../../../config/firebase';
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';

const provider = new GoogleAuthProvider();

export const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const { displayName, email, photoURL } = result.user;
    
    localStorage.setItem('name', displayName || '');
    localStorage.setItem('email', email || '');
    localStorage.setItem('photoURL', photoURL || '');

    return {
      displayName,
      email,
      photoURL
    }
  } catch (error) {
    console.log(error);
  }
}
