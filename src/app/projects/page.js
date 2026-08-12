'use client';

import { useMemo, useState } from 'react';
import { projects } from '@/data/projects';
import { SiteFooter, SiteHeader } from '@/components/site-frame';
import { ProjectCard } from '@/components/projects/project-card';

export default function ProjectsPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [isSwitching, setIsSwitching] = useState(false);
  const mixedProjects = useMemo(
    () => [
      ...projects.filter((project) => project.group === 'Architecture').slice(0, 6),
      ...projects.filter((project) => project.group === 'Interiors'),
    ],
    [],
  );
  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return mixedProjects;
    return mixedProjects.filter((project) => project.group.toLowerCase() === activeCategory);
  }, [activeCategory, mixedProjects]);
  const spans = ['md:col-span-7', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7', 'md:col-span-6', 'md:col-span-6'];
  const categories = [
    { label: 'All', value: 'all' },
    { label: 'Architecture', value: 'architecture' },
    { label: 'Interiors', value: 'interiors' },
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

      <section className="px-5 py-6 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category.label}
              type="button"
              onClick={() => changeCategory(category.value)}
              aria-pressed={activeCategory === category.value}
              className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                activeCategory === category.value
                  ? 'border-black bg-white text-black shadow-[0_10px_30px_rgba(17,17,15,0.08)]'
                  : 'border-black/15 bg-white/70 text-gray/70 hover:border-black/30 hover:bg-black/30 hover:text-gray'
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
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
