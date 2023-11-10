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
        className={`flex min-h-screen flex-col items-center justify-between p-24`}
      >
        <AboutMe />

      </div>
    </>
  )
}
