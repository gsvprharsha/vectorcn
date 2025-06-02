import React from 'react'

export default function NotificationBarTwo(){
    return(
    <div className='flex flex-col items-center justify-center h-screen'>
        <a
            className="relative border-y w-full z-10 dark:bg-[#1a1a1a] bg-muted/30 text-white text-sm font-mono py-2 px-6
            flex items-center gap-6 overflow-hidden"
        >

            <div className="absolute left-0 top-0 bottom-0 w-3 skew-x-[25deg] dark:bg-[#333] bg-muted-foreground/50" />
            <div className="absolute left-5 top-0 bottom-0 w-3 skew-x-[25deg] dark:bg-[#333] bg-muted-foreground/50" />
            <div className="absolute left-10 top-0 bottom-0 w-3 skew-x-[25deg] dark:bg-[#333] bg-muted-foreground/50" />

            <span className="absolute left-20 text-foreground">DEPLOYMENT IN PROGRESS</span>

            <div className="ml-auto mr-15 z-10 text-xs text-[#777] h-4">
                <span className='hidden sm:block'>
                    v2.3.1 - ETA: 00:14
                </span>
            </div>
            <div className="absolute right-10 top-0 bottom-0 w-3 skew-x-[-25deg] dark:bg-[#333] bg-muted-foreground/50" />
            <div className="absolute right-5 top-0 bottom-0 w-3 skew-x-[-25deg] dark:bg-[#333] bg-muted-foreground/50" />
            <div className="absolute right-0 top-0 bottom-0 w-3 skew-x-[-25deg] dark:bg-[#333] bg-muted-foreground/50" />
        </a>
    </div>
)}