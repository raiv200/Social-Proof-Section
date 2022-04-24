import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import { HeaderText } from '../components/HeaderText';
import { StarRating } from '../components/StarRating'
import { Testimonials } from '../components/Testimonials';




const Home: NextPage = () => {
  return (
    <div className="flex min-h-screen background  flex-col bg-gray-100 items-center ">
      <Head>
        <title>Social Proof Section</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
  

       <div className="flex flex-col md:flex-row items-center justify-between mx-a px-4 md:px-24 py-2 ">

        <HeaderText />
        <div className="flex flex-col justify-center items-center">
          <StarRating text="Rated 5 Stars in Reviews" />
          <StarRating text="Rated 5 Stars in Report Guru" />
          <StarRating text="Rated 5 Stars in Best Tech" />
        </div>
      </div>
      <Testimonials />

    </div>
  )
}

export default Home
