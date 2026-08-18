'use client';

import Link from 'next/link';
import { useState } from 'react';
import { BrandLogo } from '@/components/brand-logo';
import { SiteFooter as SharedFooter } from '@/components/site-frame';

const aboutMenu = [
  { title: 'Team', desc: 'People behind the work', href: '/team' },
  { title: 'Clients', desc: 'Collaborators and partnerships', href: '/clients' },
];

function Arrow() {
  return <span aria-hidden="true" className="text-[1.05em]">&#8599;</span>;
}

function Chevron({ side = false }) {
  return <span aria-hidden="true" className={`text-[9px] transition-transform duration-300 ${side ? 'ml-auto -rotate-90' : 'ml-1 group-hover:rotate-180'}`}>&#8964;</span>;
}

function Dropdown({ label, items, eyebrow, href = '#about' }) {
  return (
    <div className="nav-dropdown group relative h-full">
      <button className="nav-trigger flex h-full items-center text-[11px] font-semibold uppercase tracking-[0.16em]">
        {label}<Chevron />
      </button>
      <div className="dropdown-panel pointer-events-none absolute left-1/2 top-full w-[430px] -translate-x-1/2 pt-3 opacity-0 transition-all duration-300 group-hover:pointer-events-auto group-hover:opacity-100">
        <div className="border border-white/15 bg-[#11110f] p-6 text-white shadow-2xl">
          <p className="mb-5 border-b border-white/15 pb-3 text-[9px] uppercase tracking-[0.22em] text-white/45">{eyebrow}</p>
          <div className="space-y-1">
            {items.map(({ title, desc, href: itemHref }) => (
              <Link key={title} href={itemHref || href} className="dropdown-link grid grid-cols-[1fr_auto] items-center gap-5 border-b border-white/10 py-3 last:border-0">
                <div>
                  <p className="text-[15px] tracking-[-0.02em]">{title}</p>
                  <p className="mt-1 text-[10px] normal-case tracking-normal text-white/45">{desc}</p>
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

function SiteHeader({ menuOpen, setMenuOpen }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 text-white">
      <div className="nav-shell mx-4 mt-4 flex h-14 items-center justify-between rounded-full border border-white/20 bg-[#11110f]/90 px-5 md:mx-7 md:mt-5 md:h-16 md:px-7">
        <BrandLogo />
        <nav className="hidden h-full items-center gap-8 md:flex">
          <Link href="/projects" className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">Projects</Link>
          <Link href="/about" className="nav-trigger flex h-full items-center text-[10px] font-semibold uppercase tracking-[0.16em]">About</Link>
          <Link href="/contact" className="contact-pill inline-flex items-center gap-2 rounded-full border border-white/35 px-5 py-2.5 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-white hover:text-[#11110f]">Contact us <Arrow /></Link>
        </nav>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-[10px] font-semibold uppercase tracking-[0.16em] md:hidden">{menuOpen ? 'Close' : 'Menu'}</button>
      </div>
      {menuOpen && (
        <div className="mx-4 mt-2 max-h-[80vh] overflow-y-auto rounded-[24px] border border-white/15 bg-[#11110f] p-5 text-white shadow-2xl md:hidden">
          <Link href="/projects" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-between border-b border-white/10 py-3 text-xl tracking-[-0.03em]">Projects <Arrow /></Link>
          <Link href="/about" onClick={() => setMenuOpen(false)} className="flex w-full items-center justify-between border-b border-white/10 py-3 text-xl tracking-[-0.03em]">About <Arrow /></Link>
          <Link href="/contact" onClick={() => setMenuOpen(false)} className="mt-5 flex items-center justify-between rounded-full border border-white/30 px-5 py-3 text-[11px] font-semibold uppercase tracking-[0.16em]">Contact us <Arrow /></Link>
        </div>
      )}
    </header>
  );
}

function SiteFooter() {
  return (
    <footer id="contact" className="bg-[#cfc7b8] px-5 pb-7 pt-14 md:px-10 md:pb-9 md:pt-16">
      <div className="grid gap-10 md:grid-cols-12 md:gap-8">
        <div className="md:col-span-7">
          <p className="section-label">Start a conversation</p>
          <h2 className="mt-5 text-[13vw] leading-[0.82] tracking-[-0.07em] md:text-[7.5vw]">Have a site?<br /><span className="serif italic text-black/50">Let&apos;s talk.</span></h2>
          <a href="mailto:vidhi.jadesign@gmail.com" className="group mt-8 inline-flex items-center gap-4 border-b border-black/35 pb-2 text-lg md:text-xl">vidhi.jadesign@gmail.com <Arrow /></a>
        </div>
        <div className="md:col-span-5 md:pt-1">
          <div className="border-b border-black/25 pb-7">
            <p className="section-label">Client note</p>
            <blockquote className="serif mt-4 max-w-xl text-2xl italic leading-[1.2] tracking-[-0.025em] text-black/72 md:text-3xl">“They understood that restraint can be more memorable than spectacle.”</blockquote>
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
          <p><a href="https://www.instagram.com/joeysatelier/" target="_blank" rel="noreferrer">@joeysatelier</a></p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] uppercase tracking-[0.15em] text-black/50 md:col-span-4 md:justify-center">
          <Link href="/about">About</Link><Link href="/projects">Projects</Link><a href="#">Terms</a><a href="#">Privacy</a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.16em] text-black/50 md:col-span-3 md:text-right">© 2026 Joey&apos;s Atelier. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function ContactPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const toggleSection = (name) => setMobileSection(mobileSection === name ? null : name);
  const sendEnquiry = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const subject = encodeURIComponent(`Project enquiry — ${formData.get('name')}`);
    const body = encodeURIComponent([
      `Name: ${formData.get('name')}`,
      `Email / Phone: ${formData.get('contact')}`,
      `Project Type: ${formData.get('projectType')}`,
      `Project Location: ${formData.get('location')}`,
      `Approximate Area: ${formData.get('area') || 'Not specified'}`,
      '',
      'Project Brief:',
      formData.get('projectBrief'),
    ].join('\n'));

    window.location.href = `mailto:vidhi.jadesign@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <main className="overflow-hidden">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} mobileSection={mobileSection} toggleSection={toggleSection} />

      <section className="relative overflow-hidden bg-[#11110f] px-5 pt-28 text-white md:px-10 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(208,195,173,0.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl pb-14 md:pb-18">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Contact</p>
              <h1 className="mt-5 text-[15vw] leading-[0.9] tracking-[-0.08em] md:text-[8vw]">
                Let&apos;s start
                <span className="block font-serif italic text-white/50">the conversation.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/72 md:text-[15px]">
                Share your site, timeline, and the kind of space you want to create. We&apos;ll come back with a thoughtful response and clear next steps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-10 md:py-18">
        <div className="mx-auto max-w-4xl">
          <div className="text-center">
            <p className="section-label">Let&apos;s connect</p>
            <h2 className="mt-4 text-4xl tracking-[-0.05em] md:text-6xl">Tell us about your project.</h2>
            <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-black/60 md:text-[15px]">Whether it&apos;s architecture, interiors, or a new collaboration, start here and we&apos;ll take it from there.</p>
          </div>

          <form onSubmit={sendEnquiry} className="mt-10 rounded-[32px] border border-black/10 bg-[#ece6db] p-5 shadow-[0_20px_60px_rgba(17,17,15,0.08)] md:p-8">
            <div className="grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">Name <input name="name" required className="border-b border-black/20 bg-transparent py-3 text-base normal-case tracking-normal outline-none placeholder:text-black/30" type="text" placeholder="Your name" /></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">Email / Phone <input name="contact" required className="border-b border-black/20 bg-transparent py-3 text-base normal-case tracking-normal outline-none placeholder:text-black/30" type="text" placeholder="Your email address or phone number" /></label>
            </div>
            <fieldset className="mt-7 border-b border-black/20 pb-5">
              <legend className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">Project Type</legend>
              <div className="mt-4 flex flex-wrap gap-x-8 gap-y-3">
                {['Residential', 'Commercial', 'Other'].map((type) => (
                  <label key={type} className="flex cursor-pointer items-center gap-3 text-sm text-black/70">
                    <input required type="radio" name="projectType" value={type} className="h-4 w-4 accent-black" />
                    {type}
                  </label>
                ))}
              </div>
            </fieldset>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">Project Location <input name="location" required className="border-b border-black/20 bg-transparent py-3 text-base normal-case tracking-normal outline-none placeholder:text-black/30" type="text" placeholder="City, area or site location" /></label>
              <label className="grid gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">Approximate Area <input name="area" className="border-b border-black/20 bg-transparent py-3 text-base normal-case tracking-normal outline-none placeholder:text-black/30" type="text" placeholder="Area in sq. ft." /></label>
            </div>
            <label className="mt-5 grid gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-black/50">Tell us briefly about your project <textarea name="projectBrief" required className="min-h-[180px] border-b border-black/20 bg-transparent py-3 text-base normal-case tracking-normal outline-none placeholder:text-black/30" placeholder="Share the project requirements, goals and anything else we should know." /></label>
            <div className="mt-6 flex justify-end border-t border-black/10 pt-5">
              <button type="submit" className="inline-flex items-center gap-2 rounded-full border border-black/35 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:border-black/15 hover:bg-[#d8d5cf] hover:text-[#11110f]">Send enquiry <Arrow /></button>
            </div>
          </form>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 border-b border-black/15 pb-4">
            <p className="section-label">Contact details</p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">Reach Joey&apos;s Atelier directly.</h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <a href="mailto:vidhi.jadesign@gmail.com" className="group rounded-[28px] border border-black/10 bg-white/70 p-6 transition-transform hover:-translate-y-1">
              <p className="section-label">Email</p>
              <p className="mt-4 break-all text-xl tracking-[-0.04em] md:text-2xl">vidhi.jadesign@gmail.com</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]">Write to us <Arrow /></span>
            </a>
            <a href="https://www.instagram.com/joeysatelier/" target="_blank" rel="noreferrer" className="group rounded-[28px] border border-black/10 bg-[#ece6db] p-6 transition-transform hover:-translate-y-1">
              <p className="section-label">Instagram</p>
              <p className="mt-4 text-2xl tracking-[-0.04em] md:text-3xl">@joeysatelier</p>
              <span className="mt-8 inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.16em]">View profile <Arrow /></span>
            </a>
          </div>
        </div>
      </section>

      <SharedFooter />
    </main>
  );
}
