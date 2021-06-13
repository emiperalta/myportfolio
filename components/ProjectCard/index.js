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
          <div className='title'>
            <h4>{project.title}</h4>
          </div>
          <div className='links'>
            <a href={project.code}>Code</a>
            <a href={project.link}>Demo</a>
          </div>
        </section>
      </div>
      <style jsx>{`
        .card {
          background-color: #fff;
          border: 1px solid transparent;
          border-radius: 5px;
          box-shadow: 2px 3px 6px rgba(0, 0, 0, 0.1);
        }
        .image {
          padding: 5px;
        }
        .content {
          border-radius: 8px;
          position: relative;
        }
        h4 {
          font-weight: 600;
          color: #343a40;
          margin-left: 10px;
          text-transform: uppercase;
        }
        .links {
          display: flex;
          justify-content: flex-end;
          margin-top: 10px;
          padding: 0 5px 5px 0;
        }
        .links a {
          background-color: #47597e;
          border-radius: 5px;
          color: #fff;
          display: inline-block;
          margin-left: 8px;
          padding: 8px;
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
