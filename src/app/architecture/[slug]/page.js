'use client';

import { useEffect, useMemo, useState } from 'react';
import { architectureCategories, getArchitectureProjects, architectureHeroCopy } from '@/data/architecture-projects';

function SmoothCursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let frame = 0;
    let target = { x: -100, y: -100 };
    let current = { x: -100, y: -100 };
    const animate = () => {
      current = { x: current.x + (target.x - current.x) * 0.16, y: current.y + (target.y - current.y) * 0.16 };
      setPosition(current);
      frame = window.requestAnimationFrame(animate);
    };
    const move = (event) => { target = { x: event.clientX, y: event.clientY }; setVisible(true); };
    const leave = () => setVisible(false);
    window.addEventListener('mousemove', move);
    window.addEventListener('mouseleave', leave);
    frame = window.requestAnimationFrame(animate);
    return () => {
      window.cancelAnimationFrame(frame);
      window.removeEventListener('mousemove', move);
      window.removeEventListener('mouseleave', leave);
    };
  }, []);

  return <div aria-hidden="true" className={`pointer-events-none fixed left-0 top-0 z-50 hidden h-8 w-8 -translate-x-1/2 -translate-y-1/2 rounded-full border border-black/35 bg-black/10 backdrop-blur-sm md:block ${visible ? 'opacity-100' : 'opacity-0'}`} style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0) translate(-50%, -50%)` }} />;
}

function ProjectCard({ project }) {
  return (
    <article>
      <div className="group relative overflow-hidden rounded-[28px] border border-black/10 bg-black/5 shadow-[0_20px_60px_rgba(17,17,15,0.08)]">
        <div className="aspect-[4/5] overflow-hidden md:aspect-[6/5]">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/12 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-white/65">{project.category}</p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl tracking-[-0.04em] md:text-3xl">{project.title}</h2>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/60">{project.location}</p>
            </div>
            <span className="hidden rounded-full border border-white/25 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70 md:inline-flex">View project</span>
          </div>
        </div>
      </div>
    </article>
  );
}

export default function ArchitectureCategoryPage({ params }) {
  const slug = params?.slug || 'all';
  const activeCategory = architectureCategories.find((category) => category.slug === slug) || architectureCategories[0];
  const projects = useMemo(() => getArchitectureProjects(activeCategory.slug), [activeCategory.slug]);

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#11110f]">
      <SmoothCursor />
      <section className="relative overflow-hidden border-b border-black/10 bg-[#11110f] px-5 pb-12 pt-24 text-white md:px-10 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(208,195,173,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Architecture / {activeCategory.label}</p>
          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="text-[15vw] leading-[0.88] tracking-[-0.08em] md:text-[8vw]">
                {architectureHeroCopy[activeCategory.slug]}
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/70 md:text-[15px]">This page keeps the interior-style hover cards, but filters the archive down to the selected architecture category.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {architectureCategories.map((category) => (
            <a key={category.slug} href={category.slug === 'all' ? '/architecture' : `/architecture/${category.slug}`} className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all ${activeCategory.slug === category.slug ? 'border-black bg-black text-white' : 'border-black/20 bg-white/80 text-black/85 hover:border-black/45 hover:text-black'}`}>
              {category.label}
            </a>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-20">
        <div className="mx-auto grid max-w-7xl gap-5 md:grid-cols-12 md:gap-6">
          {projects.map((project, index) => (
            <div key={`${project.title}-${project.location}`} className={`${index % 5 === 0 || index % 5 === 3 ? 'md:col-span-7' : 'md:col-span-5'}`}>
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
