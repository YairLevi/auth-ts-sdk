import { createContext, PropsWithChildren, useContext, useEffect, useMemo, useState } from "react";
import { Provider, User } from "./types"
import { createAxiosInstance, endpoints } from "./endpoints";

const AuthContext = createContext<Exports>({} as Exports)

export function useAuth() {
  return useContext(AuthContext)
}

type Exports = {
  user: User,
  isSignedIn: boolean
  login: (email: string, password: string) => void
  loginWithProvider: (provider: Provider) => void
  logout: () => void
}

type AuthContextPros = {
  serviceURL: string
  password: string
}

export function AuthProvider({ children, serviceURL, password }: PropsWithChildren & AuthContextPros) {
  if (serviceURL.endsWith("/")) {
    serviceURL = serviceURL.slice(0, -1);
  }
  const [user, setUser] = useState<User>()
  const isSignedIn = !!user
  const api = useMemo(() => createAxiosInstance(serviceURL), [])

  useEffect(() => {
    (function () {
      api.get(endpoints.loginCookie)
        .then(res => setUser(res.data))
        .catch(err => console.log(err))
    })()
  }, [])

  function login(email: string, password: string) {
    api.post(endpoints.loginEmailPassword, { email, password })
      .then(res => setUser(res.data))
      .catch(err => console.log(err))
  }

  function logout() {
    api.post(endpoints.logout)
      .then(_ => setUser(undefined))
      .catch(err => console.log(err))
  }

  function loginWithProvider(provider: Provider) {
    window.location.href = `${serviceURL}/api/${provider}/login`
  }

  const value = {
    user, login, logout, isSignedIn, loginWithProvider
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}
