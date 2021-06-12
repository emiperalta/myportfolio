export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <h3>{`<LOGO>`}</h3>
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
        h3 {
          margin: 0;
          font-weight: 700;
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
      `}</style>
    </>
  );
}
