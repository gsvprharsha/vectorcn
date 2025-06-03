import BlockPreview from "@/components/global/block-preview";
import SiteFooter from "@/components/global/site-footer";
import SiteHeader from "@/components/global/site-header";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center w-full">
        <section className="mt-14 bg-background flex flex-col min-h-screen w-full max-w-6xl border-x border-dashed">
          
          {/* Title */}
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted dark:bg-muted/20 text-4xl sm:text-5xl font-normal mt-22 leading-[1.3] flex justify-center items-center text-center">
            <div className="text-foreground flex flex-col sm:flex-row justify-center items-center gap-x-2 w-full">
              Explore{" "}
              <span className="font-mono border font-semibold border-dashed border-muted-foreground mx-1 px-1">
                [Hero]
              </span>
              <span className="block sm:inline">Sections</span>
            </div>
          </div>

          {/* Subtext */}
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted/10 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 flex justify-center items-center text-center">
            <p>
              From headers to footers, explore a growing library of flexible
              sections.{" "}
              <br className="hidden sm:block" />
              Designed to help you build faster and smarter.
            </p>
          </div>

          {/* Nav */}
          <div className="mt-5 py-4">
            <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]" />

            <div className="text-center py-2">
              <a href="/sections/hero-section" className="inline-block mr-2">
                <button
                  type="button"
                  className="px-4 py-1 text-sm font-medium transition-colors bg-foreground text-background hover:bg-foreground/80 cursor-pointer"
                >
                  Hero
                </button>
              </a>

              <a href="/sections/notification-bars" className="inline-block">
                <button
                  type="button"
                  className="px-4 py-1 text-sm font-medium transition-colors text-foreground hover:bg-foreground/10 cursor-pointer"
                >
                  Notification
                </button>
              </a>
            </div>

            <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]" />
          </div>

          {/* Block Previews */}
          <div className="flex flex-col gap-5 mb-4">
            <BlockPreview category="hero-section" id="one" height="700px" />
            <BlockPreview category="hero-section" id="two" height="700px" />
          </div>

          <SiteFooter />
        </section>
      </main>
    </>
  );
}