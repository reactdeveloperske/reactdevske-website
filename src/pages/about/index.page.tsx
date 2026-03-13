import Head from 'next/head';
import React from 'react';

export default function AboutPage() {
  return (
    <>
      <Head>
        <title>Reactjs Developer Community in Kenya - About</title>
      </Head>
      <main className="flex justify-center items-center min-h-screen bg-white">
        <div className="max-w-4xl p-6 bg-gray-100 rounded-lg shadow-md">
          <h1 className="text-3xl font-bold mb-4">About Us</h1>
          <p className="text-lg text-gray-700 mb-4">
            We are a vibrant community of React.js developers in Kenya, dedicated to sharing knowledge, fostering collaboration, and promoting the use of React.js in the local tech ecosystem. Our mission is to empower developers with the skills and resources they need to build amazing applications using React.js.
          </p>
          <p className="text-lg text-gray-700 mb-4">
            We organize regular meetups, workshops, and hackathons to bring together developers of all skill levels. Whether you're a beginner looking to learn React.js or an experienced developer seeking to connect with like-minded individuals, our community welcomes you.
          </p>
          <p className="text-lg text-gray-700">
            Join us on our journey to grow the React.js community in Kenya and make a positive impact on the tech industry.
          </p>
        </div>
      </main>
    </>
  );
}
