"use client";

import { Play, Pause, SkipBack, SkipForward, Volume2 } from "lucide-react";
import { useRef } from "react";

interface AudioPlayerProps {
  isPlaying: boolean;
  volume: number;
  onVolumeChange: (value: number) => void;
  onTogglePlay: () => void;
}

export default function AudioPlayer({ 
  isPlaying, 
  volume, 
  onVolumeChange, 
  onTogglePlay 
}: AudioPlayerProps) {
  const audioRef = useRef<HTMLAudioElement>(null);

  // Handle play/pause
  const handleTogglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      onTogglePlay();
    }
  };

  return (
    <div className="max-w-xl mx-auto backdrop-blur-xl bg-card p-8 rounded-2xl shadow-2xl mb-12">
      <audio 
        ref={audioRef} 
        src="https://9tgwg8i0jc.ufs.sh/f/pACH3Nw7YgVW62Q8QRsPSQVD6q39kne7ZTuNFwrdstoJYfAm"
      />

      <div className="flex items-center justify-center gap-8 mb-6">
        <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-all">
          <SkipBack size={20} />
        </button>
        <button 
          onClick={handleTogglePlay}
          className="w-20 h-20 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-all transform hover:scale-105"
        >
          {isPlaying ? <Pause size={36} className="text-primary-foreground" /> : <Play size={36} className="text-primary-foreground ml-1" />}
        </button>
        <button className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-all">
          <SkipForward size={20} />
        </button>
      </div>
      
      <div className="flex items-center gap-4">
        <Volume2 size={20} />
        <input
          type="range"
          min="0"
          max="1"
          step="0.1"
          value={volume}
          onChange={(e) => {
            const newVolume = parseFloat(e.target.value);
            onVolumeChange(newVolume);
            if (audioRef.current) {
              audioRef.current.volume = newVolume;
            }
          }}
          className="w-full h-2 bg-secondary rounded-lg appearance-none cursor-pointer"
        />
      </div>
    </div>
  );
}
