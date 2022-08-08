export default function Projects(): JSX.Element {
  return (
    <>
      <section className="projects">
        <h3>Proyectos</h3>
        <section className="more">
          <a href="https://github.com/emiperalta" target="_blank" title="GitHub">
            <i className="fab fa-github-square"></i>
          </a>
        </section>
      </section>
      <style jsx>{`
        .projects {
          padding-bottom: 1rem;
          text-align: center;
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
