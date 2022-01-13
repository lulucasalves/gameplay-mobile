import AsyncStorage from "@react-native-async-storage/async-storage"
import * as AuthSession from "expo-auth-session"
import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState
} from "react"
import { COLLECTION_APPOINTMENTS, COLLECTION_USERS } from "../configs/discordAuth"
import { api } from '../services/api'

const { SCOPE } = process.env;
const { CLIENT_ID } = process.env;
const { CDN_IMAGE } = process.env;
const { REDIRECT_URI } = process.env;
const { RESPONSE_TYPE } = process.env;

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
  signOut: () => Promise<void>
}

type AuthorizationResponse = AuthSession.AuthSessionResult & {
  params: {
    access_token?: string
    error?: string
  }
}

function AuthProvider({ children }: Props) {
  const [user, setUser] = useState<User>({} as User)
  const [loading, setLoading] = useState(false)

  async function signIn() {
    try {
      setLoading(true)
      const authUrl = `${api.defaults.baseURL}/oauth2/authorize?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}&scope=${SCOPE}`

      const { type, params } = await AuthSession.startAsync({ authUrl }) as AuthorizationResponse


      console.log(type, params)

      if (type === "success" && !params.error) {
        api.defaults.headers.common['Authorization'] = `Bearer ${params.access_token}`

        const userInfo = await api.get('/users/@me');

        const firstName = userInfo.data.username.split(' ')[0];
        userInfo.data.avatar = `${CDN_IMAGE}/avatars/${userInfo.data.id}/${userInfo.data.avatar}.png`;

        const userData = {
          ...userInfo.data,
          firstName,
          token: params.access_token
        }

        await AsyncStorage.setItem(COLLECTION_USERS, JSON.stringify(userData));

        setUser(userData);

      }
    } catch {
      throw new Error('Não foi possivel autenticar')
    } finally {
      setLoading(false);
    }
  }

  async function signOut() {
    setUser({} as User);
    await AsyncStorage.removeItem(COLLECTION_USERS);
    const storageItems = await AsyncStorage.getItem(COLLECTION_APPOINTMENTS);
    if (storageItems) { await AsyncStorage.removeItem(COLLECTION_APPOINTMENTS) }
  }

  async function loadUserStorageData() {
    const storage = await AsyncStorage.getItem(COLLECTION_USERS);

    if (storage) {
      const userLogged = JSON.parse(storage) as User;
      api.defaults.headers.common['Authorization'] = `Bearer ${userLogged.token}`;

      setUser(userLogged);
    }
  }

  useEffect(() => {
    loadUserStorageData();
  }, []);

  return (
    <AuthContext.Provider value={{
      user,
      loading,
      signIn,
      signOut
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