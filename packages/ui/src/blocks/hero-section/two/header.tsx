"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Button } from "@vectorcn/ui/components/button"
import { Menu, X } from "lucide-react"

export default function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    // Prevent scrolling when menu is open
    if (!isMenuOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "auto"
    }
  }

  return (
    <>
      <header className="sticky top-0 z-50 bg-background w-full font-[family-name:var(--font-geist-sans)] border-b">
        <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between border-l dark:border-l border-r bg-background h-[70px]">
          <div className="flex items-center space-x-8">
            <Link href="#" className="flex items-center">
              <span className="font-semibold text-xl">Acme.Inc</span>
            </Link>

            <nav className="hidden md:flex items-center space-x-8">
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-black dark:text-zinc-300 dark:hover:text-[#EDEDED]"
              >
                Product
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-black dark:text-zinc-300 dark:hover:text-[#EDEDED]"
              >
                About
              </Link>
              <Link
                href="#"
                className="text-sm text-gray-700 hover:text-black dark:text-zinc-300 dark:hover:text-[#EDEDED]"
              >
                Blog
              </Link>
            </nav>
          </div>

          <div className="flex items-center space-x-2">
            <button className="p-2 text-gray-700 hover:text-black">
            </button>
            <div className="hidden md:block">
              <Button 
                asChild
                variant="secondary" 
                className="text-sm rounded-none" 
                size="sm"
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                }}
              >
                <Link href="#">
                  Sign In
                </Link>
              </Button>
            </div>
            <div className="hidden md:block">
              <Button 
                asChild
                variant="default" 
                className="text-sm rounded-none" 
                size="sm"
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                }}
              >
                <Link href="#">
                  Sign Up
                </Link>
              </Button>
            </div>
            <button
              className="md:hidden p-2 text-white hover:text-muted-foreground not-dark:text-black cursor-pointer"
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-[100] bg-background dark:bg-black flex flex-col">
          <div className="max-w-[1100px] mx-auto px-4 py-3 flex items-center justify-between w-full border-b">
            <Link href="#" className="flex items-center">
              <span className="font-semibold text-xl">Acme.Inc</span>
            </Link>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleMenu}
                aria-label="Close menu"
                className="text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white cursor-pointer"
              >
                <X size={24} />
              </button>
            </div>
          </div>

          <div className="flex-1 flex flex-col px-4 py-8 max-w-[1100px] mx-auto w-full">
            <nav className="flex flex-col space-y-6 mb-auto">
              <Link
                href="#"
                className="text-lg py-2 text-gray-700 hover:text-black dark:text-zinc-300 dark:hover:text-[#EDEDED]"
                onClick={toggleMenu}
              >
                Product
              </Link>
              <Link
                href="#"
                className="text-lg py-2 text-gray-700 hover:text-black dark:text-zinc-300 dark:hover:text-[#EDEDED]"
                onClick={toggleMenu}
              >
                About
              </Link>
              <Link
                href="#"
                className="text-lg py-2 text-gray-700 hover:text-black dark:text-zinc-300 dark:hover:text-[#EDEDED]"
              >
                Blog
              </Link>
            </nav>

            <div className="mt-auto space-y-4 w-full">
              <Button variant="outline" className="w-full text-center py-6" onClick={toggleMenu} asChild>
                <Link href="#">
                  Sign in
                </Link>
              </Button>
              <Button variant="default" className="w-full text-center py-6" onClick={toggleMenu} asChild>
                <Link href="#">
                  Sign Up
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  )
}