import React, { createContext, useState, useEffect } from 'react'

const AuthContext = createContext()
const { Provider } = AuthContext

const AuthProvider = ({ children }) => {
  const [authState, setAuthState] = useState({})
  const [loading,setLoading]=useState(true);
  useEffect(() => {
    const token = localStorage.getItem('token')
    const userInfo = localStorage.getItem('userInfo')
    const expiresAt = localStorage.getItem('expiresAt')
    const message = localStorage.getItem('message')
    setAuthState({
      token,
      expiresAt,
      userInfo: userInfo ? JSON.parse(userInfo) : {},
      message
    });
    setLoading(false);
  }, [])

  const setAuthInfo = ({ token, userInfo, expiresAt,message }) => {
    localStorage.setItem('token', token)
    localStorage.setItem('userInfo', JSON.stringify(userInfo))
    localStorage.setItem('expiresAt', expiresAt)
    localStorage.setItem('message', message)
    setAuthState({
      token,
      userInfo,
      expiresAt,
      message
    })
  }

  const logout = () => {
    localStorage.removeItem('token')
    localStorage.removeItem('userInfo')
    localStorage.removeItem('expiresAt')
    localStorage.removeItem('message')

    setAuthState({})
  }

  const isAuthenticated = () => {
    if (!authState.token || !authState.expiresAt || authState.message==="not verified") {
      return false
    }
    return new Date().getTime() / 1000 < authState.expiresAt
  }

  const isAdmin = () => {
    return authState.userInfo && authState.userInfo.role === 'admin'
  }

  return (
    <Provider
      value={{
        authState,
        setAuthState: (authInfo) => setAuthInfo(authInfo),
        logout,
        isAuthenticated,
        isAdmin,
        loading
      }}
    >
      {children}
    </Provider>
  )
}

export { AuthContext, AuthProvider }
