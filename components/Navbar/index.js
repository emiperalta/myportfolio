import { useEffect, useState } from 'react';

import { Light, Dark } from 'utils/theme';

export default function Navbar() {
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    console.log('entró');
    if (typeof window !== 'undefined') {
      const themeFromLS = window.localStorage.getItem('theme');
      console.log('from ls', themeFromLS);
      setTheme(themeFromLS);
      console.log('in component', theme);
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
        <a href='/cv.pdf' download>
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
        .toggler-container {
          margin: 0 auto;
          padding: 40px;
        }
        .toggler-btn {
          border: none;
          background: none;
          max-width: 100px;
          font-size: 2.5rem;
          cursor: pointer;
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
      {theme === 'dark' ? <Dark /> : <Light />}
    </>
  );
}
