import type { AppProps } from "next/app"
import Head from "next/head"

import "../styles/globals.css"

const seo = {
  title: "Faris Chtatou - Portfolio",
  description:
    "Hi ! I'm Faris Chtatou and I'll help you build your dream ! I'm a Junior Fullstack Developer based in Paris, France, currently studying a Master in Software Engineering at Efrei Paris!",
}

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>{seo.title}</title>
        <meta property="og:title" content={seo.title} />
        <meta name="twitter:title" content={seo.title} />
        <meta name="description" content={seo.description} />
        <meta property="og:description" content={seo.description} />
        <meta name="twitter:description" content={seo.description} />
        <link rel="icon" href="/avatar.jpeg" />
      </Head>
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
