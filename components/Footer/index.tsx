export default function Footer(): JSX.Element {
  return (
    <>
      <footer className='footer'>
        <p>2021 &copy; - Emiliano Peralta</p>
      </footer>
      <style jsx>{`
        .footer {
          font-size: 0.8rem;
          margin-top: auto;
          padding: 10px;
          text-align: center;
        }
      `}</style>
    </>
  );
}
