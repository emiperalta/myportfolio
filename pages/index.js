import Head from 'next/head';

import About from 'components/About';
import Contact from 'components/Contact';
import Photo from 'components/Photo';
import Projects from 'components/Projects';
import Technologies from 'components/Technologies';

export default function Home() {
  return (
    <>
      <Head>
        <title>Emiliano Peralta / Portfolio</title>
        <meta name='description' content='emiliano peralta portfolio' />
        <link rel='shortcut icon' href='/favicon.png' type='image/x-icon' />
        <link
          rel='stylesheet'
          href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
          integrity='sha512-iBBXm8fW90+nuLcSKlbmrPcLa0OT92xO1BIsZ+ywDWZCvqsWgccV3gFoRBv0z+8dLJgyAHIhR35VZc2oM/gI1w=='
          crossorigin='anonymous'
          referrerpolicy='no-referrer'
        />
        <link
          rel='stylesheet'
          href='https://cdn.jsdelivr.net/gh/devicons/devicon@v2.12.0/devicon.min.css'
        ></link>
      </Head>
      <div>
        <div className='first'>
          <Photo />
          <About />
        </div>
        <Technologies />
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
