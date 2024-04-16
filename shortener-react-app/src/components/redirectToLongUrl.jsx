import { getLongUrl } from '../api/getLongUrl'
import { useParams } from 'react-router-dom'
import { useEffect } from 'react'
export function RedirectToLongUrl () {
  const shortUrl = useParams()
  console.log(shortUrl)
  useEffect(() => {
    const useFetch = async () => {
      const response = await getLongUrl(shortUrl.shortUrl)
      if (Object.hasOwn(response, 'long_url')) {
        window.open(response.long_url, '_self')
      }
    }
    useFetch()
  }, [shortUrl.shortUrl])

  // return (<></>)
}
