export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <img src='/favicon.png' alt='logo' />
        <a href='/cv.pdf' download>
          Descargar CV
        </a>
      </nav>
      <style jsx>{`
        .navbar {
          align-items: center;
          display: flex;
          justify-content: space-between;
          padding: 15px;
        }
        img {
          width: 80px;
          height: 80px;
        }
        a {
          background-color: #7d5a50;
          border-radius: 12px;
          border: none;
          color: #fff;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 15px;
          text-transform: uppercase;
          transition: background-color 0.2s ease;
        }
        a:hover {
          background-color: #b4846c;
        }
        a:active {
          background-color: #d99879;
        }

        @media screen and (min-width: 950px) {
          img {
            width: 100px;
            height: 100px;
            margin-left: 3rem;
          }
          a {
            margin-right: 3rem;
          }
        }
      `}</style>
    </>
  );
}
