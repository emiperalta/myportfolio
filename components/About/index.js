export default function About() {
  return (
    <>
      <section className='about'>
        <h3>Acerca de mí</h3>
        <p>
          ¡Hola! Mi nombre es Emiliano, y soy programador fullstack. <br />
          Tengo 24 años, viviendo actualmente en Córdoba, Argentina. <br />{' '}
          Apasionado por las distintas tecnologías, estoy en constante aprendizaje y
          siempre abierto a nuevos desafíos.
        </p>
      </section>
      <style jsx>{`
        .about {
          text-align: center;
          padding: 1.5rem 0;
        }
        h3 {
          font-weight: 600;
          text-transform: uppercase;
        }
      `}</style>
    </>
  );
}
