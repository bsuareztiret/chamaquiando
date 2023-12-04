import '@/styles/main-v2.css'
import '@/styles/composition.css'
import '@/styles/card.css'
import '@/styles/contact.css'
import '@/styles/agenda.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Component {...pageProps} />
    </>
  )
}
