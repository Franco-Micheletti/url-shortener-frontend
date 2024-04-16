import { createContext, useState } from 'react'
import { createShortUrl } from '../api/createShortUrl'

// Create context

export const ShortUrlContext = createContext()

// Create provider

export function ShortUrlProvider ({ children }) {
  const [shortUrl, setShortUrl] = useState('')
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('longUrl')
    // eslint-disable-next-line no-undef
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input === null) { return }
    const shortUrl = await createShortUrl(input.value)
    setShortUrl(shortUrl)
    input.value = ''
  }
  return (
    <ShortUrlContext.Provider value={{
      shortUrl,
      setShortUrl,
      handleSubmit
    }}
    >
      {children}
    </ShortUrlContext.Provider>
  )
}
