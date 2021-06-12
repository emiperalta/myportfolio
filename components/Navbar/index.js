export default function Navbar() {
  return (
    <>
      <nav className='navbar'>
        <h3>{`<LOGO>`}</h3>
        <button>Descargar CV</button>
      </nav>
      <style jsx>{`
        .navbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 15px;
        }
        h3 {
          margin: 0;
          font-weight: 700;
        }
        button {
          background-color: #7d5a50;
          border-radius: 12px;
          border: none;
          color: #fff;
          cursor: pointer;
          font-size: 0.85rem;
          font-weight: 600;
          padding: 15px;
          text-transform: uppercase;
          transition: background-color 0.2s ease;
        }
        button:hover {
          background-color: #b4846c;
        }
        button:active {
          background-color: #d99879;
        }
      `}</style>
    </>
  );
}
