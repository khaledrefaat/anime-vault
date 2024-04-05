import Image from 'next/image';

export default function Hero() {
  return (
    <header className="h-[80vh] bg-hero bg-cover bg-no-repeat bg-center bg-black/85">
      <div className="flex justify-between items-center px-16 py-8 w-full h-full">
        <div className="ml-16">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
          />
          <h2 className="text-5xl font-bold text-white">Explore The</h2>
          <h2 className="text-5xl font-bold text-red-500">Diverse Realms</h2>
          <h2 className="text-5xl font-bold text-white">Of Anime Magic</h2>
        </div>
        <Image
          src="/anime.png"
          alt="Logo"
          width={600}
          height={600}
          className="w-5/12 h-5/6"
        />
      </div>
    </header>
  );
}
