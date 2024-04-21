import { Link } from 'react-router-dom'
import { ShortUrlContext } from '../context/shortUrlContext'
import { useContext } from 'react'
export function ShortUrlResult () {
  const { shortUrl, handleSubmit, validationError } = useContext(ShortUrlContext)

  return (
    <div className='flex flex-col justify-center'>
      <div className='justify-center flex flex-col'>
        <div className=' text-3xl font-medium text-sky-800 flex-col p-4 text-center'>Your link is ready , click it !</div>
        <div className='flex justify-center'>
          <div className='flex flex-col bg-white p-4 w-2/3 justify-center rounded-md'>
            <Link className='bg-white hover:text-cyan-600 rounded-md w-fit' to={`http://127.0.0.1:5173/${shortUrl.url.short_url}`}>{`http://127.0.0.1:5173/${shortUrl.url.short_url}`}</Link>
          </div>
        </div>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='text-3xl font-medium text-sky-800 p-4 text-center flex flex-col'>Shorten a new URL</div>
        <div className='flex justify-center'>
          <form className='flex justify-center w-2/3 flex-col gap-4' onSubmit={handleSubmit}>
            <input name='longUrl' type='text' className='border p-4 rounded-md outline-none w-full' placeholder='Insert a URL to be shorten' />
            {
            validationError
              ? <div className='text-red-500 flex justify-center text-2xl rounded p-2'>URL is not valid</div>
              : <></>
          }
          </form>
        </div>
      </div>
    </div>
  )
}
