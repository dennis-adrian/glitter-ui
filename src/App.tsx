import { useState } from 'react';
import { RouterProvider } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthContext, CurrentUserContext } from './contexts';
import { User } from './types/userTypes';

function App() {
  const [token, setToken] = useState(localStorage.getItem('accessToken') || '');
  const [currentUser, setCurrentUser] = useState({} as User);

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <CurrentUserContext.Provider value={{ currentUser, setCurrentUser }}>
        <RouterProvider router={AppRoutes} />
      </CurrentUserContext.Provider>
    </AuthContext.Provider>
  )
}

export default App
