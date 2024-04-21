import { createContext, useState } from 'react'
import { createShortUrl } from '../api/createShortUrl'
import { validateUrl } from '../utlities/validateUrl'
// Create context

export const ShortUrlContext = createContext()

// Create provider

export function ShortUrlProvider ({ children }) {
  const [shortUrl, setShortUrl] = useState('')
  const [validationError, setValidationError] = useState(null)
  const [responseError, setresponseError] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    const { elements } = event.currentTarget
    const input = elements.namedItem('longUrl')
    const longUrl = input.value
    // Validate URL with regex
    const urlIsValid = validateUrl(longUrl)
    // eslint-disable-next-line no-undef
    const isInput = input instanceof HTMLInputElement
    if (!isInput || input === null) { return }
    if (urlIsValid) {
      const shortUrlResponse = await createShortUrl(input.value)
      if (shortUrlResponse.status === 429) {
        setresponseError('Too many Requests per min')
      } else if (shortUrlResponse.status === 201) {
        setShortUrl(await shortUrlResponse.json())
        input.value = ''
        setValidationError(false)
        setresponseError(false)
      } else if (shortUrlResponse.status === 400) {
        setValidationError(true)
      }
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
      validationError,
      responseError,
      setresponseError
    }}
    >
      {children}
    </ShortUrlContext.Provider>
  )
}
