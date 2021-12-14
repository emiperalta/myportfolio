import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <>
      <div className='card'>
        <section className='image'>
          <Image
            src={project.image}
            width={500}
            height={300}
            className='project-img'
          />
        </section>
        <section className='content'>
          <h4>{project.title}</h4>
          <div className='links'>
            <a href={project.code} target='_blank'>
              Código
            </a>
            <a href={project.link} target='_blank'>
              Demo
            </a>
          </div>
          <div className='info'>
            {project.techs.map(tech => (
              <span key={tech}>{tech}</span>
            ))}
          </div>
        </section>
      </div>
      <style jsx>{`
        .card {
          border-radius: 5px;
        }
        .image {
          padding: 5px;
        }
        .content {
          border-radius: 8px;
        }
        h4 {
          font-weight: 600;
          color: #343a40;
          text-transform: uppercase;
        }
        .info {
          padding: 10px 15px;
          text-align: center;
        }
        .info span {
          color: #bbb;
          font-size: 0.7rem;
          text-transform: uppercase;
        }
        .info span:after {
          content: ' ';
        }
        .links {
          display: flex;
          justify-content: center;
          margin-top: 10px;
          padding: 0 5px 5px 0;
        }
        .links a {
          background-color: #47597e;
          border-radius: 5px;
          color: #fff;
          display: inline-block;
          font-size: 15px;
          margin: 0 5px;
          padding: 8px;
          text-transform: uppercase;
          transition: background-color 0.2s ease;
        }
        .links a:hover {
          background-color: #536790;
        }
        .links a:active {
          background-color: #5e729a;
        }
      `}</style>
    </>
  );
}
