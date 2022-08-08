import Image from 'next/image';

export default function Photo(): JSX.Element {
  return (
    <>
      <section className="img">
        <Image
          alt="perfil photo"
          className="perfil-photo"
          height={220}
          src="/photo.png"
          width={200}
        />
      </section>
      <style jsx>{`
        .img {
          align-items: center;
          display: flex;
          justify-content: center;
        }
      `}</style>
    </>
  );
}
