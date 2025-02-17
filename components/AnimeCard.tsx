import { Card, CardFooter, Image } from '@nextui-org/react';
import NextImage from 'next/image';
import MotionDiv from './MotionDiv';

interface AnimeCart {
  name: string;
  url: string;
  episodes: number;
  score: string;
  kind: string;
  episodes_aired?: number;
  index: number;
}

const AnimeCard: React.FC<AnimeCart> = ({
  name,
  url,
  episodes,
  score,
  kind,
  episodes_aired,
  index,
}) => {
  return (
    <MotionDiv index={index}>
      <Card isFooterBlurred radius="lg" className="border-none cursor-pointer">
        <div className="relative h-[37vh] w-full">
          <NextImage
            alt={name}
            className="bg-cover rounded-lg"
            src={url}
            fill
          />
        </div>

        <CardFooter className="text-white flex flex-col mt-auto">
          <div className="w-full flex justify-between">
            <b>{name}</b>
            <p>{kind}</p>
          </div>
          <div className="flex gap-4 w-full mt-2">
            <div className="flex">
              <Image
                src="./episodes.svg"
                alt="episodes"
                width={20}
                height={20}
                className="object-contain"
              />
              <p className="ml-1">{episodes || episodes_aired}</p>
            </div>
            <div className="flex">
              <Image
                src="./star.svg"
                alt="star"
                width={18}
                height={18}
                className="object-contain"
              />
              <p className="ml-1">{score}</p>
            </div>
          </div>
        </CardFooter>
      </Card>
    </MotionDiv>
  );
};

export default AnimeCard;

{
  /* <div className="max-w-sm rounded relative w-full">
      <div className="relative w-full h-[37vh]">
        <NextImage src={url} alt={name} fill className="rounded-xl" />
      </div>
      <div className="py-4 flex flex-col gap-3">
        <div className="flex justify-between items-center gap-1">
          <h2 className="font-bold text-white text-xl line-clamp-1 w-full">
            {name}
          </h2>
          <div className="py-1 px-2 bg-[#161921] rounded-sm">
            <p className="text-white text-sm font-bold capitalize">{kind}</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./episodes.svg"
              alt="episodes"
              width={20}
              height={20}
              className="object-contain"
            />
            <p className="text-base text-white font-bold">
              {episodes || episodes_aired}
            </p>
          </div>
          <div className="flex flex-row gap-2 items-center">
            <Image
              src="./star.svg"
              alt="star"
              width={18}
              height={18}
              className="object-contain"
            />
            <p className="text-base font-bold text-[#FFAD49]">{score}</p>
          </div>
        </div>
      </div>
    </div> */
}
