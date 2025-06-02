/* Note for Devs: I have added comments throughout most of the code to make it easy for you to contribute. I hope the comments cover all functions with the necessary explanations to help you understand the code. If something is missing please do not hesitate to put up a pull request or open an issue.

Open a Issue here: https://github.com/vector-cn/vectorcn/issues/new
Open a Pull Request here: https://github.com/vector-cn/vectorcn/pulls
*/

import BlockPreview from "@/components/global/block-preview";
import SiteFooter from "@/components/global/site-footer";
import SiteHeader from "@/components/global/site-header";
import { ArrowRightCircleIcon, Github } from "lucide-react";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center w-full">
        <section className="mt-14 bg-background flex flex-col min-h-screen w-full max-w-6xl border-x border-dashed">

          {/* ClassName Label */}
          <div className="text-[10px] sm:text-xs font-mono text-zinc-600 dark:text-zinc-300 mt-15 px-2 sm:px-5">
            For Builders Who Value Simplicity.
          </div>

          {/* Hero Title with dashed border */}
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted dark:bg-muted/20 text-4xl sm:text-5xl font-semibold mt-4 leading-[1.3]">
            <span className="text-foreground">
              Ship your next{" "}
              <span className="font-mono border border-dashed border-muted-foreground">
                {'{SaaS}'}
              </span>{" "}
              website with clean, composable blocks.
            </span>
          </div>

          {/* Subtext with same border/dashed divider */}
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted/10 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300">
            <p>
              The UI kit built with a tech-minimal aesthetic — sharp edges, mono hints, and zero fluff.{" "}
              <br className="hidden sm:block" />
              Every component feels lightweight yet polished, ready to ship.
            </p>
          </div>

          {/* Buttons section with dashed divider */}
          <div className="border-y border-dashed py-4 px-4 sm:px-5 flex flex-row sm:flex-row gap-4 bg-muted dark:bg-muted/20 items-center justify-center sm:justify-start">
            <button className="flex-1 sm:flex-none min-w-0">
              <a
                href="/explore"
                className="font-medium relative rounded-none bg-gradient-to-b from-primary/80 to-primary text-primary-foreground border border-primary text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 px-4 py-2 flex items-center gap-2 justify-center"
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                }}
              >
                Explore Blocks <ArrowRightCircleIcon className="w-4" />
              </a>
            </button>

            <button className="flex-1 sm:flex-none min-w-0">
              <a
                href="https://github.com/gsvprharsha/vectorcn"
                className="font-medium relative rounded-none bg-zinc-300 dark:bg-secondary text-secondary-foreground shadow-xs hover:bg-secondary/80 hover:brightness-125 px-4 py-2.5 flex items-center gap-2 text-sm justify-center"
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                }}
              >
                <Github className="w-4" /> Star us on Github
              </a>
            </button>
          </div>

          {/* Featured Blocks Section */}
          <div className="mt-5 py-4">
            <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]"></div>

            <div className="text-center my-2">
              <span className="uppercase tracking-wider text-foreground/80 font-mono">
                Featured Blocks
              </span>
            </div>

            <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]"></div>
          </div>

          <div className="flex flex-col gap-10 mb-10">
            <BlockPreview category="hero-section" id="one" height="700px" />
            <BlockPreview category="hero-section" id="two" height="700px" />
            <BlockPreview category="notification-bars" id="one" height="300px" />
            <BlockPreview category="notification-bars" id="two" height="300px" />
          </div>

          <SiteFooter />

        </section>
      </main>
    </>
  );
}