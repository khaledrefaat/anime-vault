'use client';
import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import AnimeCard from './AnimeCard';
import { fetchAnime } from '@/app/action';

export interface animeType {
  id: number;
  name: string;
  image: {
    original: string;
  };
  episodes: number;
  score: string;
  kind: string;
  episodes_aired?: number;
}

let page = 1;

function LoadMore() {
  const [animeList, setAnimeList] = useState<JSX.Element[]>([]);

  const { ref, inView, entry } = useInView();

  function fetchAndSetAnimeList() {
    fetchAnime(page + 1).then(res => {
      setAnimeList(animeList => [...animeList, ...res]);
      page++;
    });
  }

  useEffect(() => {
    if (inView) {
      fetchAndSetAnimeList();
    }
  }, [inView]);

  return (
    <>
      {animeList}
      <div className="flex justify-center items-center w-full transparent">
        <div ref={ref}>
          {inView && (
            <Image
              src="./spinner.svg"
              alt="spinner"
              width={56}
              height={56}
              className="object-contain"
            />
          )}
        </div>
      </div>
    </>
  );
}

export default LoadMore;
