import { useContext } from "react";

import { signInWithGoogle } from "./helpers/auth_helper";
import { AuthContext } from "../../contexts";

type User = {
  displayName: string;
  email: string;
  photoURL: string;
  firebaseId: string;
}

const postUser = async (user: User) => {
  const response = await fetch('http://localhost:3000/users', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: user.displayName,
      email: user.email,
      isArtist: true,
    })
  })
  return response.json()
}

const SignUpButton = () => {
  const { token, setToken } = useContext(AuthContext);

  const handleSignUp = async () => {
    const result = await signInWithGoogle(setToken);
    if (result) {
      postUser(result as User)
    }
  };

  return (
    <button className="btn btn-block btn-primary" onClick={handleSignUp}>
      Crear cuenta {token}
    </button>
  );
};

export default SignUpButton;
