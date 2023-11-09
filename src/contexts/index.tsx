import { Dispatch, SetStateAction, createContext } from 'react'
import { User } from '../types/userTypes'

type AuthContextType = {
  token: string | null,
  setToken: Dispatch<SetStateAction<string>>
}

export const AuthContext = createContext<AuthContextType>({ token: null, setToken: () => {} })

type CurrentUserContextType = {
  currentUser: User | null,
  setCurrentUser: Dispatch<SetStateAction<User>>
}
export const CurrentUserContext = createContext<CurrentUserContextType>({ currentUser: null, setCurrentUser: () => {} })
