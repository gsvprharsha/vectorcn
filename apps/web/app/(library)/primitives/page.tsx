"use client";

import CodeBlock from "@/components/global/codeblock";
import SiteFooter from "@/components/global/site-footer";
import SiteHeader from "@/components/global/site-header";
import { Button } from "@vectorcn/ui/components/button";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@vectorcn/ui/components/dialog";
import { useTheme } from "next-themes";
import { useState } from "react";

export default function Page() {
  const [open, setOpen] = useState(false);
  const [selectedClassName, setSelectedClassName] = useState("");
  const { theme }  = useTheme()

  const handleClick = (className: string) => {
    setSelectedClassName(className);
    setOpen(true);
  };

  

  const buttons = [
    {
      label: "Default",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] text-sm bg-primary text-primary-foreground shadow-xs hover:bg-primary/90 cursor-pointer",
    },
    {
      label: "Default Gradient",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-linear-to-b [text-shadow:0_1px_0_var(--color-primary)] border-primary from-primary/80 to-primary dark:from-primary dark:to-primary/80 text-primary-foreground dark:border-primary border text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 active:brightness-95 cursor-pointer",
    },
    {
      label: "Secondary",
      className:
        "font-medium text-sm relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 cursor-pointer",
    },
    {
      label: "Outline",
      className:
        "font-medium text-sm relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] shadow-xs bg-linear-to-t hover:to-muted to-background from-muted dark:from-muted/50 border shadow-zinc-950/10 duration-200 cursor-pointer",
    },
    {
      label: "Destructive",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-linear-to-b from-destructive to-destructive/80 dark:from-red-800 dark:to-red-700 text-white shadow-xs hover:brightness-125 active:brightness-95 focus-visible:ring-red-500/30 dark:focus-visible:ring-red-500/60 border border-red-900 text-sm ring ring-inset ring-white/25 transition-[filter] duration-200 cursor-pointer",
    },
    {
      label: "Blue Primary",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-linear-to-b from-blue-700 to-blue-700/80 dark:from-blue-900 dark:to-blue-800 text-white shadow-xs hover:brightness-125 active:brightness-95 focus-visible:ring-blue-500/30 dark:focus-visible:ring-blue-500/60 border border-blue-900 text-sm ring ring-inset ring-white/25 transition-[filter] duration-200 cursor-pointer",
    },
    {
      label: "Teal Primary",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-linear-to-b from-teal-300 to-teal-300/80 dark:from-teal-500 dark:to-teal-400 text-black shadow-xs hover:brightness-125 active:brightness-95 focus-visible:ring-teal-300/30 dark:focus-visible:ring-teal-300/60 border border-teal-500 text-sm ring ring-inset ring-white/25 transition-[filter] duration-200 cursor-pointer",
    },
    {
      label: "Green Primary",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-linear-to-b from-green-700 to-green-700/80 dark:from-green-900 dark:to-green-800 text-white shadow-xs hover:brightness-125 active:brightness-95 focus-visible:ring-green-500/30 dark:focus-visible:ring-green-500/60 border border-green-900 text-sm ring ring-inset ring-white/25 transition-[filter] duration-200 cursor-pointer",
    },
    {
      label: "Orange Primary",
      className:
        "font-medium relative rounded-none h-9 px-4 py-2 has-[>svg]:px-3 [clip-path:polygon(0%_0%,_90%_0%,_100%_20%,_100%_100%,_10%_100%,_0%_80%)] bg-linear-to-b from-orange-700 to-orange-700/80 dark:from-orange-900 dark:to-orange-800 text-white shadow-xs hover:brightness-125 active:brightness-95 focus-visible:ring-orange-500/30 dark:focus-visible:ring-orange-500/60 border border-orange-900 text-sm ring ring-inset ring-white/25 transition-[filter] duration-200 cursor-pointer",
    },
  ];

  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center w-full">
        <section className="mt-14 bg-background flex flex-col min-h-screen w-full max-w-6xl border-x border-dashed">
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted dark:bg-muted/20 text-4xl sm:text-5xl font-semibold mt-22 leading-[1.3] flex justify-center items-center">
            <div className="text-foreground flex flex-col sm:flex-row justify-center items-center gap-x-2 w-full">
              Explore{" "}
              <span className="font-mono border font-semibold border-dashed border-muted-foreground mx-1 px-1">
                {"{Primitives}"}
              </span>
            </div>
          </div>

          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted/10 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 flex justify-center items-center text-center">
            <p>
              From buttons to cards, explore a growing library of versatile UI primitives.{" "}
              <br className="hidden sm:block" />
              Sharp edges, mono hints, and fully customizable — with ShadCN under the hood.
            </p>
          </div>

          <div className="mb-4">
            <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]" />

            <div className="text-center my-2">
              <span className="uppercase tracking-wider text-foreground/80 font-mono">
                More Primitives Coming Soon
              </span>
            </div>

            <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]" />
          </div>

            <div className="w-full border-t flex items-center justify-center p-4 text-xl font-semibold">

                Click the <span className="font-mono ml-1">{" "} [buttons]</span>

            </div>



          {/* Render Buttons in Rows */}
          <div className="grid grid-cols-1 md:grid-cols-3 mb-10">
            {buttons.map((btn, idx) => (
              <div
                key={idx}
                className="border border-dashed p-4 flex items-center justify-center h-40"
              >
                <button onClick={() => handleClick(btn.className)} className={btn.className}>
                  {btn.label}
                </button>
              </div>
            ))}
          </div>
          <SiteFooter />
        </section>
      </main>

      {/* Dialog */}
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-xl">Button Style</DialogTitle>
            <DialogDescription>Copy the following styling and paste it into your code.</DialogDescription>
          </DialogHeader>
          <div className="w-full mb-10">
            <CodeBlock 
                lang="js" 
                maxWidth={450} 
                className="w-90 sm:w-full"
                theme={theme === "dark" ? "github-dark" : "github-light"}
                
            >
                {selectedClassName}
            </CodeBlock>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}