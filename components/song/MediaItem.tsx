'use client'
import React, {FC} from 'react';
import Image from "next/image";

import useLoadImage from "@/hooks/useLoadImage";
import {Song} from "@/types";
import PlayButton from "@/components/button/PlayButton";

interface IMediaItemProps {
  data: Song
  onClick?: (id: string) => void
}

const MediaItem:FC <IMediaItemProps> = ({data, onClick}) => {
  const imageUrl = useLoadImage(data)
  const handleOnClick = () => {
    if (onClick) {
      return onClick(data.id)
    }
  }

  return (
    <div onClick={handleOnClick}
      className="flex items-center gap-x-3 cursor-pointer hover:bg-neutral-800/50
        w-full p-2 rounded-md relative
      "
    >
      <div className="relative rounded-md min-h-[48px] min-w-[48px] overflow-hidden">
        <Image
          src={imageUrl || '/assets/liked.png'} alt={data.title}
          className="object-cover"
          fill
        />
      </div>
      <div className="flex flex-col gap-y-1 overflow-hidden">
        <p className='text-white truncate'>
          {data.title}
        </p>
        <p className='text-neutral-400 text-sm truncate'>
          {data.author}
        </p>
      </div>
      <div
        className="absolute top-24 right-5"
      >
        <PlayButton />
      </div>
    </div>
  );
};

export default MediaItem;