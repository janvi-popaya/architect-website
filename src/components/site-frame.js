'use client';

import Link from 'next/link';
import { useState } from 'react';

function Arrow() {
  return <span aria-hidden="true" className="text-[1.05em]">-&gt;</span>;
}

export function SiteHeader({ menuOpen, setMenuOpen }) {
  const [internalMenuOpen, setInternalMenuOpen] = useState(false);
  const isMenuOpen = menuOpen ?? internalMenuOpen;
  const updateMenuOpen = setMenuOpen ?? setInternalMenuOpen;
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="nav-shell mx-4 mt-4 flex h-14 items-center justify-between rounded-full border border-white/20 bg-[#11110f]/90 px-5 md:mx-7 md:mt-5 md:h-16 md:px-7">
        <Link href="/" className="text-[12px] font-semibold tracking-[0.2em]">AXIS</Link>
        <nav className="hidden h-full items-center gap-8 md:flex">
          <Link href="/projects" className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">Projects</Link>
          <Link href="/about" className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">About</Link>
          <Link href="/contact" className="contact-pill inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#11110f]">Contact us <Arrow /></Link>
        </nav>
        <button onClick={() => updateMenuOpen(!isMenuOpen)} className="text-[10px] font-semibold uppercase tracking-[0.16em] md:hidden">{isMenuOpen ? 'Close' : 'Menu'}</button>
      </div>
      {isMenuOpen && (
        <div className="mx-4 mt-2 max-h-[80vh] overflow-y-auto rounded-[24px] border border-white/15 bg-[#11110f] p-5 text-white shadow-2xl md:hidden">
          <Link href="/projects" onClick={() => updateMenuOpen(false)} className="flex w-full items-center justify-between border-b border-white/10 py-3 text-xl tracking-[-0.03em]">Projects <Arrow /></Link>
          <Link href="/about" onClick={() => updateMenuOpen(false)} className="flex w-full items-center justify-between border-b border-white/10 py-3 text-xl tracking-[-0.03em]">About <Arrow /></Link>
          <Link href="/contact" onClick={() => updateMenuOpen(false)} className="mt-5 flex items-center justify-between rounded-full border border-white/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em]">Contact us <Arrow /></Link>
        </div>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#cfc7b8] px-5 pb-7 pt-14 md:px-10 md:pb-9 md:pt-16">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="section-label">Start a conversation</p>
          <h2 className="mt-5 text-[13vw] leading-[0.82] tracking-[-0.07em] md:text-[7.5vw]">Have a site?<br /><span className="serif italic text-black/50">Let&apos;s talk.</span></h2>
          <a href="mailto:hello@axis.studio" className="group mt-8 inline-flex items-center gap-4 border-b border-black/35 pb-2 text-lg md:text-xl">hello@axis.studio <Arrow /></a>
        </div>
        <div className="md:col-span-5 md:pt-1">
          <div className="border-b border-black/25 pb-7">
            <p className="section-label">Client note</p>
            <blockquote className="serif mt-4 max-w-xl text-2xl italic leading-[1.2] tracking-[-0.025em] text-black/72 md:text-3xl">&ldquo;They understood that restraint can be more memorable than spectacle.&rdquo;</blockquote>
            <p className="mt-4 text-[9px] uppercase tracking-[0.16em] text-black/45">Private Residential Client · Mumbai</p>
          </div>
          <div className="pt-7">
            <p className="section-label">Stay updated</p>
            <p className="mt-3 max-w-md text-sm leading-6 text-black/60">Occasional project stories, material studies and studio news. No clutter.</p>
            <form className="newsletter-form mt-5 flex items-center border-b border-black/40" onSubmit={(event) => event.preventDefault()}>
              <input type="email" required aria-label="Email address" placeholder="Your email address" className="min-w-0 flex-1 bg-transparent py-4 text-base outline-none placeholder:text-black/35" />
              <button type="submit" className="newsletter-button flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-black/35" aria-label="Subscribe"><Arrow /></button>
            </form>
          </div>
        </div>
      </div>
      <div className="mt-12 grid gap-8 border-t border-black/20 pt-6 md:grid-cols-12 md:items-end">
        <div className="grid grid-cols-2 gap-6 text-xs leading-5 text-black/55 md:col-span-5 md:grid-cols-3">
          <p>Mumbai<br />India</p>
          <p>New Delhi<br />India</p>
          <p><a href="#">Instagram</a><br /><a href="#">LinkedIn</a></p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] uppercase tracking-[0.15em] text-black/50 md:col-span-4 md:justify-center">
          <Link href="/about">About</Link><Link href="/projects">Projects</Link><Link href="/careers">Careers</Link><a href="#">Privacy</a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.16em] text-black/50 md:col-span-3 md:text-right">(c) 2026 AXIS Architecture. All rights reserved.</p>
      </div>
    </footer>
  );
}
