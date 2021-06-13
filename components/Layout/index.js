import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

export default function Layout({ children }) {
  return (
    <>
      <div className='main'>
        <Navbar />
        <div className='page-content'>{children}</div>
        <Footer />
      </div>
      <style jsx>{`
        .main {
          display: flex;
          flex-direction: column;
          min-height: 100vh;
        }
        .page-content {
          margin: 20px auto;
          padding: 0 20px;
          width: 100%;
          max-width: 1000px;
        }
      `}</style>
    </>
  );
}
