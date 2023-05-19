import Head from 'next/head'

import {Header, Row} from './components'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='flex min-h-screen flex-col pb-2'>
      <Head>
        <title>Netflix Main Menu</title>
        <meta name="description" content="This page is the first part of website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

    <Header/>
      <main>
      </main>
    </div>
  )
}
