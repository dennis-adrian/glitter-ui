import { useEffect, useState } from 'react';
import { RouterProvider } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthContext, CurrentUserContext } from './contexts';
import { FirebaseUser, User } from './types/userTypes';
import { baseUrl } from './utils';

const fetchUser = async (user: FirebaseUser) => {
  const response = await fetch(
    `${baseUrl}/users/${user.firebaseId}`,
  );
  return response.json();
};

function App() {
  const [token, setToken] = useState(localStorage.getItem('accessToken') || '');
  const [currentUser, setCurrentUser] = useState({} as User);
  
  useEffect(() => {
    const handleInitialLoad = async () => {
      const firebaseId = localStorage.getItem('firebaseId');
      if (firebaseId) {
        const user = await fetchUser({ firebaseId } as FirebaseUser);
        if (user) {
          setCurrentUser(user as User);
        }
      }
    }

    handleInitialLoad();
  }, []);


  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <RouterProvider router={AppRoutes} />
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
