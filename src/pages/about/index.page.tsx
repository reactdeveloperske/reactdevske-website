import Head from 'next/head';
import React from 'react';
import AboutUs from "../../components/about-us/about-us";

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Reactjs Developer Community in Kenya - About</title>
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-white">
        <AboutUs/>
      </main>
    </>
  );
}
