import { Dispatch, SetStateAction, createContext } from 'react'

type AuthContextType = {
  token: string | null,
  setToken: Dispatch<SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextType>({ token: null, setToken: () => {} })
