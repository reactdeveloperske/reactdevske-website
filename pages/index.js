import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import logo from '../public/reactdevske.svg'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>React Devs Kenya</title>
        <meta name="description" content="Reactjs Developer community in Kenya" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        <h1 className="text-center text-3xl text-white font-bold ">React Developer Community Kenya</h1>
		<p className="text-center text-xl text-white">
			A Community of Reactjs developers in Kenya
		</p>
		<div className='flex flex-col justify-center content-center'>
		<Image src={logo} className="App-logo" alt="logo" width={400} height={400} />
		<p className='flex justify-center text-white pt-10'>
			🚧Under construction...
		</p>
		</div>
      </main>
    </div>
  )
}
