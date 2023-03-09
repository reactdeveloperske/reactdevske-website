import React from 'react';
import Head from 'next/head';
import ContactUs from '../../components/ContactUs';

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>Reactjs Developer Community in Kenya - Contact</title>
      </Head>
      <main className="min-h-screen bg-white">
        <ContactUs />
      </main>
    </>
  );
}
