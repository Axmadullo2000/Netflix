import Head from 'next/head'
import {GetServerSideProps} from "next";
import {Header, Row, Hero, SubscriptionPlan} from './components'
import {API_REQUEST} from "src/services/api.service";
import {IMovies, Products} from "@/interfaces/app.interface";
import {useInfoStore} from "@/store";
import {Modal} from "@/pages/components";

export default function Home({trending, top_rated, popular, tvTop, products, subscriptions}: HomeProps) {
  const {modal} = useInfoStore()

  if (!subscriptions.length) return <SubscriptionPlan products={products} />

  return (
      <div className={`flex min-h-screen flex-col pb-2 ${modal && '!h-screen overflow-hidden'}`}>
        <Head>
          <title>Netflix Main Menu</title>
          <meta name="description" content="This page is the first part of website." />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="icon" href="/logo.svg" />
        </Head>
        <Header />
        <main className={'relative pl-4 pb-24 lg:space-y-24 lg:pl-16'}>
          <Hero trending={trending}/>
          <section className={'movies_section_top'}>
            <Row title="Топовые" movies={top_rated} />
            <Row title="Популярные" movies={popular} isBig={true}/>
            <Row title="Последние на ТВ" movies={tvTop} />
          </section>
        </main>
          {modal && <Modal />}
      </div>
  )
}

export const getServerSideProps: GetServerSideProps<HomeProps> = async ({req}) => {
    const token = req.cookies.token

    if (!token) {
        return {
            redirect: {
                destination: '/auth', permanent: false
            }
        }
    }

  const [trending, top_rated, popular, tvTop, products, subscriptions] = await Promise.all([
      fetch(API_REQUEST.trending).then(res => res.json()),
      fetch(API_REQUEST.top_rated).then(res => res.json()),
      fetch(API_REQUEST.popular).then(res => res.json()),
      fetch(API_REQUEST.tvTop).then(res => res.json()),
      fetch(API_REQUEST.productList).then(res => res.json()),
      fetch(`${API_REQUEST.subscription}/${token}`).then(res => res.json())
  ])

  return {
    props: {
      trending: trending.results,
      top_rated: top_rated.results,
      popular: popular.results,
      tvTop: tvTop.results,
      products: products.products.data,
      subscriptions: subscriptions.subscription.data
    }
  }
}

interface HomeProps {
  trending: IMovies[],
  top_rated: IMovies[],
  popular: IMovies[],
  tvTop: IMovies[],
  products: Products[],
  subscriptions: string[]
}

