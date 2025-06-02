"use client";

/* Please refer the note in grid.tsx file before using this below component */
import { FlickeringGrid } from "@vectorcn/ui/components/magicui/flickering-grid";

import SiteHeader from "./header";
import { useTheme } from "next-themes";

export default function HeroSectionTwo() {

  const { theme } = useTheme();
  const gridColor = theme === "dark" ? "#4a4a4a" : "#0f0f10";

  return (
    <section className="relative min-h-screen bg-background text-foreground border border-muted transition-colors duration-500 overflow-hidden">
      <SiteHeader />
          <FlickeringGrid
            className="absolute inset-0 z-1"
            squareSize={2}
            gridGap={5}
            color={gridColor}
            maxOpacity={0.5}
            flickerChance={0.2}
          />

<div className="absolute inset-0 pointer-events-none z-[5]
  bg-[radial-gradient(ellipse_500px_300px_at_center,_rgba(255,255,255,1)_0%,_rgba(255,255,255,0.7)_60%,_transparent_100%)]
  dark:bg-[radial-gradient(ellipse_500px_400px_at_center,_rgba(0,0,0,1)_0%,_rgba(0,0,0,0.7)_60%,_transparent_100%)]
" />


      <div className="flex flex-col items-center gap-8 relative z-10 pt-40 md:pt-40 mx-10">
        <div className="animate-fade-up">
          <h1 className="text-6xl md:text-8xl font-serif text-center leading-none max-w-4xl">
            Create. Connect. <em>Scale.</em>
          </h1>
        </div>
        <div className="animate-fade-up">
          <p className="text-base md:text-lg text-foreground/70 text-center max-w-lg mx-auto">
            Empowering bold ideas through seamless collaboration and scalable designs.
          </p>
        </div>
        <div className="animate-fade-up">
          <div className="flex justify-center gap-2">
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground shadow hover:bg-primary/90 h-12 px-8 text-base">
              Sign up
            </button>
            <button className="inline-flex items-center justify-center whitespace-nowrap rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-12 px-8 text-base">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}