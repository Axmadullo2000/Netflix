import Head from 'next/head'

import {Header} from './components'
import {API_REQUEST} from "src/services/api.service";
import {GetServerSideProps} from "next";
import {IMovies} from "@/interfaces/app.interface";
import Hero from "@/pages/components/hero/hero";


export default function Home({trending}: HomeProps) {
  return (
    <div className='flex min-h-screen flex-col pb-2'>
      <Head>
        <title>Netflix Main Menu</title>
        <meta name="description" content="This page is the first part of website." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/logo.svg" />
      </Head>

    <Header/>
      <main className={'relative pl-4 pb-24 lg:space-y-24 lg:pl-16'}>
        <Hero trending={trending}/>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const res = await fetch(API_REQUEST.trending);
  const data = await res.json()

  return {
    props: {
      trending: data.results
    }
  }
}


interface HomeProps {
  trending: IMovies[]
}
