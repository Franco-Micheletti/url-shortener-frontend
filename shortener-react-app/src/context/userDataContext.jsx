import { createContext, useState } from 'react'
import { login } from '../api/login'

// Create context

export const UserDataContext = createContext()

// Create provider

export function UserDataProvider ({ children }) {
  const [userData, setUserData] = useState({})
  const [userInfo, setUserInfo] = useState({})
  const [loginWindowActive, setloginWindowActive] = useState(false)

  const handleSubmitLogin = async (event, username, password) => {
    event.preventDefault()
    const response = await login(username.current.value, password.current.value)
    setUserData(response)
    setloginWindowActive(false)
  }
  return (
    <UserDataContext.Provider value={{
      userData,
      setUserData,
      handleSubmitLogin,
      userInfo,
      setUserInfo,
      loginWindowActive,
      setloginWindowActive
    }}
    >
      {children}
    </UserDataContext.Provider>
  )
}
