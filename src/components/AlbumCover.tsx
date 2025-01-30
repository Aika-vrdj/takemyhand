"use client";

import { motion } from "framer-motion";
import type { MotionStyle } from "framer-motion";

interface AlbumCoverProps {
  style: MotionStyle;
}

export default function AlbumCover({ style }: AlbumCoverProps) {
  return (
    <motion.div 
      style={{ 
        ...style,
        transformStyle: "preserve-3d",
        perspective: 1000
      }}
      className="relative w-full aspect-square max-w-2xl mx-auto mb-24"
    >
      <image 
        src="https://9tgwg8i0jc.ufs.sh/f/pACH3Nw7YgVWmpLguIiVjFe9AcYoI0J6fLMXxGSnt1UDhNpw"
        alt="Album Cover"
        className="w-full h-full object-cover rounded-lg shadow-2xl"
      />
    </motion.div>
  );
}
