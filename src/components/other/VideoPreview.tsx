"use client";

import { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

export default function VideoPreview() {
  const [isPlaying, setIsPlaying] = useState(false);

  // ✅ Test video that works everywhere — replace with your own later
  const videoId = "ScMzIvxBSi4";

  return (
    <div className="px-4 pb-4 sm:px-10 sm:pb-5 lg:px-20 lg:pb-10">
      <div className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-xl shadow-lg">
        <div className="relative aspect-[16/9] w-full">
          {isPlaying ? (
            <iframe
              className="absolute inset-0 h-full w-full"
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
              <div className="absolute inset-0 flex items-center justify-center bg-black/40">
                <button
                  onClick={() => setIsPlaying(true)}
                  aria-label="Play video"
                  className="group hover:bg-brand-primary flex h-16 w-16 cursor-pointer items-center justify-center rounded-full bg-white/90 transition sm:h-20 sm:w-20"
                >
                  <Play
                    size={32}
                    className="ml-1 text-black transition-colors duration-200 group-hover:text-white sm:size-[40px]"
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
