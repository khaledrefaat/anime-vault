'use server';

import AnimeCard from '@/components/AnimeCard';
import { animeType } from '@/components/LoadMore';

export async function fetchAnime(page = 1) {
  const res = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=10&order=popularity`
  );
  const data: animeType[] = await res.json();

  return data.map((anime, index) => (
    <AnimeCard
      episodes={anime.episodes}
      kind={anime.kind}
      name={anime.name}
      score={anime.score}
      url={`https://shikimori.one${anime.image.original}`}
      key={anime.id}
      episodes_aired={anime.episodes_aired}
      index={index}
    />
  ));
}
