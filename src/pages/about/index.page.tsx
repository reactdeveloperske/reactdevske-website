import Head from 'next/head';
import React from 'react';
import Button from '../../components/Button/Button';
import LinkButton from '../../components/LinkButton/LinkButton';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Reactjs Developer Community in Kenya - About</title>
      </Head>
      <main className="flex justify-center items-center min-h-screen">
        <h1 className="text-white">About page will be here</h1>
        <Button>Join Community</Button>
        <LinkButton to="https://test.com">test</LinkButton>
      </main>
    </>
  );
}
