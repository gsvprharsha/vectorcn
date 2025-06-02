import React from 'react'

export default function NotificationBarFour() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <div
        className="relative flex w-full dark:bg-[#101010] bg-muted border px-5 py-3
        items-center text-muted-foreground font-mono text-sm overflow-hidden"
      >
        {/* Left Frame Bar */}
        <div className="absolute left-0 top-0 bottom-0 w-1 dark:bg-[#0ff] bg-[#00569E] opacity-60" />

        <div className="flex items-center gap-4 z-10">
          <span className="uppercase text-xs dark:text-[#0ff] text-[#00569E] tracking-wide">LOG ENTRY</span>
          <div className="h-6 w-[1px] flex-none dark:bg-white/50 bg-black/50" />
          <span className="dark:text-[#ccc] text-muted-foreground/90 font-semibold">Processing Payment</span>
        </div>

        {/* Timestamp */}
        <div className="ml-auto text-xs tracking-tight z-10">
          2025-06-01 10:15:44 UTC
        </div>

        {/* Right Frame Bar */}
        <div className="absolute right-0 top-0 bottom-0 w-1 dark:bg-[#0ff] bg-[#00569E] opacity-60" />
      </div>
    </div>
)}