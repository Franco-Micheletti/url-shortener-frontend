import { BrowserRouter, Link } from 'react-router-dom'
import { ShortUrlContext } from '../context/shortUrlContext'
import { useContext } from 'react'
export function ShortUrlResult () {
  const { shortUrl, handleSubmit } = useContext(ShortUrlContext)

  return (
    <div className='flex flex-col justify-center'>
      <div className='rounded-md justify-center flex text-black h-auto flex-col'>
        <div className=' text-3xl font-medium text-sky-800 inline-flex p-4'>Your link is ready , click it !</div>
        <div className='flex-col bg-white p-4'>
          <Link className='bg-white hover:text-cyan-600 rounded-md w-fit' to={`http://127.0.0.1:5173/${shortUrl.url.short_url}`}>{`http://127.0.0.1:5173/${shortUrl.url.short_url}`}</Link>
        </div>
      </div>
      <div className='flex justify-center flex-col'>
        <div className='text-3xl font-medium text-sky-800 p-4'>Shorten a new URL</div>
        <form className='flex justify-center' onSubmit={handleSubmit}>
          <input name='longUrl' type='text' className='border p-4 rounded-md outline-none w-full' placeholder='Insert a URL to be shorten' />
        </form>
      </div>
    </div>
  )
}
