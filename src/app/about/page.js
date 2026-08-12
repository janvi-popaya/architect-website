'use client';

import Link from 'next/link';
import { useState } from 'react';
import { SiteFooter, SiteHeader } from '@/components/site-frame';

const stats = [
  { value: '30+', label: 'Years of experience' },
  { value: '4', label: 'Pan-India offices' },
  { value: '300+', label: 'Architects and designers' },
  { value: '11', label: 'Specialized studios' },
];

const principles = [
  { title: 'Sustainable by intent', text: 'Context-first design that reduces waste, improves comfort, and responds to climate.' },
  { title: 'Optimized by design', text: 'Clear workflows, careful detailing, and measurable decisions from concept to delivery.' },
  { title: 'Unique in expression', text: 'Each project grows from place, brief, and people instead of a single visual formula.' },
  { title: 'Livable in experience', text: 'Spaces that feel calm, functional, and human at every scale.' },
];

const milestones = [
  'Founded in 2019 with a practice focused on architecture and interiors.',
  'Expanded across multiple typologies including residential, hospitality, workplace, and cultural projects.',
  'Built a team-led process that keeps design, delivery, and collaboration close together.',
  'Developed a studio culture centered on clarity, craft, and long-term client trust.',
];

const teamHighlights = [
  { name: 'Aanya Mehta', role: 'Founder / Principal Architect', city: 'Mumbai' },
  { name: 'Rahul Desai', role: 'Design Director', city: 'New Delhi' },
  { name: 'Ishita Rao', role: 'Project Lead', city: 'Bengaluru' },
  { name: 'Kabir Shah', role: 'Interior Design', city: 'Pune' },
];

export default function AboutPage() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#11110f]">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <section className="relative overflow-hidden bg-[#11110f] px-5 pt-24 text-white md:px-10 md:pt-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_36%),radial-gradient(circle_at_bottom_right,rgba(208,195,173,0.14),transparent_34%)]" />
        <div className="relative mx-auto max-w-7xl pb-14 md:pb-18">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">About</p>
          <div className="mt-5 grid gap-8 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="text-[15vw] leading-[0.9] tracking-[-0.08em] md:text-[8vw]">
                The studio
                <span className="block font-serif italic text-white/50">behind the work.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/72 md:text-[15px]">
                A design practice shaped by context, climate, and collaboration. We work across architecture, interiors, and broader project delivery with a calm, rigorous approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-14 md:px-10 md:py-18">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-4 md:gap-6">
            {stats.map((item) => (
              <article key={item.label} className="rounded-[28px] border border-black/10 bg-white/70 p-6">
                <p className="text-4xl tracking-[-0.06em] md:text-5xl">{item.value}</p>
                <p className="mt-3 text-sm leading-6 text-black/58">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="section-label">Who we are</p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">An architecture and interiors team built around care, precision, and long-term thinking.</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-6 text-black/60 md:text-[15px]">
              We draw from the same principles you&apos;ll see on leading design firm sites: a clear story, a strong point of view, a grounded methodology, and a visible team.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-5 md:grid-cols-2">
            {principles.map((item) => (
              <article key={item.title} className="rounded-[28px] border border-black/10 bg-[#ece6db] p-6">
                <p className="section-label">{item.title}</p>
                <p className="mt-4 text-sm leading-6 text-black/64">{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-12">
          <div className="md:col-span-5">
            <p className="section-label">Milestones</p>
            <div className="mt-4 space-y-4">
              {milestones.map((item, index) => (
                <div key={item} className="rounded-[24px] border border-black/10 bg-white/70 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-6 text-black/65">{item}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="md:col-span-7">
            <p className="section-label">Team highlights</p>
            <div className="mt-4 grid gap-4 md:grid-cols-2">
              {teamHighlights.map((member) => (
                <article key={member.name} className="group rounded-[28px] border border-black/10 bg-white/70 p-6 transition-transform hover:-translate-y-1">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">{member.role}</p>
                  <h3 className="mt-3 text-2xl tracking-[-0.04em]">{member.name}</h3>
                  <p className="mt-3 text-sm leading-6 text-black/60">{member.city}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-6 rounded-[32px] border border-black/10 bg-[#11110f] p-6 text-white md:grid-cols-12 md:p-8">
          <div className="md:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Our approach</p>
            <h2 className="mt-4 text-3xl tracking-[-0.04em] md:text-5xl">We keep the process small, responsive, and close to the client.</h2>
          </div>
          <div className="md:col-span-5">
            <p className="text-sm leading-6 text-white/70 md:text-[15px]">
              That means a simple structure, direct communication, and a shared commitment to projects that feel grounded, practical, and memorable.
            </p>
            <Link href="/contact" className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/30 px-5 py-3 text-[10px] font-semibold uppercase tracking-[0.16em]">Contact us</Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
