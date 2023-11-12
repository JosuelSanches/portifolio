import Head from "next/head";
import AboutMe from '@/componets/Home/AboutMe';

export default function Home() {
  return (
    <>
    <Head>
      <title>Sobre mim | Josuel</title>
      <meta name="descrition" content="Sou um desenvolvedor Next-js"></meta>
    </Head>
      <div
        className={`py-12 px-6 md:px-32 space-y-10 md:space-y-28 `}
      >
        <AboutMe />

      </div>
    </>
  )
}
