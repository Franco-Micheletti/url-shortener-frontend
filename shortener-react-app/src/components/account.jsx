import { useEffect, useState } from 'react'
import { getUserUrls } from '../api/getUserUrls'
import { Link } from 'react-router-dom'
export function Account () {
  const [userUrls, setUserUrls] = useState([])
  useEffect(() => {
    const handleGetUserUrls = async () => {
      const userUrls = await getUserUrls()
      setUserUrls(userUrls)
    }

    handleGetUserUrls()
  }, [])

  return (
    <div className='bg-slate-200 flex flex-col gap-4'>
      <div className='flex justify-center text-cyan-800 text-4xl font-medium rounded-md mt-10 font-sans'>URLS MANAGER</div>
      {
        userUrls
          ? (
            <div className='flex flex-col gap-4 w-screen overflow-y-scroll p-4'>
              {
                userUrls.slice(0, 50).map((urlObject, index) => {
                  return (
                    <div key={index} className='gap-4 w-auto h-10 flex justify-start text-black rounded-md p-4 bg-slate-50 items-center hover:bg-zinc-100'>
                      <div className='flex'>
                        <div className='flex w-56'>
                          <Link className='hover:text-cyan-500 rounded-md w-56' to={`http://127.0.0.1:5173/${urlObject.url.short_url}`}>{`http://127.0.0.1:5173/${urlObject.url.short_url.slice(0, 75)}`}</Link>
                        </div>
                        <div className='flex justify-between items-baseline gap-4'>
                          <div style={{ minWidth: '900px' }} className='flex justify-center w-auto'>
                            <Link className='hover:text-cyan-500 rounded-md' to={`${urlObject.url.long_url}`}>{`${urlObject.url.long_url.slice(0, 75)}`}</Link>
                          </div>
                          <div className='flex w-auto'>{urlObject.url.clicks}</div>
                        </div>
                      </div>
                    </div>
                  )
                })
              }
            </div>
            )
          : <></>
      }
    </div>
  )
}
