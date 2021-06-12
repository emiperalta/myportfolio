export default function Contact() {
  return (
    <>
      <section className='contact'>
        <h3>Contacto</h3>
        <section>
          <a href='https://github.com/emiperalta'>
            <img src='/github.png' alt='github logo' />
          </a>
          <a href='https://www.linkedin.com/in/emiliano-peralta-320ab11b5/'>
            <img src='/linkedin.png' alt='linkedin logo' />
          </a>
          <a href='mailto:emiwperalta@gmail.com'>
            <img src='/gmail.png' alt='gmail logo' />
          </a>
        </section>
      </section>
      <style jsx>{`
        .contact {
          text-align: center;
        }
        h3 {
          font-weight: 600;
          text-transform: uppercase;
        }
        section {
          margin-top: 1rem;
        }
        img {
          width: 60px;
          height: 60px;
          margin: 0 10px;
        }
      `}</style>
    </>
  );
}
