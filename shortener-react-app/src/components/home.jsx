import { ShortUrlResult } from './shortUrlResult'
import { ShortUrlContext } from '../context/shortUrlContext'
import { useContext } from 'react'
export function Home () {
  const { shortUrl, handleSubmit } = useContext(ShortUrlContext)
  // const handleLogin = async (event) => {
  //   event.preventDefault()
  //   const { elements } = event.currentTarget
  //   const input = elements.namedItem('longUrl')
  //   // eslint-disable-next-line no-undef
  //   const isInput = input instanceof HTMLInputElement
  //   if (!isInput || input === null) { return }
  //   const players = await searchPlayer(input.value, 3)
  //   setplayerList(players)
  //   input.value = ''
  // }

  return (
    <div className='bg-slate-200 justify-center flex flex-col'>
      <div className='flex justify-end p-4'>
        <div className='font-medium text-2xl text text-sky-800 flex p-3 w-24 rounded-md justify-center hover:bg-white cursor-pointer'>
          <button>
            <p>Login</p>
          </button>
        </div>
      </div>
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
