import { createContext, useState } from 'react'
import { createShortUrl } from '../api/createShortUrl'
import { validateUrl } from '../utlities/validateUrl'
// Create context

export const ShortUrlContext = createContext()

// Create provider

export function ShortUrlProvider ({ children }) {
  const [shortUrl, setShortUrl] = useState('')
  const [validationError, setValidationError] = useState(false)
  const handleSubmit = async (event) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('longUrl')
    const longUrl = input.value
    const urlIsValid = validateUrl(longUrl)
    // eslint-disable-next-line no-undef
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input === null) { return }
    if (urlIsValid) {
      const shortUrl = await createShortUrl(input.value)
      setShortUrl(shortUrl)
      input.value = ''
      setValidationError(false)
    } else {
      setValidationError(true)
    }
  }
  return (
    <ShortUrlContext.Provider value={{
      shortUrl,
      setShortUrl,
      handleSubmit,
      setValidationError,
      validationError
    }}
    >
      {children}
    </ShortUrlContext.Provider>
  )
}
