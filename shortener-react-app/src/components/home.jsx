import { ShortUrlResult } from './shortUrlResult'
import { ShortUrlContext } from '../context/shortUrlContext'
import { useContext, useState, useRef } from 'react'
import { LoginWindow } from './loginWindow'
import { UserDataContext } from '../context/userDataContext'
import { Link } from 'react-router-dom'
export function Home () {
  const { shortUrl, handleSubmit } = useContext(ShortUrlContext)
  const { userData } = useContext(UserDataContext)
  const [loginWindowActive, setloginWindowActive] = useState(false)
  const loginOverlay = useRef()

  const closeLoginWindow = (e) => {
    if (e.target === loginOverlay.current) {
      setloginWindowActive(false)
      loginOverlay.current.removeEventListener('click', closeLoginWindow)
    }
  }

  const clickLoginButton = (e) => {
    setloginWindowActive(true)
    setTimeout(() => {
      loginOverlay.current.addEventListener('click', closeLoginWindow)
    }, 500)
  }

  return (
    <div className='bg-slate-200 justify-center flex flex-col'>
      {
        loginWindowActive
          ? <div>
            <div ref={loginOverlay} className='flex bg-black/60 justify-center w-screen h-screen content-center z-10 absolute'>
              <LoginWindow />
            </div>
          </div>
          : <></>
      }
      <header>
        {
          userData
            ? (
              <div className='flex justify-end p-4 text-sm font-medium text-cyan-800'>
                <Link to='/account'>
                  <div className='flex justify-center gap-3 items-center hover:bg-slate-100 p-2 rounded-md w-15 cursor-pointer'>
                    <svg
                      className='h-10 w-10 fill-cyan-800'
                      style={{ backgroundColor: 'transparent' }}
                      viewBox='0 0 24 24'
                    ><g><g><path d='M12,12.75A5.25,5.25,0,1,0,6.75,7.5,5.256,5.256,0,0,0,12,12.75Zm0-9A3.75,3.75,0,1,1,8.25,7.5,3.754,3.754,0,0,1,12,3.75Zm7.75,14.217v1.011a3.769,3.769,0,0,1-.961,2.522.75.75,0,1,1-1.118-1,2.278,2.278,0,0,0,.579-1.522V17.967a3.259,3.259,0,0,0-2.443-3.185,1.011,1.011,0,0,0-.746.1,6.307,6.307,0,0,1-6.116,0,1.013,1.013,0,0,0-.751-.1A3.262,3.262,0,0,0,5.75,17.967v1.011A2.278,2.278,0,0,0,6.329,20.5a.75.75,0,1,1-1.118,1,3.769,3.769,0,0,1-.961-2.522V17.967a4.759,4.759,0,0,1,3.577-4.64,2.529,2.529,0,0,1,1.854.247,4.8,4.8,0,0,0,4.644,0,2.525,2.525,0,0,1,1.849-.244A4.759,4.759,0,0,1,19.75,17.967Z' /> </g> </g>
                    </svg>
                  </div>
                </Link>
              </div>
              )
            : (
              <div className='flex justify-end p-4'>
                <div className='font-medium text-2xl text-sky-800 flex w-24 justify-center'>
                  <button className='hover:bg-white cursor-pointer p-4 rounded-md w-24' onClick={clickLoginButton}>
                    <p>Login</p>
                  </button>
                </div>
              </div>
              )
        }
      </header>
      <div className='bg-slate-200 flex flex-col gap-4 p-16'>
        <div className='flex justify-center font-medium text-4xl text-sky-800 mb-2'>
          <p>URL Shortener</p>
        </div>
        {
          shortUrl !== ''
            ? <ShortUrlResult />
            : <div className='flex justify-center'>
              <form className='flex justify-center w-2/3' onSubmit={handleSubmit}>
                <input name='longUrl' type='text' className='border p-5 rounded-md outline-none w-full' placeholder='Insert a URL to be shorten' />
              </form>
              </div>
        }
      </div>
      <footer>
        <div className='bottom-0 font-medium text-3xl text-sky-800 absolute bg-white flex h-36 text-center w-screen flex-col justify-center'>
          <p>Developed by Franco Micheletti</p>
        </div>
      </footer>
    </div>
  )
}
