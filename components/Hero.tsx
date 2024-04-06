import Image from 'next/image';

function HeaderTitle({
  title,
  className,
}: {
  title: string;
  className?: string;
}) {
  return (
    <h2
      className={`text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white ${
        className ? className : ''
      }`}
    >
      {title}
    </h2>
  );
}

export default function Hero() {
  return (
    <header className="h-[80vh] bg-hero bg-cover bg-no-repeat bg-center bg-black/85">
      <div className="flex flex-row justify-between items-center sm:px-16 py-8 w-full h-full">
        <div className="ml-16">
          <Image
            src="/logo.svg"
            alt="Logo"
            width={100}
            height={100}
            className="mb-8"
          />
          <HeaderTitle title="Explore The" />
          <HeaderTitle title="Diverse Realms" className="text-red-500" />
          <HeaderTitle title="Of Anime Magic" />
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
