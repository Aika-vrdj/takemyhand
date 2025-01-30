"use client";

export default function AlbumInfo() {
  return (
    <div className="w-1/3 pt-8">
      <div className="sticky top-24">
        <h1 className="text-4xl font-bold mb-4">Ethereal Dreams</h1>
        <p className="text-xl text-muted-foreground mb-8">by Stellar Echoes</p>
        
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            Embark on a sonic journey through the cosmos with "Ethereal Dreams," 
            the groundbreaking new album that blends atmospheric soundscapes with 
            pulsating rhythms.
          </p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Track List</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Cosmic Dawn (4:32)</li>
              <li>Nebula Whispers (5:17)</li>
              <li>Stellar Dance (4:58)</li>
              <li>Aurora Dreams (6:03)</li>
              <li>Quantum Lullaby (5:45)</li>
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About the Album</h2>
            <p className="leading-relaxed">
              Recorded over two years in our orbital studio, this album represents 
              the culmination of our exploration into the intersection of electronic 
              and ambient music. Each track is carefully crafted to transport listeners 
              to distant galaxies while maintaining a deep connection to human emotion.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
