import About from 'components/About';
import Contact from 'components/Contact';
import Photo from 'components/Photo';
import Projects from 'components/Projects';
import Technologies from 'components/Technologies';

export default function Home(): JSX.Element {
  return (
    <>
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
