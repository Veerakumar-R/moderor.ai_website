import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { PillButton } from "@/components/ui/PillButton";
import { HeroCenterPattern } from "@/components/HeroCenterPattern";
import { BannerRays } from "@/components/BannerRays";
import { siteConfig } from "@/content/site";
import "@/components/grc-suite/grc-suite.css";

export type Crumb = { label: string; href?: string };

export type PageBannerProps = {
  eyebrow: string;
  title: string;
  titleAccent?: string;
  tagline: string;
  breadcrumb: Crumb[];
};

/**
 * Basic banner-only page scaffold (Navbar + breadcrumb + hero banner).
 * Shared across all suite and product landing pages. CSS-only background
 * layers (no WebGL) so it stays light across many routes.
 */
export function PageBanner({ eyebrow, title, titleAccent, tagline, breadcrumb }: PageBannerProps) {
  return (
    <>
      <Navbar />
      <main className="pt-[var(--site-header-height)]">
        <nav aria-label="Breadcrumb" className="grc-breadcrumb px-5 sm:px-[50px]">
          <div className="grc-section-inner">
            <ol className="grc-breadcrumb-inner">
              {breadcrumb.map((item, index) => (
                <li key={item.label} className="flex items-center gap-1.5">
                  {index > 0 && <span aria-hidden>/</span>}
                  {item.href ? (
                    <Link href={item.href} className="grc-breadcrumb-link">
                      {item.label}
                    </Link>
                  ) : (
                    <span className="grc-breadcrumb-current" aria-current="page">
                      {item.label}
                    </span>
                  )}
                </li>
              ))}
            </ol>
          </div>
        </nav>

        <section className="bg-white px-5 pt-5 pb-8 sm:px-[50px] sm:pt-6 sm:pb-14">
          <div className="grc-hero-banner relative min-h-[520px] w-full overflow-hidden rounded-[28px] bg-[#0c0600] sm:min-h-[560px] lg:min-h-[640px] lg:rounded-[36px]">
            <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden rounded-[inherit]">
              <div className="grc-hero-bg-layers">
                <div className="hero-warm-base" aria-hidden />
                <BannerRays />
                <div className="hero-orange-mesh" aria-hidden />
                <div className="hero-orange-noise" aria-hidden />
                <div className="hero-grain" aria-hidden />
                <div className="absolute inset-0 z-[2] bg-gradient-to-br from-[#ff7a00]/6 via-transparent to-black/28" />
              </div>
              <HeroCenterPattern showLeftSparkle rightSparkleClassName="right-[8%] top-[14%]" />
            </div>

            <div className="relative z-10 flex min-h-[520px] flex-col justify-center px-6 py-16 sm:min-h-[560px] sm:px-10 lg:min-h-[640px] lg:px-14">
              <div className="grc-section-inner w-full">
                <div className="max-w-3xl">
                  <div className="hero-eyebrow-tag mb-6 inline-flex w-fit items-center gap-2 rounded-full border border-white/20 px-4 py-1.5 text-xs font-medium tracking-[0.14em] uppercase text-white/95 backdrop-blur-sm">
                    <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-ember shadow-[0_0_8px_rgba(255,122,0,0.8)]" />
                    {eyebrow}
                  </div>

                  <h1 className="text-[38px] leading-[1.1] font-semibold tracking-tight text-white sm:text-[50px] lg:text-[56px]">
                    {title}
                    {titleAccent ? (
                      <>
                        {" "}
                        <span className="text-accent-gradient">{titleAccent}</span>
                      </>
                    ) : null}
                  </h1>

                  <p className="grc-hero-description mt-5 max-w-2xl text-white/80">{tagline}</p>

                  <div className="mt-9 flex flex-wrap items-center gap-3">
                    <PillButton href="#" variant="orange" showArrow>
                      {siteConfig.cta.primary}
                    </PillButton>
                    <PillButton href="/" variant="white">
                      Back to Home
                    </PillButton>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
