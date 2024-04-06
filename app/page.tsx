import Image from 'next/image';
import styles from './page.module.css';
import Hero from '@/components/Hero';
import { data } from './_data';
import AnimeCard from '@/components/AnimeCard';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-black/90">
        <div className="px-16 py-8">
          <h3 className="text-3xl text-white">Explore Anime</h3>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {data.map(anime => (
              <AnimeCard
                episodes={anime.episodes}
                kind={anime.kind}
                name={anime.name}
                score={anime.score}
                url={anime.image.original}
                key={anime.id}
                episodes_aired={anime.episodes_aired}
              />
            ))}
          </div>
        </div>
      </main>
    </>
  );
}
