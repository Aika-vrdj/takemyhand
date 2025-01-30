"use client";

export default function Footer() {
  return (
    <footer className="border-t border-secondary/20 py-12">
      <div className="flex justify-center gap-8">
        {['twitter', 'instagram', 'apple-music', 'youtube'].map((social) => (
          <a
            key={social}
            href="#"
            className="text-muted-foreground hover:text-foreground transition-all"
          >
            <div className="w-12 h-12 rounded-full bg-secondary/10 backdrop-blur-sm flex items-center justify-center hover:bg-secondary/20 transition-all">
              <span className="capitalize text-sm font-medium">{social[0]}</span>
            </div>
          </a>
        ))}
      </div>
    </footer>
  );
}
