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
    <section className="p-4 sm:p-10 lg:p-20 bg-gradient-to-b from-[#f0fff7] via-white to-[#f0fff7] flex justify-center">
      <div className="max-w-[1440px] w-full flex flex-col justify-center items-center gap-4 sm:gap-10 lg:gap-14 font-lato">
        {/* Heading */}
        <div className="max-w-7xl flex flex-col justify-between items-center gap-4 text-center">
          <h2 className="font-red-rose text-2xl sm:text-3xl">{heading}</h2>
          <p className="text-base sm:text-lg text-brand-gray max-w-5xl">
            {subheading}
          </p>
        </div>

        {/* Video Section */}
        <div className="relative w-full max-w-7xl rounded-xl overflow-hidden shadow-lg">
          <div className="relative w-full aspect-video">
            {isPlaying ? (
              <iframe
                className="absolute inset-0 w-full h-full"
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
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    aria-label="Play video"
                    className="group cursor-pointer flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/90 rounded-full hover:bg-brand-primary transition"
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
    </section>
  );
};

export default CvpVideo;
