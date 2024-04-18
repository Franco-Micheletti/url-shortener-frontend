import { UserDataContext } from '../context/userDataContext'
import { useContext, useRef } from 'react'
export function LoginWindow () {
  const { handleSubmitLogin } = useContext(UserDataContext)
  const usernameRef = useRef()
  const passwordRef = useRef()

  const handleEnterKeyEvent = (e) => {
    if (e.key === 'Enter') {
      handleSubmitLogin(e, usernameRef, passwordRef)
    }
  }
  return (

    <div className='absolute ml-0 mr-0 mt-40 w-30 h-52 bg-white rounded-md z-20 justify-center'>
      <form className='flex flex-col p-4 gap-2' onSubmit={handleSubmitLogin}>
        <input ref={usernameRef} autoComplete='username' className='p-3 bg-slate-50 rounded-md outline-none' type='text' name='username' placeholder='Username' />
        <input ref={passwordRef} autoComplete='current-password' className='p-3 bg-slate-50 rounded-md outline-none' type='password' name='password' placeholder='Password' />
        <button onClick={(e) => handleSubmitLogin(e, usernameRef, passwordRef)} onKeyDown={(e) => handleEnterKeyEvent(e)} className='text-cyan-800 font-medium text-xl bg-white p-3 hover:bg-slate-300 rounded-md' type='submit'>Login</button>
      </form>
    </div>

  )
}
