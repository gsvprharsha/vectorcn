"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import SiteHeader from "./header"

export default function HeroSectionOne() {
  const { theme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return null // Avoids hydration mismatch

  const overlayStyle =
    theme === "dark"
      ? {
          background:
            "linear-gradient(to top, rgba(10, 10, 10, 3.0), rgba(10, 10, 10, 0.9), rgba(15, 15, 15, 0.5))",
        }
      : {
          background:
            "linear-gradient(to top, rgba(255, 255, 255, 3.0), rgba(255, 255, 255, 0.9), rgba(255, 255, 255, 0))",
        }

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <SiteHeader />

      <div className="border-x w-full max-w-[1100px] min-h-full mx-auto bg-background flex-grow overflow-x-hidden">
        <div className="relative px-2 sm:px-2 items-center gap-2 py-2 pl-2">
          <div className="relative rounded-xl border min-h-[60vh] overflow-hidden sm:min-h-[70vh]">
            {/* Video Background */}
            <video
              src="https://ik.imagekit.io/rkmw3teqi/dna-video-light.mp4?updatedAt=1748766597156"
              autoPlay
              loop
              muted
              playsInline
              className="absolute top-0 left-0 w-full h-full object-cover z-0"
            />

            {/* Black fade overlay */}
            <div
              className="absolute bottom-0 left-0 w-full h-full pointer-events-none z-10"
              style={overlayStyle}
            />

            {/* Content */}
            <div className="absolute inset-0 z-20 flex flex-col justify-end px-4 sm:px-8 pb-8 sm:pb-20">
              <div className="space-y-2 w-full max-w-xl">
                <span className="dark:text-white block text-xs font-medium uppercase tracking-[1.8px] mb-10 text-left">
                  BUILDING INNOVATION IN MARKETING
                </span>
                <h1 className="tracking-tight dark:text-white text-3xl sm:text-4xl font-normal mb-4">
                  Building Tomorrow&apos;s AI. <br />
                  Today,<span className="font-semibold"> with precision.</span>
                </h1>
                <p className="text-sm mb-10 dark:text-white">
                  Data rooted in intelligence. Engineering for the future.
                </p>

                <div className="flex flex-row sm:flex-row gap-4 px-5 sm:px-0 items-center justify-center sm:justify-start">
                  <button className="flex-1 sm:flex-none min-w-0">
                    <a
                      href="#"
                      className="font-medium relative rounded-none bg-gradient-to-b from-primary/80 to-primary text-primary-foreground border border-primary text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 px-4 py-2 flex items-center gap-2 justify-center"
                      style={{
                        clipPath:
                          "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                      }}
                    >
                      Our Products
                    </a>
                  </button>

                  <button className="flex-1 sm:flex-none min-w-0">
                    <a
                      href="https://github.com/vector-cn/vectorcn"
                      className="font-medium relative rounded-none bg-zinc-300 dark:bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/10 dark:hover:brightness-90 px-4 py-2.5 flex items-center gap-2 text-sm justify-center"
                      style={{
                        clipPath:
                          "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                      }}
                    >
                      Contact Us
                    </a>
                  </button>
                </div>

              </div>
            </div>
          </div>

          {/* Trusted by Section */}
          <div className="mt-4 w-full flex justify-center items-center">
            <p className="uppercase font-semibold text-sm">Trusted by</p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-4 px-2">
          <img
              src="https://ik.imagekit.io/rkmw3teqi/Mega%20Logotype%20(1).svg?updatedAt=1748767644434"
              className="not-dark:invert object-contain"
              width={100}
              height={60}
              alt="Mega"
          />
          <img
              src="https://ik.imagekit.io/rkmw3teqi/Walmart%20Logotype.svg?updatedAt=1748768445420"
              className="not-dark:invert object-contain"
              width={120}
              height={60}
              alt="Walmart"
          />
          <img
              src="https://ik.imagekit.io/rkmw3teqi/Dropbox%20Logotype.svg?updatedAt=1748768445452"
              className="not-dark:invert object-contain"
              width={120}
              height={60}
              alt="Dropbox"
          />
          <img
              src="https://ik.imagekit.io/rkmw3teqi/Google%20Logotype.svg?updatedAt=1748768445435"
              className="not-dark:invert object-contain"
              width={120}
              height={60}
              alt="Google"
          />
          <img
              src="https://ik.imagekit.io/rkmw3teqi/Amazon%20Logotype.svg?updatedAt=1748768445491"
              className="not-dark:invert object-contain"
              width={100}
              height={60}
              alt="Amazon"
          />
          <img
              src="https://ik.imagekit.io/rkmw3teqi/Wix%20Logotype.svg?updatedAt=1748768445475"
              className="not-dark:invert object-contain"
              width={120}
              height={60}
              alt="Wix"
          />
          </div>

        </div>
      </div>
    </div>
  )
}