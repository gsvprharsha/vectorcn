"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Github, Plus, Menu, X } from "lucide-react";
import React from "react";
import { Button } from "@vectorcn/ui/components/button";
import { FlickeringGrid } from "@vectorcn/ui/components/magicui/flickering-grid";
import { ThemeToggle } from "./theme-toggle";

const SiteHeader = () => {
  const { theme } = useTheme();
  const gridColor = theme === "dark" ? "#2a2a2a" : "#d4d4d4";

  const navLinks = [
    { name: "Sections", link: "/sections" },
    { name: "Primitives", link: "/primitives" },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "auto";
  }, [isMenuOpen]);

  return (
    <>
      <div className="fixed left-1/2 -translate-x-1/2 w-full max-w-6xl z-40 px-0">
        <header className="relative w-full border-b border-x border-fd-foreground/10 backdrop-blur-xs bg-background transition-colors box-content">
          {/* Background Grid */}
          <FlickeringGrid
            className="absolute inset-0 -z-10"
            squareSize={2}
            gridGap={2}
            color={gridColor}
            maxOpacity={0.5}
            flickerChance={0.2}
          />

          {/* Decorative Corners */}
          {["-left-[6.5px]", "-right-[6.5px]"].map((side) =>
            ["-top-[6px]", "-bottom-[6px]"].map((position) => (
              <Plus
                key={`${side}-${position}`}
                className={`absolute ${side} ${position} z-10 w-3 h-3 text-muted-foreground hidden sm:block`}
              />
            ))
          )}

          <nav
            className="flex h-20 sm:h-16 lg:h-14 w-full items-center justify-between px-3 sm:px-4"
            aria-label="Main navigation"
          >
            {/* Branding */}
            <div className="inline-flex items-center gap-2 text-lg sm:text-lg font-semibold group">
              <Link href="/" className="inline-flex items-center gap-2">
                <span className="font-semibold sm:font-light text-xl sm:text-lg">[V̄]</span>
                <span className="hidden sm:block">vectorcn</span>
              </Link>
              <div className="my-[calc(3/16*1rem)] w-px h-5 bg-black/30 dark:bg-white/20 hidden sm:block" />
              <span className="text-sm font-light hidden sm:block">Shadcn Marketing Blocks</span>
            </div>
            {/* Nav Links */}
            <div className="hidden sm:absolute sm:left-1/2 sm:-translate-x-1/2 sm:flex sm:gap-2 sm:text-sm sm:font-medium sm:text-muted-foreground sm:backdrop-blur-xs sm:rounded-full sm:border sm:px-4">
              {navLinks.map(({ name, link }) => (
                <Button
                  key={name}
                  variant="link"
                  size="sm"
                  asChild
                  className="text-foreground"
                >
                  <Link href={link}>{name}</Link>
                </Button>
              ))}
            </div>

            {/* Right Controls */}
            <div className="flex items-center gap-2 ml-auto">
              <ThemeToggle />

              <Button
                asChild
                variant="ghost"
                size="icon"
                className="rounded-none border p-0 bg-background hidden sm:inline-flex cursor-pointer"
              >
                <Link href="https://github.com/gsvprharsha/vectorcn" target="_blank">
                  <Github />
                </Link>
              </Button>

              {/* Hamburger */}
              <button
                className="sm:hidden p-2 rounded-md hover:bg-muted-foreground/10 transition"
                onClick={() => setIsMenuOpen(true)}
                aria-label="Open menu"
              >
                <Menu className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
          </nav>
        </header>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div
          className="fixed inset-0 z-[100] bg-background dark:bg-black flex flex-col"
          role="dialog"
          aria-modal="true"
        >
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between w-full border-b border-fd-foreground/10">
            <div className="inline-flex items-center gap-2 text-lg font-semibold group">
              <span className="font-light">[V̄]</span>
              <span>vectorcn</span>
            </div>

            <div className="flex items-center gap-2">
              <ThemeToggle />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="p-2 rounded-md hover:bg-muted-foreground/10 transition"
              >
                <X className="w-6 h-6 text-muted-foreground" />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col px-6 py-8 max-w-6xl mx-auto w-full">
            <nav className="flex flex-col space-y-6 mb-auto text-lg font-medium text-foreground">
              {navLinks.map(({ name, link }) => (
                <Button
                  key={name}
                  variant="link"
                  size="lg"
                  asChild
                  onClick={() => setIsMenuOpen(false)}
                  className="text-foreground"
                >
                  <Link href={link}>{name}</Link>
                </Button>
              ))}
            </nav>

            {/* Bottom Controls */}
            <div className="mt-auto flex w-full gap-4">
              <Button
                variant="ghost"
                size="icon"
                className="flex-1 rounded-md border p-3 flex items-center justify-center"
                asChild
              >
                <Link
                  href="https://github.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Github"
                >
                  <Github />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;