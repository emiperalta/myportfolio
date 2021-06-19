import data from 'data.json';
import ProjectCard from 'components/ProjectCard';

export default function Projects() {
  return (
    <>
      <section className='projects'>
        <h3>Proyectos</h3>
        <div className='project-list'>
          {data.map(project => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
        <section className='more'>
          <a href='https://github.com/emiperalta?tab=repositories'>y más...</a>
        </section>
      </section>
      <style jsx>{`
        .projects {
          padding-bottom: 1rem;
        }
        .project-list {
          display: grid;
          grid-template-columns: 1fr;
          grid-gap: 20px;
        }
        h3 {
          font-weight: 600;
          text-transform: uppercase;
          text-align: center;
          margin-bottom: 15px;
        }
        .more {
          padding: 25px 0 8px 0;
          text-align: center;
        }
        a {
          text-decoration: underline;
          font-size: 1.4rem;
          padding: 5px 8px;
          background: #fff;
          transition: all 0.2s ease;
        }
        a:hover {
          background: #47597e;
          color: #fff;
        }
        a:active {
          background: #5e729a;
        }

        @media screen and (min-width: 550px) {
          .project-list {
            grid-template-columns: 1fr 1fr;
          }
        }
      `}</style>
    </>
  );
}
