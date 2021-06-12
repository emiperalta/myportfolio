import Image from 'next/image';

export default function ProjectCard({ project }) {
  return (
    <>
      <div className='card'>
        <section className='image'>
          <Image
            src={project.image}
            width={300}
            height={180}
            className='project-img'
          />
        </section>
        <section className='content'>
          <h4>{project.title}</h4>
        </section>
        <section className='links'>
          <a href={project.code}>Code</a>
          <a href={project.link}>Demo</a>
        </section>
      </div>
      <style jsx>{`
        .card {
          margin: 1rem 0;
          background: #f3f0d7;
          border-radius: 5px;
          box-shadow: 2px 2px 6px rgba(0, 0, 0, 0.1);
        }
        .image {
          padding: 5px;
        }
        .content {
          border-radius: 8px;
          display: flex;
          justify-content: flex-start;
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
          background: #5e454b;
          border-radius: 5px;
          color: #fff;
          display: inline-block;
          margin-left: 8px;
          padding: 8px;
        }
      `}</style>
    </>
  );
}
