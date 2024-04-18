import { createRoot } from 'react-dom/client'
import { Home } from './src/components/home.jsx'
import { Account } from './src/components/account.jsx'
import { ShortUrlProvider } from './src/context/shortUrlContext.jsx'
import { UserDataProvider } from './src/context/userDataContext.jsx'
import './index.css'
import './style.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { RedirectToLongUrl } from './src/components/redirectToLongUrl.jsx'

const root = createRoot(document.getElementById('app'))

root.render(
  <UserDataProvider>
    <ShortUrlProvider>
      <BrowserRouter>
        <Routes>
          <Route index exact element={<Home />} />
          <Route path=':shortUrl' element={<RedirectToLongUrl />} />
          <Route path='/account' element={<Account />} />
        </Routes>
      </BrowserRouter>
    </ShortUrlProvider>
  </UserDataProvider>
)
