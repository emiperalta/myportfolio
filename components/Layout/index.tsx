import Footer from 'components/Footer';
import Navbar from 'components/Navbar';

interface Props {
  children: JSX.Element;
}

export default function Layout({ children }: Props): JSX.Element {
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
          max-width: 1000px;
          padding: 0 20px;
          width: 100%;
        }
      `}</style>
    </>
  );
}
