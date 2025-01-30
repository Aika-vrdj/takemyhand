"use client";

import { useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import useSound from "use-sound";
import ArtistLogo from "@/components/ArtistLogo";
import AlbumCover from "@/components/AlbumCover";
import AudioPlayer from "@/components/AudioPlayer";
import AlbumInfo from "@/components/AlbumInfo";
import StoreLink from "@/components/StoreLink";
import Footer from "@/components/Footer";

export default function HomePage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  const rotateX = useSpring(useTransform(mouseY, [0, dimensions.height], [8, -8]), {
    stiffness: 100,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [0, dimensions.width], [-8, 8]), {
    stiffness: 100,
    damping: 30
  });

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      mouseX.set(event.clientX);
      mouseY.set(event.clientY);
    };

    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };

    // Initial dimensions
    updateDimensions();

    // Event listeners
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", updateDimensions);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", updateDimensions);
    };
  }, [mouseX, mouseY]);

  const y = useTransform(scrollY, [0, 300], [0, 25]);

  const [play, { pause }] = useSound('/path-to-your-audio.mp3', {
    volume: volume,
    onend: () => setIsPlaying(false),
  });

  const togglePlay = () => {
    if (isPlaying) {
      pause();
    } else {
      play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div ref={containerRef} className="min-h-screen bg-background bg-gradient-to-b from-background to-muted">
      <div className="max-w-7xl mx-auto px-8 py-24">
        <ArtistLogo />
        
        <div className="flex gap-16">
          <div className="w-2/3">
            <AlbumCover 
              style={{ 
                rotateX,
                rotateY,
                y
              }} 
            />
            <AudioPlayer 
              isPlaying={isPlaying}
              volume={volume}
              onVolumeChange={setVolume}
              onTogglePlay={togglePlay}
            />
          </div>
          <AlbumInfo />
        </div>

        <StoreLink />
      </div>
    </div>
  );
}
