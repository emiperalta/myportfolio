export default function Footer(): JSX.Element {
  const actualYear = new Date().getFullYear();

  return (
    <>
      <footer className="footer">
        <p>{actualYear} &copy; - Emiliano Peralta</p>
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
