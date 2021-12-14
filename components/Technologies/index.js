export default function Technologies() {
  return (
    <>
      <section className='technologies'>
        <h3>Tecnologías</h3>
        <div className='icons'>
          <i className='devicon-nodejs-plain-wordmark'></i>
          <i className='devicon-express-original-wordmark'></i>
          <i className='devicon-dot-net-plain-wordmark'></i>
          <i className='devicon-react-original-wordmark'></i>
          <i className='devicon-nextjs-original-wordmark'></i>
          <i className='devicon-mongodb-plain-wordmark'></i>
          <i className='devicon-mysql-plain-wordmark'></i>
          <i className='devicon-microsoftsqlserver-plain-wordmark'></i>
          <i className='devicon-git-plain-wordmark'></i>
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
          font-size: 5rem;
          margin: 10px 25px;
        }
      `}</style>
    </>
  );
}
