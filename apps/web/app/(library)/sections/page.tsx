import SiteFooter from "@/components/global/site-footer";
import SiteHeader from "@/components/global/site-header";
import { ArrowRightCircleIcon } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <>
      <SiteHeader />
      <main className="flex flex-col items-center justify-center w-full">
        <section className="mt-14 bg-background flex flex-col min-h-screen w-full max-w-6xl border-x border-dashed">

          {/* Hero Title with dashed border */}
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted dark:bg-muted/20 text-4xl sm:text-5xl font-semibold mt-22 leading-[1.3] flex justify-center items-center">
            <span className="text-foreground flex justify-center items-center text-center w-full">
              Explore{" "}
              <span className="font-mono border border-dashed border-muted-foreground mx-2">
                {'{Sections}'}
              </span>
            </span>
          </div>
          {/* Subtext with same border/dashed divider */}
          <div className="border-y border-dashed py-4 px-2 sm:px-5 bg-muted/10 text-sm sm:text-base leading-relaxed text-zinc-600 dark:text-zinc-300 flex justify-center items-center text-center">
            <p>
              From headers to footers, explore a growing library of flexible sections.{" "}
              <br className="hidden sm:block" />
              Designed to help you build faster and smarter.
            </p>
          </div>

          <div className="py-4 px-20 sm:px-5 flex flex-row sm:flex-row gap-4 items-center justify-center">
            <button className="flex-1 sm:flex-none">
              <a
                href="/sections/hero-section"
                className="font-medium relative rounded-none bg-gradient-to-b from-primary/80 to-primary text-primary-foreground border border-primary text-sm shadow-md shadow-zinc-950/30 ring ring-inset ring-white/20 transition-[filter] duration-200 hover:brightness-125 px-4 py-2 flex items-center gap-2 justify-center"
                style={{
                  clipPath: "polygon(0% 0%, 90% 0%, 100% 20%, 100% 100%, 10% 100%, 0% 80%)",
                }}
              >
                See all Sections <ArrowRightCircleIcon className="w-4" />
              </a>
            </button>
          </div>
          
          <div className="h-4 w-full border-y border-dashed dark:bg-[repeating-linear-gradient(-45deg,var(--color-border),var(--color-border)_1px,transparent_1px,transparent_6px)] bg-[repeating-linear-gradient(-45deg,var(--color-foreground),var(--color-muted)_1px,transparent_1px,transparent_6px)]"/>

<div className="flex flex-col lg:flex-row">

  {/* Left Column – Hero Section */}
  <div className="flex-1 border-r border-dashed">
    <Link href="/sections/hero-section" className="block w-full h-full hover:brightness-150 transition-all">
      <div className="w-full overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="bg-muted/20 h-60 flex items-center justify-center text-muted-foreground text-sm italic">
          <Image 
            src="/sections/hero-section.svg"
            alt="Hero-Section Banner"
            width={100}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Hero Section</h3>
          <p className="text-sm text-muted-foreground">
            Explore layout options that work across landing pages, product intros, and more.
          </p>
          <span className="text-sm text-primary hover:underline font-medium">
            View Component →
          </span>
        </div>
      </div>
    </Link>
  </div>

  {/* Right Column – Notification Bars */}
  <div className="flex-1">
    <Link href="/sections/notification-bars" className="block w-full h-full hover:brightness-150 transition-all">
      <div className="w-full overflow-hidden shadow hover:shadow-lg transition-shadow duration-200 cursor-pointer">
        <div className="bg-muted/20 h-60 flex items-center justify-center text-muted-foreground text-sm italic">
          <Image 
            src="/sections/notification-bars.svg"
            alt="Notification Bars Banner"
            width={100}
            height={100}
            className="w-full h-full object-cover"
            priority
          />
        </div>
        <div className="p-4 space-y-2">
          <h3 className="text-lg font-semibold text-foreground">Notification Bars</h3>
          <p className="text-sm text-muted-foreground">
            Ideal for alerts, promotions, or feature announcements—fully customizable.
          </p>
          <span className="text-sm text-primary hover:underline font-medium">
            View Component →
          </span>
        </div>
      </div>
    </Link>
  </div>

</div>

          
          <SiteFooter />

        </section>
      </main>
    </>
  );
}