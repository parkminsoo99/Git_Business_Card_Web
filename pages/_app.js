import '@/styles/globals.css'
<<<<<<< HEAD

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />
}
=======
import { SessionProvider } from "next-auth/react"

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  return (
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
  )
}
>>>>>>> feature_01
