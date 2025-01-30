"use client";

import { ExternalLink } from "lucide-react";

export default function StoreLink() {
  return (
    <div className="text-center mb-24">
      <a 
        href="#" 
        target="_blank" 
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 bg-secondary text-foreground px-8 py-4 rounded-full text-lg font-medium hover:bg-secondary/80 transition-all backdrop-blur-sm"
      >
        Listen on Apple Music
        <ExternalLink size={20} />
      </a>
    </div>
  );
}
