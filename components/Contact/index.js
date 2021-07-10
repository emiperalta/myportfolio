export default function Contact() {
  return (
    <>
      <section className='contact'>
        <h3>Contacto</h3>
        <section>
          <a href='https://github.com/emiperalta' target='_blank'>
            <i className='fab fa-github-square'></i>
          </a>
          <a
            href='https://www.linkedin.com/in/emiliano-peralta-320ab11b5/'
            target='_blank'
          >
            <i className='fab fa-linkedin'></i>
          </a>
          <a href='mailto:emiwperalta@gmail.com'>
            <i className='fas fa-envelope-square'></i>
          </a>
        </section>
      </section>
      <style jsx>{`
        .contact {
          text-align: center;
          padding-bottom: 1.5rem;
        }
        section {
          margin-top: 1rem;
        }
        i {
          font-size: 3.2rem;
          margin: 0 10px;
        }
      `}</style>
    </>
  );
}
