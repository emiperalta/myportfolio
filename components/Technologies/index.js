export default function Technologies() {
  return (
    <>
      <section className='technologies'>
        <h3>Tecnologías</h3>
        <div className='icons'>
          <i className='devicon-nodejs-plain-wordmark'></i>
          <i className='devicon-express-original-wordmark'></i>
          <i className='devicon-react-original-wordmark'></i>
          <i className='devicon-nextjs-original-wordmark'></i>
          <i className='devicon-mongodb-plain-wordmark'></i>
          <i className='devicon-mysql-plain-wordmark'></i>
          <i className='devicon-git-plain-wordmark'></i>
        </div>
      </section>
      <style>{`
        .technologies {
          padding: 1rem 0;
          text-align: center;
        }
        h3 {
          font-weight: 600;
          text-transform: uppercase;
        }
        .icons {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          padding: 30px 20px;
        }
        .icons i {
          font-size: 5rem;
          margin: 10px 25px;
        }
      `}</style>
    </>
  );
}