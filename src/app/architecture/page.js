'use client';

import { useMemo, useState } from 'react';
import { architectureCategories, getArchitectureProjects, architectureHeroCopy } from '@/data/architecture-projects';
import { SiteFooter, SiteHeader } from '@/components/site-frame';
import { ProjectModal } from '@/components/project-modal';

function ProjectCard({ project }) {
  return (
    <button type="button" className="group relative block w-full overflow-hidden rounded-[28px] border border-black/10 bg-black/5 text-left shadow-[0_20px_60px_rgba(17,17,15,0.08)]">
      <div className="aspect-[4/5] overflow-hidden md:aspect-[6/5]">
        <img src={project.image} alt={project.title} className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110" />
      </div>
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/12 to-transparent opacity-90 transition-opacity duration-300 group-hover:opacity-100" />
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
    </button>
  );
}

export default function ArchitectureIndexPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeProject, setActiveProject] = useState(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const projects = useMemo(() => getArchitectureProjects(activeCategory), [activeCategory]);
  const spans = ['md:col-span-7 md:row-span-2', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7 md:row-span-2', 'md:col-span-6', 'md:col-span-6'];
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
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Architecture / {activeCategory === 'all' ? 'All projects' : activeCategory}</p>
          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="text-[15vw] leading-[0.88] tracking-[-0.08em] md:text-[8vw]">
                {activeCategory === 'all' ? 'Mixed architecture' : architectureHeroCopy[activeCategory]}
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/70 md:text-[15px]">A category-led architecture archive with structured cards and consistent hover treatment across every project.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {architectureCategories.map((category) => (
            <button key={category.slug} type="button" onClick={() => changeCategory(category.slug)} className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${activeCategory === category.slug ? 'border-black bg-white text-black shadow-[0_10px_30px_rgba(17,17,15,0.08)]' : 'border-black/20 bg-white/80 text-black/85 hover:border-black/45 hover:text-black'}`}>
              {category.label}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-20">
        <div className={`mx-auto grid max-w-7xl gap-5 md:grid-cols-12 md:gap-6 transition-all duration-300 ${isSwitching ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
          {projects.map((project, index) => (
            <div key={`${project.title}-${project.location}`} className={`${spans[index % spans.length]} ${index % 4 === 0 || index % 4 === 3 ? 'md:pt-4' : ''}`}>
              <div onClick={() => setActiveProject(project)}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} eyebrow="Architecture project" />
      <SiteFooter />
    </main>
  );
}
