import Hero from '@/components/Hero';
import Footer from '@/components/Footer';
import LoadMore, { animeType } from '@/components/LoadMore';
import { fetchAnime } from './action';
import AnimeCard from '@/components/AnimeCard';

export default async function Home() {
  const animeList: JSX.Element[] = await fetchAnime();

  return (
    <>
      <Hero />
      <main className="bg-black/90">
        <div className="px-16 py-8">
          <h3 className="text-3xl text-white">Explore Anime</h3>
          <section className="grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
            {animeList}
            <LoadMore />
          </section>
        </div>
      </main>
      <Footer />
    </>
  );
}
