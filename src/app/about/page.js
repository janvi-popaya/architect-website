'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { SiteFooter, SiteHeader } from '@/components/site-frame';

const stats = [
  { value: '30+', label: 'Years of experience' },
  { value: '4', label: 'Pan-India offices' },
  { value: '300+', label: 'Architects and designers' },
  { value: '11', label: 'Specialized studios' },
];

const milestones = [
  'Founded in 2019 with a practice focused on architecture and interiors.',
  'Expanded across multiple typologies including residential, hospitality, workplace, and cultural projects.',
  'Built a team-led process that keeps design, delivery, and collaboration close together.',
  'Developed a studio culture centered on clarity, craft, and long-term client trust.',
];

const publication = {
  publication: 'Architects & Interiors India',
  title: 'The Crafted Grid',
  date: 'June 2026',
  features: [
    {
      type: 'Website Feature',
      action: 'Read article',
      description: 'Explore this 600 sq. ft. Mumbai office, designed with a calm mind and a warm heart.',
      href: 'https://www.architectandinteriorsindia.com/projects/explore-this-600-sq-ft-office-in-mumbai-with-a-calm-mind-and-a-warm-heart',
    },
    {
      type: 'Instagram Feature',
      action: 'View post',
      description: 'See The Crafted Grid featured by Architects & Interiors India on Instagram.',
      href: 'https://www.instagram.com/p/DaUv848Djhl/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
  ],
};

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
        <div className="mx-auto grid max-w-7xl gap-8 border-t border-black/15 pt-8 md:grid-cols-12 md:gap-12">
          <div className="md:col-span-4">
            <p className="section-label">Studio profile</p>
            <h2 className="mt-3 text-3xl tracking-[-0.04em] md:text-5xl">Quiet character.<br /><span className="font-serif italic text-black/45">Lasting purpose.</span></h2>
          </div>
          <div className="space-y-5 md:col-span-8 md:pl-8">
            <p className="text-lg leading-8 tracking-[-0.015em] text-black/75 md:text-2xl md:leading-9">
              Joey&apos;s Atelier is an architecture and interior design practice based in Mumbai, creating thoughtful spaces that balance functionality, materiality and a sense of quiet character.
            </p>
            <p className="text-sm leading-7 text-black/60 md:text-[15px]">
              Our approach is rooted in understanding the people, context and everyday experiences that shape a space. We believe good design does not need to be excessive; it is found in considered proportions, honest materials, thoughtful details and the way spaces come together as a whole.
            </p>
            <p className="text-sm leading-7 text-black/60 md:text-[15px]">
              From residences to workspaces, we work across scales to create environments that feel personal, refined and enduring. Each project is approached as an opportunity to develop a distinct design language&mdash;one that responds to its context while remaining timeless beyond passing trends. At Joey&apos;s Atelier, we value restraint, clarity and craftsmanship, creating spaces that are meant to be experienced as much as they are to be seen.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto grid max-w-7xl gap-8 overflow-hidden rounded-[32px] bg-[#ded6c8] p-6 md:grid-cols-12 md:gap-12 md:p-10">
          <div className="md:col-span-5">
            <p className="section-label">Design philosophy</p>
            <p className="mt-5 max-w-md font-serif text-3xl italic leading-[1.15] tracking-[-0.03em] text-black/70 md:text-5xl">
              Considered rather than excessive.
            </p>
          </div>
          <div className="space-y-5 md:col-span-7">
            <p className="text-base leading-7 text-black/70 md:text-lg md:leading-8">
              We believe in creating spaces that feel considered rather than excessive. Our approach begins with understanding how a space will be lived in and experienced, and translating that understanding through thoughtful planning, proportion, materiality and detail.
            </p>
            <p className="text-sm leading-7 text-black/60 md:text-[15px]">
              We favour a restrained design language where natural materials, subtle colour, texture and light work together to create depth and character. Each project is developed in response to its context and the people who inhabit it, with the intention of creating spaces that feel personal, functional and enduring.
            </p>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto max-w-7xl">
          <p className="section-label">Milestones</p>
          <div className="mt-4 grid gap-4 md:grid-cols-4">
              {milestones.map((item, index) => (
                <div key={item} className="rounded-[24px] border border-black/10 bg-white/70 p-5">
                  <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-black/45">0{index + 1}</p>
                  <p className="mt-3 text-sm leading-6 text-black/65">{item}</p>
                </div>
              ))}
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto grid max-w-7xl overflow-hidden rounded-[32px] border border-black/10 bg-white/70 md:grid-cols-12">
          <div className="relative min-h-[480px] md:col-span-5 md:min-h-[720px]">
            <Image
              src="/Founder-Photo.jpg"
              alt="Ar. Vidhi Shah, founder of Joey's Atelier"
              fill
              sizes="(max-width: 767px) 100vw, 42vw"
              className="object-cover object-[58%_68%]"
            />
          </div>
          <div className="flex flex-col justify-center p-6 md:col-span-7 md:p-10 lg:p-14">
            <p className="section-label">Founder profile</p>
            <h2 className="mt-3 text-4xl tracking-[-0.05em] md:text-6xl">Ar. Vidhi Shah</h2>
            <p className="mt-2 font-serif text-xl italic text-black/45">Founder &amp; Principal Architect</p>
            <div className="mt-7 space-y-4 border-t border-black/15 pt-7 text-sm leading-7 text-black/62 md:text-[15px]">
              <p>
                Ar. Vidhi Shah is an architect and the founder of Joey&apos;s Atelier, a Mumbai-based architecture and interior design practice.
              </p>
              <p>
                She graduated in Architecture from the University of Mumbai and began her professional journey working with established architectural practices including Seema Puri Architects, Edifice Consultants and Morphlab. Her experience across these practices shaped her approach to design, strengthening her understanding of architecture, interiors, detailing and the relationship between design and context.
              </p>
              <p>
                With a belief in creating spaces that are thoughtful, refined and rooted in their users&apos; everyday experiences, Vidhi founded Joey&apos;s Atelier to pursue a more personal design practice. Her work focuses on creating balanced environments through considered planning, materiality, proportion and detail.
              </p>
              <p>
                Today, she leads the practice across residential and commercial projects, bringing together a measured design sensibility with a hands-on approach to every project.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 pb-14 md:px-10 md:pb-18">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12">
          <div className="md:col-span-4">
            <p className="section-label">Press &amp; publications</p>
            <h2 className="mt-3 max-w-sm text-3xl tracking-[-0.04em] md:text-5xl">
              The work,
              <span className="block font-serif italic text-black/45">in print and online.</span>
            </h2>
          </div>
          <div className="md:col-span-8">
            <article className="overflow-hidden rounded-[30px] border border-black/10 bg-[#ded6c8]">
              <div className="p-6 md:p-8">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">{publication.publication}</p>
                  <p className="text-[10px] uppercase tracking-[0.16em] text-black/45">{publication.date}</p>
                </div>
                <h3 className="mt-5 text-4xl tracking-[-0.055em] md:text-6xl">{publication.title}</h3>
                <p className="mt-3 max-w-xl font-serif text-lg italic leading-7 text-black/55">One project, featured across editorial and social channels.</p>
              </div>
              <div className="grid border-t border-black/15 md:grid-cols-2">
                {publication.features.map((feature, index) => (
                  <a
                    key={feature.type}
                    href={feature.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`group flex min-h-44 flex-col justify-between gap-8 p-6 transition-colors hover:bg-white/35 md:p-8 ${index > 0 ? 'border-t border-black/15 md:border-l md:border-t-0' : ''}`}
                    aria-label={`${feature.action}: ${publication.title} on ${publication.publication}`}
                  >
                    <div>
                      <p className="text-[9px] font-semibold uppercase tracking-[0.18em] text-black/45">{feature.type}</p>
                      <p className="mt-3 max-w-sm text-sm leading-6 text-black/62">{feature.description}</p>
                    </div>
                    <span className="inline-flex items-center justify-between border-t border-black/15 pt-4 text-[9px] font-semibold uppercase tracking-[0.16em]">
                      {feature.action}
                      <span aria-hidden="true" className="text-base transition-transform group-hover:translate-x-1">&rarr;</span>
                    </span>
                  </a>
                ))}
              </div>
            </article>
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
