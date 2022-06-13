import Head from 'next/head'
import Image from 'next/image'
// import styles from '../styles/Home.module.css'
import logo from '../public/reactdevske.svg'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>React Devs Kenya</title>
		<meta name="description" content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system." key="desc"/>
		<meta name="title" content="Reactjs Developer Community in Kenya" key="title" />

		{/* <!-- Open Graph / Facebook --> */}
		<meta property="og:type" content="website" key="og-type"/>
		<meta property="og:url" content="https://reactdevske.vercel.app/" key="og-url"/>
		<meta property="og:title" content="Reactjs Developer Community in Kenya" key="og-title"/>
		<meta property="og:description" content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system." key="og-desc"/>
		<meta property="og:image" content="https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1623830704/og_Image_banner_reactdevske_g3htri.png" key="og-img"/>

		{/* <!-- Twitter --> */}
		<meta property="twitter:card" content="summary_large_image" key="ogtw-card"/>
		<meta property="twitter:url" content="https://reactdevske.vercel.app/" key="ogtw-url"/>
		<meta property="twitter:title" content="Reactjs Developer Community in Kenya" key="ogtw-title"/>
		<meta property="twitter:description" content="React js Developer Community Kenya is a community of react js developers using react related technologies in the Kenyan software development eco system." key="ogtw-desc"/>
		<meta property="twitter:image" content="https://res.cloudinary.com/reactjs-devs-ke/image/upload/v1623830704/og_Image_banner_reactdevske_g3htri.png" key="ogtw-img" />
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
