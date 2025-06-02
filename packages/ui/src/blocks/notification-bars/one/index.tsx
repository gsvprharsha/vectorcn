import React from 'react'

export default function NotificationBarOne() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
      <a
        className="group top-0 z-10 mt-0 flex w-full gap-x-4 whitespace-nowrap py-2 text-sm font-medium text-white outline-none
        bg-gradient-to-b from-[#dcdcdc]/70 via-[#dcdcdc]/30 to-[#dcdcdc]/70
        dark:bg-[linear-gradient(180deg,rgba(255,255,255,0.1)_0%,rgba(180,180,180,0.08)_40%,rgba(100,100,100,0.05)_70%,rgba(255,255,255,0.1)_100%)] dark:bg-black border-black/20 dark:border-white/30 backdrop-blur-sm not-dark:border-b not-dark:border-[#dcdcdc]/10"
      >
        <div
          className="relative -my-2 flex-grow overflow-hidden
          before:absolute before:inset-0 before:mr-2 before:-translate-y-[calc(100%-0.625rem)]
          before:-skew-x-[45deg] before:rounded before:border-b before:border-r before:border-black/20
          dark:before:border-white/30 before:bg-[#dcdcdc] dark:before:bg-black"
        />
        <div
          className="truncate text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]
          dark:[text-shadow:0_1px_2px_rgba(255,255,255,0.6)]"
        >
          Notification Bar
        </div>
        <div className="my-[calc(3/16*1rem)] w-[1px] flex-none dark:bg-white/20 bg-black/30" />
        <div
          className="truncate text-foreground [text-shadow:0_1px_2px_rgba(0,0,0,0.4)]
          dark:[text-shadow:0_1px_2px_rgba(255,255,255,0.6)]"
        >
          Monochrome
        </div>
        <div
          className="relative -my-2 flex-grow overflow-hidden
          before:absolute before:inset-0 before:ml-2 before:-translate-y-[calc(100%-0.625rem)]
          before:skew-x-[45deg] before:rounded before:border-b before:border-l before:border-black/20
          dark:before:border-white/30 before:bg-[#dcdcdc] dark:before:bg-black"
        />
      </a>
    
    </div>
  )
}