import * as AuthSession from "expo-auth-session"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { api } from '../services/api'

export const AuthContext = createContext({} as AuthContextData)

type Props = {
  children: ReactNode
}

type User = {
  id: string
  username: string
  firstName: string
  avatar: string
  email: string
  token: string
}

type AuthContextData = {
  user: User
  loading: boolean
  signIn: () => Promise<void>
  singOut: () => Promise<void>
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({} as User)


  return (
    <AuthContext.Provider value={{
      user

    }}>
      {children}
    </AuthContext.Provider>
  )

}

function Auth() {
  const context = useContext(AuthContext)

  return context
}

export { AuthProvider, Auth }