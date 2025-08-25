"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Test video that works everywhere — replace with your own later
  const videoId = "ScMzIvxBSi4";

  return (
    <div className="px-4 pb-4 sm:px-10 sm:pb-5 lg:pb-10 lg:px-20 ">
      <div className="relative w-full sm:w-[90%] max-w-[1440px] mx-auto mt-4 sm:mt-16 rounded-xl overflow-hidden shadow-lg">
        <div className="relative w-full aspect-[16/9]">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 w-full h-full"
              src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <>
              {/* Thumbnail */}
              <Image
                src="/video.png"
                alt="Dashboard Preview"
                fill
                priority
                className="object-cover"
              />
              {/* Dark overlay + Play button */}
              <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                  className="group flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full hover:bg-brand-primary transition"
                >
                  <Play
                    size={32}
                    className="sm:size-[40px] text-black ml-1 transition-colors duration-200 group-hover:text-white"
                  />
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
