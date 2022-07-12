import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Bienvenidos a dedosLargos.com" />
        <p className="description">
          Una empresa de <code>amigos</code>
        </p>
      </main>

      <Footer />
    </div>
  )
}
