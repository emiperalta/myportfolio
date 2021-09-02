import { calculateAge } from 'utils/calculateAge';

export default function About() {
  return (
    <>
      <section className='about'>
        <h3>Acerca de mí</h3>
        <p>
          ¡Hola! Mi nombre es Emiliano, y soy programador fullstack. <br />
          Tengo {calculateAge(13, 8, 1996)} años, viviendo actualmente en Córdoba,
          Argentina. <br />
          Apasionado por las distintas tecnologías, estoy en constante aprendizaje y
          siempre abierto a nuevos desafíos.
        </p>
      </section>
      <style jsx>{`
        .about {
          padding: 2rem 0 1.5rem 0;
          flex: 1;
          text-align: center;
        }

        @media screen and (min-width: 950px) {
          .about {
            padding: 2rem 1rem 1.5rem 1rem;
          }
          p {
            text-align: end;
          }
        }
      `}</style>
    </>
  );
}
