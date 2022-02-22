import { AppProps } from 'next/app';
import Head from 'next/head';

import Layout from 'components/Layout';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Emiliano Peralta / Portfolio</title>
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}

export default MyApp;
