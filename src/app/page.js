"use client";

import Link from "next/link";
import { useState } from "react";
import { BrandLogo } from "@/components/brand-logo";
import { SiteFooter } from "@/components/site-frame";
import { projects } from "@/data/projects";

const aboutMenu = [
  { title: "Team", desc: "People behind the work", href: "/team" },
  { title: "Clients", desc: "Collaborators and partnerships", href: "/clients" },
];

function Arrow() {
  return (
    <span aria-hidden="true" className="text-[1.05em]">
      &#8599;
    </span>
  );
}

function Chevron({ side = false }) {
  return (
    <span
      aria-hidden="true"
      className={`text-[9px] transition-transform duration-300 ${side ? "ml-auto -rotate-90" : "ml-1 group-hover:rotate-180"}`}
    >
      &#8964;
    </span>
  );
}

function Dropdown({ label, items, eyebrow, href = "#about" }) {
  return (
    <div className="nav-dropdown group relative h-full">
      <button className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">
        {label}
        <Chevron />
      </button>
      <div className="dropdown-panel pointer-events-none absolute left-1/2 top-full w-[430px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="border border-white/15 bg-[#11110f] p-6 text-white shadow-2xl">
          <p className="mb-5 border-b border-white/15 pb-3 text-[9px] uppercase tracking-[0.22em] text-white/45">
            {eyebrow}
          </p>
          <div className="space-y-1">
            {items.map(({ title, desc, href: itemHref }) => (
              <Link
                key={title}
                href={itemHref || href}
                className="dropdown-link grid grid-cols-[1fr_auto] items-center gap-5 border-b border-white/10 py-3 last:border-0"
              >
                <div>
                  <p className="text-[15px] tracking-[-0.02em]">{title}</p>
                  <p className="mt-1 text-[10px] normal-case tracking-normal text-white/45">
                    {desc}
                  </p>
                </div>
                <Arrow />
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const toggleSection = (name) =>
    setMobileSection(mobileSection === name ? null : name);

  return (
    <main className="overflow-hidden">
      <header className="fixed inset-x-0 top-0 z-50 text-white">
        <div className="nav-shell mx-4 mt-4 flex h-14 items-center justify-between rounded-full border border-white/20 bg-[#11110f]/90 px-5 md:mx-7 md:mt-5 md:h-16 md:px-7">
          <BrandLogo href="#top" />

          <nav className="hidden h-full items-center gap-8 md:flex">
            <Link href="/projects" className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">
              Projects
            </Link>
            <Link href="/about" className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">About</Link>
            <a
              href="/contact"
              className="contact-pill inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#11110f]"
            >
              Contact us <Arrow />
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[10px] font-semibold uppercase tracking-[0.16em] md:hidden"
          >
            {menuOpen ? "Close" : "Menu"}
          </button>
        </div>

        {menuOpen && (
          <div className="mx-4 mt-2 max-h-[80vh] overflow-y-auto rounded-[24px] border border-white/15 bg-[#11110f] p-5 text-white shadow-2xl md:hidden">
            <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-between border-b border-white/10 py-3 text-xl tracking-[-0.03em]">
              Projects <Arrow />
            </Link>
            <div>
              <button
                onClick={() => toggleSection("about")}
                className="flex w-full items-center justify-between border-b border-white/10 py-3 text-xl tracking-[-0.03em]"
              >
                About <Chevron />
              </button>
              {mobileSection === "about" && (
                <div className="pl-3">
                  {aboutMenu.map(({ title }) => (
                    <a
                      key={title}
                      href="#about"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center justify-between border-b border-white/10 py-3 text-[14px] text-white/70"
                    >
                      {title}
                      <Arrow />
                    </a>
                  ))}
                </div>
              )}
            </div>
            <a
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="mt-5 flex items-center justify-between rounded-full border border-white/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em]"
            >
              Contact us <Arrow />
            </a>
          </div>
        )}
      </header>

      <section
        id="top"
        className="relative min-h-[100svh] overflow-hidden bg-black text-white"
      >
        <img
          className="hero-image absolute inset-0 h-full w-full object-cover opacity-78"
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2200&q=92"
          alt="Contemporary concrete residence"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/35 via-black/5 to-black/60" />
        <div className="relative flex min-h-[100svh] flex-col justify-end px-5 pb-7 pt-28 md:px-10 md:pb-9">
          <div className="mb-5 flex items-end justify-between border-b border-white/35 pb-3 text-[10px] uppercase tracking-[0.18em] md:text-xs">
            <span>Architecture · Interiors</span>
            <span className="hidden md:inline">
              Mumbai · Est. 2019
            </span>
          </div>
          <div className="grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-9">
              <div className="reveal-line">
                <span className="text-[17vw] font-medium leading-[0.78] tracking-[-0.07em] md:text-[12vw]">
                  SPACE
                </span>
              </div>
              <div className="reveal-line">
                <span className="serif pl-[12vw] text-[17vw] italic leading-[0.78] tracking-[-0.07em] text-[#ddd8cb] md:pl-[17vw] md:text-[12vw]">
                  with soul.
                </span>
              </div>
            </div>
            <div className="md:col-span-3">
              <p className="max-w-sm text-sm leading-6 text-white/82 md:text-[15px]">
                Expressive, enduring spaces shaped around climate, craft and the
                way people actually live.
              </p>
              <a
                href="#work"
                className="group mt-5 inline-flex items-center gap-3 border-b border-white/45 pb-2 text-[10px] font-semibold uppercase tracking-[0.17em]"
              >
                Explore projects <Arrow />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-black/15 bg-[#eeeae1] py-3">
        <div className="marquee-track flex gap-8 whitespace-nowrap text-[10px] font-semibold uppercase tracking-[0.22em] md:text-[11px]">
          {[0, 1].map((loop) => (
            <div key={loop} className="flex gap-8">
              <span>Architecture for now</span>
              <span>✦</span>
              <span>Context over spectacle</span>
              <span>✦</span>
              <span>Material matters</span>
              <span>✦</span>
              <span>Less, but better</span>
              <span>✦</span>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="px-5 py-12 md:px-10 md:py-16">
        <div className="grid gap-7 md:grid-cols-12 md:gap-8">
          <div className="md:col-span-3">
            <p className="section-label">About Joey&apos;s Atelier</p>
            <p className="mt-4 max-w-xs text-sm leading-6 text-black/60">
              A practice grounded in clarity, restraint and spaces that feel
              calm the moment you enter them.
            </p>
          </div>
          <div className="md:col-span-9">
            <div className="grid gap-6 rounded-[28px] border border-black/10 bg-[#ece6db] p-6 md:grid-cols-[1.2fr_.8fr] md:gap-8 md:p-8">
              <div>
                <h2 className="max-w-5xl text-4xl leading-[1.01] tracking-[-0.05em] sm:text-5xl md:text-7xl">
                  Quietly bold spaces for{" "}
                  <span className="serif italic text-black/55">
                    how we live now.
                  </span>
                </h2>
                <div className="mt-6 grid gap-6 border-t border-black/20 pt-5 md:grid-cols-2">
                  <p className="text-sm leading-6 text-black/65">
                    Joey&apos;s Atelier is an independent architecture and interiors practice
                    working across homes, hospitality, culture, workplace and
                    adaptive reuse. Every project starts with context-not a
                    fixed style.
                  </p>
                  <p className="text-sm leading-6 text-black/65">
                    Young energy, long-life thinking. Designed to feel relevant
                    today and still belong tomorrow.
                  </p>
                </div>
              </div>
              <div className="grid gap-4 self-end">
                <div className="rounded-[22px] border border-black/10 bg-white/45 p-5">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">
                    What we make
                  </p>
                  <div className="mt-4 space-y-4">
                    <div className="flex items-center justify-between border-b border-black/10 pb-3 text-sm">
                      <span>Homes</span>
                      <span className="text-black/45">01</span>
                    </div>
                    <div className="flex items-center justify-between border-b border-black/10 pb-3 text-sm">
                      <span>Workplace</span>
                      <span className="text-black/45">02</span>
                    </div>
                    <div className="flex items-center justify-between text-sm">
                      <span>Hospitality</span>
                      <span className="text-black/45">03</span>
                    </div>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-[22px] border border-black/10 bg-[#11110f] p-5 text-[#f2f0ea]">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-white/45">
                      Approach
                    </p>
                    <p className="mt-3 text-sm leading-6 text-white/72">
                      Measured, tactile and always shaped by site.
                    </p>
                  </div>
                  <div className="rounded-[22px] border border-black/10 bg-white/55 p-5">
                    <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">
                      Focus
                    </p>
                    <p className="mt-3 text-sm leading-6 text-black/65">
                      Detail, light and the everyday experience of space.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="work" className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mb-7 flex items-end justify-between border-b border-black/20 pb-4">
          <div>
            <p className="section-label">Selected work</p>
            <h2 className="mt-2 text-3xl tracking-[-0.04em] md:text-5xl">
              Recent projects
            </h2>
          </div>
          <Link
            href="/projects"
            className="view-all-link hidden items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.15em] md:inline-flex"
          >
            View all <Arrow />
          </Link>
        </div>
        <div className="grid gap-3 md:grid-cols-2">
          {projects.map((project) => (
            <article key={project.projectSlug}>
              <Link href={`/projects/${project.projectSlug}`} className="project-card group block">
                <div className="project-image relative aspect-[4/5] overflow-hidden rounded-[26px] bg-black/5 md:aspect-[4/3]">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover" />
                  <div className="project-overlay absolute inset-0 flex items-end bg-gradient-to-t from-black/82 via-black/15 to-transparent p-5 text-white md:p-6">
                    <div className="project-copy max-w-md">
                      <p className="mb-2 text-[9px] font-semibold uppercase tracking-[0.18em] text-white/65">{project.group}</p>
                      <h3 className="text-2xl tracking-[-0.035em] md:text-4xl">{project.title}</h3>
                      <p className="mt-2 max-w-sm text-xs leading-5 text-white/70 md:text-sm">{project.description}</p>
                      <p className="mt-4 text-[9px] uppercase tracking-[0.15em] text-white/55">{project.location}</p>
                    </div>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
        <Link href="/projects" className="view-all-link mt-6 inline-flex items-center gap-3 text-[13px] font-semibold uppercase tracking-[0.15em] md:hidden">View all <Arrow /></Link>
      </section>

      <section className="bg-[#151513] px-5 py-14 text-[#f2f0ea] md:px-10 md:py-18">
        <div className="grid gap-8 md:grid-cols-12">
          <p className="section-label text-white/45 md:col-span-3">
            Point of view
          </p>
          <div className="md:col-span-9">
            <p className="max-w-6xl text-[12vw] leading-[0.9] tracking-[-0.065em] md:text-[7vw]">
              Good architecture should feel{" "}
              <span className="serif italic text-white/45">inevitable,</span>{" "}
              not over-designed.
            </p>
            <div className="mt-8 grid gap-4 border-t border-white/20 pt-5 text-sm text-white/60 md:grid-cols-3">
              <p>Rooted in place.</p>
              <p>Precise in detail.</p>
              <p>Built to age beautifully.</p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}


