import data from 'data.json';
import ProjectCard from 'components/ProjectCard';

export default function Projects() {
  return (
    <>
      <section className='projects'>
        <h3>Proyectos</h3>
        {data.map(project => (
          <ProjectCard key={project.id} project={project} />
        ))}
        <section className='more'>
          <a href='https://github.com/emiperalta?tab=repositories'>and more...</a>
        </section>
      </section>
      <style jsx>{`
        .projects {
          text-align: center;
          padding-bottom: 1.5rem;
        }
        h3 {
          font-weight: 600;
          text-transform: uppercase;
        }
        .more {
          padding: 15px 0;
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
      `}</style>
    </>
  );
}
