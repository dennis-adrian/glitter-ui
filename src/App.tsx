import { useState } from 'react';
import { RouterProvider } from 'react-router-dom'

import { AppRoutes } from './routes/AppRoutes'
import { AuthContext } from './contexts';

function App() {
  const [token, setToken] = useState(localStorage.getItem('accessToken') || '');

  return (
    <AuthContext.Provider value={{ token, setToken }}>
      <RouterProvider router={AppRoutes} />
    </AuthContext.Provider>
  )
}

export default App
