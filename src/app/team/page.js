'use client';

import Link from 'next/link';
import { useState } from 'react';

const aboutMenu = [
  { title: 'Team', desc: 'People behind the work', href: '/team' },
  { title: 'Clients', desc: 'Collaborators and partnerships', href: '/clients' },
  { title: 'Careers', desc: 'Open roles and internships', href: '/careers' },
];

function Arrow() {
  return <span aria-hidden="true" className="text-[1.05em]">↗</span>;
}

function Chevron({ side = false }) {
  return <span aria-hidden="true" className={`text-[9px] transition-transform duration-300 ${side ? 'ml-auto -rotate-90' : 'ml-1 group-hover:rotate-180'}`}>⌄</span>;
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
        <Link href="/" className="text-[12px] font-semibold tracking-[0.2em]">AXIS</Link>
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
          <a href="mailto:hello@axis.studio" className="group mt-8 inline-flex items-center gap-4 border-b border-black/35 pb-2 text-lg md:text-xl">hello@axis.studio <Arrow /></a>
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
          <p><a href="#">Instagram</a><br /><a href="#">LinkedIn</a></p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-[9px] uppercase tracking-[0.15em] text-black/50 md:col-span-4 md:justify-center">
          <Link href="#about">About</Link><Link href="/interior">Projects</Link><a href="#">Careers</a><a href="#">Privacy</a>
        </div>
        <p className="text-[9px] uppercase tracking-[0.16em] text-black/50 md:col-span-3 md:text-right">© 2026 AXIS Architecture. All rights reserved.</p>
      </div>
    </footer>
  );
}

const teamMembers = [
  { name: 'Aanya Mehta', role: 'Founder / Principal Architect', location: 'Mumbai' },
  { name: 'Rahul Desai', role: 'Design Director', location: 'New Delhi' },
  { name: 'Ishita Rao', role: 'Project Lead', location: 'Bengaluru' },
  { name: 'Kabir Shah', role: 'Interior Design', location: 'Pune' },
  { name: 'Meera Nair', role: 'Client Strategy', location: 'Mumbai' },
  { name: 'Aditya Sen', role: 'Construction Lead', location: 'Ahmedabad' },
];

export default function TeamPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);

  const toggleSection = (name) => setMobileSection(mobileSection === name ? null : name);

  return (
    <main className="overflow-hidden">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} mobileSection={mobileSection} toggleSection={toggleSection} />

      <section className="relative overflow-hidden bg-[#11110f] px-5 pt-28 text-white md:px-10 md:pt-32">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(208,195,173,0.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl pb-14 md:pb-18">
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Team</p>
              <h1 className="mt-5 text-[15vw] leading-[0.9] tracking-[-0.08em] md:text-[8vw]">
                The people
                <span className="block font-serif italic text-white/50">behind the work.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/72 md:text-[15px]">
                A compact studio team shaping architecture, interiors, and delivery with a shared focus on clarity, precision, and calm.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-10 md:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="mb-6 border-b border-black/15 pb-4">
            <p className="section-label">Studio roster</p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">Designers, coordinators, and project leads.</h2>
          </div>

          <div className="grid gap-5 md:grid-cols-12 md:gap-6">
            {teamMembers.map((member, index) => (
              <article key={member.name} className={`${index < 2 ? 'md:col-span-6' : 'md:col-span-4'}`}>
                <div className="group rounded-[28px] border border-black/10 bg-white/70 p-6 transition-transform hover:-translate-y-1">
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="section-label">{member.role}</p>
                      <h3 className="mt-3 text-2xl tracking-[-0.04em] md:text-3xl">{member.name}</h3>
                      <p className="mt-3 text-sm leading-6 text-black/60">{member.location}</p>
                    </div>
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-black/15 bg-[#11110f] text-white transition-transform group-hover:rotate-12">↗</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto max-w-7xl rounded-[32px] border border-black/10 bg-[#ece6db] p-6 md:p-8">
          <div className="grid gap-6 md:grid-cols-12 md:items-center">
            <div className="md:col-span-7">
              <p className="section-label">Working style</p>
              <h2 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">Small team, close collaboration, direct communication.</h2>
            </div>
            <div className="md:col-span-5">
              <p className="text-sm leading-6 text-black/60">
                We keep the process lean so decisions stay clear and the work stays responsive from concept through delivery.
              </p>
            </div>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
