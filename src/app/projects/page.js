'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import { SiteFooter, SiteHeader } from '@/components/site-frame';
import { ProjectCard } from '@/components/projects/project-card';

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [activeCategory, setActiveCategory] = useState('residential-interiors');
  const [isSwitching, setIsSwitching] = useState(false);
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => project.filterCategory === activeCategory);
  }, [activeCategory]);
  const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7', 'md:col-span-6', 'md:col-span-6'];
  const categories = [
    { label: 'Residential Interiors', value: 'residential-interiors' },
    { label: 'Commercial Interiors', value: 'commercial-interiors' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Renovation & Transformation', value: 'renovation-transformation' },
    { label: 'Design Consultation', value: 'design-consultation' },
  ];
  const changeCategory = (value) => {
    setIsSwitching(true);
    setActiveCategory(value);
    window.setTimeout(() => setIsSwitching(false), 180);
  };

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#11110f]">
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} mobileSection={mobileSection} setMobileSection={setMobileSection} />
      <section className="relative overflow-hidden border-b border-black/10 bg-[#11110f] px-5 pb-12 pt-24 text-white md:px-10 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(208,195,173,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="text-[15vw] leading-[0.88] tracking-[-0.08em] md:text-[8vw]">
                Mixed projects
                <span className="block font-serif italic text-white/50">architecture + interiors.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/70 md:text-[15px]">A single entry point for the full archive. Use the category pills to move into the dedicated project pages.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-5 md:px-10 md:py-6">
        <div className="project-filter-rail mx-auto flex max-w-7xl flex-nowrap gap-1.5 overflow-x-auto rounded-full border border-black/10 bg-white/50 p-1.5 shadow-[0_12px_35px_rgba(17,17,15,0.06)] md:justify-center">
          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => changeCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`shrink-0 snap-start rounded-full border px-3.5 py-2 text-[9px] font-semibold uppercase tracking-[0.13em] transition-all duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                activeCategory === category.value
                  ? 'border-[#11110f] bg-[#11110f] text-white shadow-[0_8px_20px_rgba(17,17,15,0.16)]'
                  : 'border-transparent bg-transparent text-black/55 hover:border-black/10 hover:bg-white/80 hover:text-black'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-20">
        <div className={`mx-auto grid max-w-7xl gap-5 md:grid-cols-12 md:gap-6 transition-all duration-300 ${isSwitching ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
          {filteredProjects.map((project, index) => (
            <div key={`${project.group}-${project.title}-${project.location}`} className={spans[index % spans.length]}>
              <ProjectCard project={project} />
            </div>
          ))}
          {filteredProjects.length === 0 && (
            <div className="border-t border-black/15 py-12 md:col-span-12">
              <p className="text-sm text-black/50">Projects in this category will be added soon.</p>
            </div>
          )}
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
