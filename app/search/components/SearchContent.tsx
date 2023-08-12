'use client'
import React, {FC} from 'react';

import {Song} from "@/types";
import MediaItem from "@/components/song/MediaItem";
import LikeButton from "@/components/button/LikeButton";

interface ISearchContentProps {
  songs: Song[]
}

const SearchContent:FC<ISearchContentProps> = ({songs}) => {
  if (songs.length === 0) {
    return (
      <div className="flex flex-col gap-y-2 w-full px-6 text-neutral-400">
        No songs found
      </div>
    )
  }

  return (
    <div className="flex flex-col gap-y-2 w-full px-6">
      {songs.map((song) => (
        <div key={song.id} className="flex items-center gap-y-2 w-full">
          <div className="flex-1">
            <MediaItem data={song} onClick={()=> {}} />
          </div>
          <LikeButton songId={song.id}/>
        </div>
      ))}
    </div>
  );
};

export default SearchContent;