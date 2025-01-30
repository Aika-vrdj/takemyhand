"use client";

export default function AlbumInfo() {
  return (
    <div className="w-1/3 pt-8">
      <div className="sticky top-24">
        <h1 className="text-4xl font-bold mb-4">Take my Hand</h1>
        <p className="text-xl text-muted-foreground mb-8">by Aika Ioka</p>
        
        <div className="space-y-6 text-lg">
          <p className="leading-relaxed">
            My first single for 2025, a high-energy psydance track with experimental vocals and 100% self-made synths using Vital. I had a lot of fun making this one. I hope you enjoy!
          </p>
          
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Track List</h2>
            <ol className="list-decimal list-inside space-y-2">
              <li>Take my Hand</li>
              <li>Take my Hand (VIP)</li>
              <li>No Tomorrow</li>
             
            </ol>
          </div>

          <div className="space-y-4">
            <h2 className="text-xl font-semibold">About the Album</h2>
            <p className="leading-relaxed">
              "Take my hand let's break the seams
Ride the waves of pixel dreams
Feel the beat in every vein
Escape the mundane break the chain"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
