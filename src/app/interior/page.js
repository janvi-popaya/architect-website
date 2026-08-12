'use client';

import { use, useMemo, useState } from 'react';
import { SiteFooter, SiteHeader } from '@/components/site-frame';
import { ProjectModal } from '@/components/project-modal';

const interiorProjects = [
  { title: 'The Grain Room', location: 'Bengaluru, India', category: 'Retail', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Forum 18', location: 'Hyderabad, India', category: 'Retail', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Lane Market', location: 'Jaipur, India', category: 'Retail', image: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&fit=crop&w=1600&q=90' },
  { title: 'North Desk', location: 'Mumbai, India', category: 'Workplace', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Studio 47', location: 'Pune, India', category: 'Workplace', image: 'https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Pulse Office', location: 'Noida, India', category: 'Workplace', image: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90' },
  { title: 'House of Quiet', location: 'Coimbatore, India', category: 'Homes', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Courtyard Residence', location: 'Nashik, India', category: 'Homes', image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Verandah House', location: 'Bhopal, India', category: 'Homes', image: 'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Monsoon Suites', location: 'Mysuru, India', category: 'Hotels', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Palm Retreat', location: 'Kochi, India', category: 'Hotels', image: 'https://images.unsplash.com/photo-1582719478185-2f2d1ad4bf58?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Sandstone Inn', location: 'Jodhpur, India', category: 'Hotels', image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Courtside Club', location: 'Chennai, India', category: 'Leisure', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Sky Lounge', location: 'Panaji, India', category: 'Leisure', image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1600&q=90' },
  { title: 'Club Horizon', location: 'Lonavala, India', category: 'Leisure', image: 'https://images.unsplash.com/photo-1502919284671-1bf0bcd1a4c8?auto=format&fit=crop&w=1600&q=90' },
];

function SmoothCursor() {
  return null;
}

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
          <span className="hidden rounded-full border border-white/25 px-3 py-1 text-[9px] uppercase tracking-[0.18em] text-white/70 md:inline-flex">Hover to zoom</span>
        </div>
      </div>
    </button>
  );
}

export default function InteriorAllPage({ searchParams }) {
  const resolvedSearchParams = use(searchParams);
  const initialCategory = resolvedSearchParams?.category;
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileSection, setMobileSection] = useState(null);
  const [activeProject, setActiveProject] = useState(null);
  const [isSwitching, setIsSwitching] = useState(false);
  const [activeCategory, setActiveCategory] = useState(
    ['All', 'Retail', 'Workplace', 'Homes', 'Hotels', 'Leisure'].includes(initialCategory) ? initialCategory : 'All',
  );
  const categories = useMemo(() => ['All', 'Retail', 'Workplace', 'Homes', 'Hotels', 'Leisure'], []);
  const filteredProjects = useMemo(() => (activeCategory === 'All' ? interiorProjects : interiorProjects.filter((project) => project.category === activeCategory)), [activeCategory]);
  const spans = ['md:col-span-7 md:row-span-2', 'md:col-span-5', 'md:col-span-5', 'md:col-span-7 md:row-span-2', 'md:col-span-6', 'md:col-span-6'];
  const changeCategory = (value) => {
    setIsSwitching(true);
    setActiveCategory(value);
    window.setTimeout(() => setIsSwitching(false), 180);
  };

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#11110f]">
      <SmoothCursor />
      <SiteHeader menuOpen={menuOpen} setMenuOpen={setMenuOpen} mobileSection={mobileSection} setMobileSection={setMobileSection} />
      <section className="relative overflow-hidden border-b border-black/10 bg-[#11110f] px-5 pb-12 pt-24 text-white md:px-10 md:pb-16">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.12),transparent_38%),radial-gradient(circle_at_bottom_right,rgba(208,195,173,0.16),transparent_35%)]" />
        <div className="relative mx-auto max-w-7xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/55">Interiors / All projects</p>
          <div className="mt-5 grid gap-6 md:grid-cols-12 md:items-end">
            <div className="md:col-span-8">
              <h1 className="text-[15vw] leading-[0.88] tracking-[-0.08em] md:text-[8vw]">
                Mixed interior
                <span className="block font-serif italic text-white/50">project archive.</span>
              </h1>
            </div>
            <div className="md:col-span-4">
              <p className="max-w-md text-sm leading-6 text-white/70 md:text-[15px]">A combined view of retail, workplace, homes, hotels, and leisure projects with a cleaner grid and clear project labels.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-6 md:px-10 md:py-8">
        <div className="mx-auto flex max-w-7xl flex-wrap gap-3">
          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => changeCategory(category)}
              aria-pressed={activeCategory === category}
              className={`rounded-full border px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.18em] transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
                activeCategory === category
                  ? 'border-black bg-white text-black shadow-[0_10px_30px_rgba(17,17,15,0.08)]'
                  : 'border-black/15 bg-white/70 text-black/70 hover:border-black/30 hover:bg-black hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-20">
        <div className={`mx-auto grid max-w-7xl gap-5 md:grid-cols-12 md:gap-6 transition-all duration-300 ${isSwitching ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'}`}>
          {filteredProjects.map((project, index) => (
            <div key={`${project.title}-${project.location}`} className={`${spans[index % spans.length]} ${index % 4 === 0 || index % 4 === 3 ? 'md:pt-4' : ''}`}>
              <div onClick={() => setActiveProject(project)}>
                <ProjectCard project={project} />
              </div>
            </div>
          ))}
        </div>
      </section>
      <ProjectModal project={activeProject} onClose={() => setActiveProject(null)} eyebrow="Interior project" />
      <SiteFooter />
    </main>
  );
}
