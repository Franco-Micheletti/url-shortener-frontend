import React, { useEffect, useState, useContext } from 'react'
import { Outlet } from 'react-router-dom'
import { getNewAccessToken } from '../api/useRefreshToken'
import { UserDataContext } from '../context/userDataContext'

export function PersistLogin () {
  const [loading, setLoading] = useState()
  const { userData, setUserData } = useContext(UserDataContext)

  useEffect(() => {
    let isMounted = true

    const handleGetNewAccessToken = async () => {
      const response = await getNewAccessToken()
      setUserData(response)
    }

    !userData.jwt_access ? handleGetNewAccessToken() : setLoading(false)
    console.log(userData)

    return () => {
      isMounted = false
    }
  }, [])

  return (
    loading ? 'loading...' : <Outlet />
  )
}
