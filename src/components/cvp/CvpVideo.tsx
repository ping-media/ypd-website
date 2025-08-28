"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";

interface CvpVideoProps {
  heading: string;
  subheading: string;
  videoId: string;
  thumbnail: string;
}

const CvpVideo: React.FC<CvpVideoProps> = ({
  heading,
  subheading,
  videoId,
  thumbnail,
}) => {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <section className="flex justify-center bg-gradient-to-b from-[#f0fff7] via-white to-[#f0fff7] p-4 sm:p-10 lg:p-20">
      <div className="font-lato flex w-full max-w-[1440px] flex-col items-center justify-center gap-4 sm:gap-10 lg:gap-14">
        {/* Heading */}
        <div className="flex max-w-7xl flex-col items-center justify-between gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-brand-gray max-w-5xl text-base sm:text-lg">
            {subheading}
          </p>
        </div>

        {/* Video Section */}
        <div className="relative mx-auto w-full max-w-[1000px] overflow-hidden rounded-xl shadow-lg">
          <div className="relative aspect-[16/9] w-full">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 h-full w-full"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=1&playsinline=1&modestbranding=1&rel=0`}
                title={heading}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              />
            ) : (
              <>
                {/* Thumbnail */}
                <Image
                  src={thumbnail}
                  alt={heading}
                  fill
                  priority
                  className="object-cover"
                />
                {/* Overlay + Play */}
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
    </section>
  );
};

export default CvpVideo;
