import { createContext, useState } from 'react'
import { login } from '../api/login'

// Create context

export const UserDataContext = createContext()

// Create provider

export function UserDataProvider ({ children }) {
  const [userData, setUserData] = useState('')
  const [userInfo, setUserInfo] = useState({})
  const handleSubmitLogin = async (event, username, password) => {
    event.preventDefault()
    const response = await login(username.current.value, password.current.value)
    setUserData(response)
  }
  return (
    <UserDataContext.Provider value={{
      userData,
      setUserData,
      handleSubmitLogin,
      userInfo,
      setUserInfo
    }}
    >
      {children}
    </UserDataContext.Provider>
  )
}
