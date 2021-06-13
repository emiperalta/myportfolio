import Head from 'next/head';

import About from 'components/About';
import Contact from 'components/Contact';
import Photo from 'components/Photo';
import Projects from 'components/Projects';

export default function Home() {
  return (
    <>
      <Head>
        <title>Emiliano Peralta / Portfolio</title>
        <meta name='description' content='emiliano peralta portfolio' />
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
      </Head>
      <div>
        <div className='first'>
          <Photo />
          <About />
        </div>
        <Projects />
        <Contact />
      </div>
      <style jsx>{`
        @media screen and (min-width: 950px) {
          .first {
            display: flex;
            flex-direction: row;
            padding-bottom: 1rem;
          }
        }
      `}</style>
    </>
  );
}
