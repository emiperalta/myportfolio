export default function Technologies(): JSX.Element {
  return (
    <>
      <section className='technologies'>
        <h3>Tecnologías</h3>
        <div className='icons'>
          <i className='devicon-nodejs-plain-wordmark colored' />
          <i className='devicon-express-original-wordmark' />
          <i className='devicon-nestjs-plain-wordmark colored' />
          <i className='devicon-typescript-plain colored' />
          <i className='devicon-jest-plain colored' />
          <i className='devicon-laravel-plain-wordmark colored' />
          <i className='devicon-docker-plain-wordmark colored' />
          <i className='devicon-react-original-wordmark colored' />
          <i className='devicon-redux-original colored' />
          <i className='devicon-nextjs-original-wordmark' />
          <i className='devicon-mongodb-plain-wordmark colored' />
          <i className='devicon-mysql-plain-wordmark colored' />
          <i className='devicon-postgresql-plain-wordmark colored' />
          <i className='devicon-git-plain-wordmark colored' />
        </div>
      </section>
      <style jsx>{`
        .technologies {
          padding: 1rem 0;
          text-align: center;
        }
        .icons {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          padding: 30px 20px;
        }
        .icons i {
          font-size: 4rem;
          margin: 10px 25px;
        }
      `}</style>
    </>
  );
}
