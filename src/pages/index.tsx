import Head from 'next/head'
import {GetServerSideProps} from "next";


import {Header} from './components'
import Hero from "@/pages/components/hero/hero";

import {API_REQUEST} from "src/services/api.service";

import {IMovies} from "@/interfaces/app.interface";
import Row from "./components/row/row";

export default function Home({trending, top_rated}: HomeProps) {
  console.log(top_rated)
  // @ts-ignore
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
        <section>
          <Row title="Top Rated" movies={top_rated} />
        </section>
      </main>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const urls = [
      API_REQUEST.trending,
      API_REQUEST.top_rated
  ]
  const promises = urls.map((url) => fetch(url)
      .then((response) => response.json())
  )
  const data = await Promise.all(promises)
  const trending = data[0].results
  const top_rated = data[1].results

  return {
    props: {
      trending,
      top_rated
    }
  }
}

interface HomeProps {
  trending: IMovies[],
  top_rated: IMovies[]
}
