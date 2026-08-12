'use client';

import { useEffect } from 'react';

function Arrow() {
  return <span aria-hidden="true" className="text-[1.05em]">-&gt;</span>;
}

function buildGallery(project) {
  const base = project?.image || '';
  const seed = encodeURIComponent(project?.title || 'project');
  return [
    base,
    `https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1600&q=90&sig=${seed}-1`,
    `https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1600&q=90&sig=${seed}-2`,
    `https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=1600&q=90&sig=${seed}-3`,
  ].filter(Boolean);
}

export function ProjectModal({ project, onClose, eyebrow = 'Selected project' }) {
  const gallery = buildGallery(project);

  useEffect(() => {
    if (!project) return undefined;
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-[80] flex items-end justify-center bg-black/60 p-3 backdrop-blur-sm md:items-center md:p-6" onMouseDown={onClose}>
      <div className="w-full max-w-6xl overflow-hidden rounded-[30px] bg-[#f4efe6] text-[#11110f] shadow-[0_30px_100px_rgba(0,0,0,0.3)]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="flex items-center justify-between border-b border-black/10 px-5 py-4 md:px-7">
          <div>
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">{eyebrow}</p>
            <h3 className="mt-2 text-xl tracking-[-0.03em] md:text-3xl">{project.title}</h3>
          </div>
          <button onClick={onClose} className="rounded-full border border-black/15 px-4 py-2 text-[10px] font-semibold uppercase tracking-[0.16em] transition-colors hover:bg-black hover:text-white">
            Close <Arrow />
          </button>
        </div>

        <div className="grid gap-0 md:grid-cols-12">
          <div className="md:col-span-7">
            <div className="aspect-[4/4] md:aspect-[4/3]">
              <img src={gallery[0]} alt={project.title} className="h-full w-full object-cover" />
            </div>
          </div>
          <div className="border-t border-black/10 px-5 py-5 md:col-span-5 md:border-l md:border-t-0 md:px-6">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Project info</p>
            <div className="mt-4 space-y-4">
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">Location</p>
                <p className="mt-1 text-lg tracking-[-0.03em]">{project.location}</p>
              </div>
              <div>
                <p className="text-[10px] uppercase tracking-[0.18em] text-black/40">Category</p>
                <p className="mt-1 text-lg tracking-[-0.03em]">{project.category || project.group}</p>
              </div>
            </div>
            <p className="mt-6 text-sm leading-6 text-black/65">
              A selected project window with a horizontal gallery below. Swipe or drag sideways to move through the images.
            </p>
          </div>
        </div>

        <div className="border-t border-black/10 px-5 py-5 md:px-7">
          <div className="flex items-end justify-between gap-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-black/45">Gallery</p>
            <p className="text-[9px] uppercase tracking-[0.16em] text-black/40">Drag horizontally</p>
          </div>
          <div className="mt-4 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-2">
            {gallery.map((image, index) => (
              <div key={`${project.title}-${index}`} className="min-w-[78%] snap-center md:min-w-[38%]">
                <div className="overflow-hidden rounded-[24px]">
                  <img src={image} alt={`${project.title} ${index + 1}`} className="h-[220px] w-full object-cover transition-transform duration-500 hover:scale-105 md:h-[260px]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
