import React from 'react'

export default function NotificationBarThree() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
    <div
        className="relative flex w-full dark:bg-[#151515] bg-muted/30 font-mono text-sm text-[#bbb] px-6 py-3
        items-center gap-6 border-y overflow-hidden"
      >
        {/* Scanline Overlay */}
        <div
          className="pointer-events-none absolute inset-0
          dark:bg-[repeating-linear-gradient(0deg,#222,#222_2px,#151515_2px,#151515_4px)] 
          bg-[repeating-linear-gradient(0deg,#f1f1f1,#111_2px,#f1f1f1_2px,#f5f5f5_4px)] dark:opacity-20 opacity-10"
        />

        {/* Status Text */}
        <div className="flex items-center gap-4 z-10">
          <span
            className="block h-3 w-3 dark:bg-[#0ff] bg-[#00569E] rounded-full animate-pulse
            dark:shadow-[0_0_8px_#0ff] shadow-[0_0_8px_#00569E]"
          />
          <span className="uppercase tracking-widest text-xs text-foreground">Connection Live</span>
        </div>

        {/* Uptime */}
        <div className="ml-auto z-10 text-xs text-[#666]">Uptime: 12h 34m 21s</div>
      </div>
    </div>
)}