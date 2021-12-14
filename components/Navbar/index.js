import { useEffect, useState } from 'react';

import { Light, Dark } from 'utils/theme';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTheme(window.localStorage.getItem('theme'));
    }
  }, [theme]);

  const handleClick = () => {
    localStorage.setItem('theme', theme === 'light' ? 'dark' : 'light');
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  return (
    <>
      <nav className='navbar'>
        <img
          src={theme === 'dark' ? '/favicon-dm.png' : '/favicon.png'}
          alt='logo'
        />
        <a href='/CV-Emiliano-Peralta.pdf' download>
          Descargar CV
        </a>
      </nav>
      <div className='toggler-container'>
        <button onClick={handleClick} className='toggler-btn'>
          {theme === 'dark' ? (
            <i className='fas fa-sun'></i>
          ) : (
            <i className='fas fa-moon'></i>
          )}
        </button>
      </div>
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
          background-color: #24b188;
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
          background-color: #24c596;
        }
        a:active {
          background-color: #1fdea6;
        }
        .toggler-container {
          margin: 0 auto;
          padding: 40px;
        }
        .toggler-btn {
          background: none;
          border: none;
          cursor: pointer;
          font-size: 2.5rem;
          max-width: 100px;
        }

        @media screen and (min-width: 950px) {
          img {
            height: 100px;
            margin-left: 3rem;
            width: 100px;
          }
          a {
            margin-right: 3rem;
          }
        }
      `}</style>
      {theme === 'dark' ? <Dark /> : <Light />}
    </>
  );
}
