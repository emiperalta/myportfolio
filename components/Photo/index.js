import Image from 'next/image';

export default function Photo() {
  return (
    <>
      <section className='img'>
        <Image
          alt='perfil photo'
          className='perfil-photo'
          height={220}
          src='/photo.png'
          width={200}
        />
      </section>
      <style jsx>{`
        .img {
          display: flex;
          justify-content: center;
          padding: 1.5rem 0;
        }
      `}</style>
    </>
  );
}
