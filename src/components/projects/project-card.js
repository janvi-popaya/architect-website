import Link from 'next/link';

export function ProjectCard({ project, className = '' }) {
  return (
    <Link href={`/projects/${project.projectSlug}`} className={`group block ${className}`}>
      <article className="relative overflow-hidden rounded-[28px] border border-black/10 bg-black/5 shadow-[0_20px_60px_rgba(17,17,15,0.08)]">
        <div className="aspect-[4/5] overflow-hidden md:aspect-[6/5]">
          <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 ease-out group-hover:scale-105 group-hover:saturate-[.8]" />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-5 text-white md:p-6">
          <p className="text-[9px] font-semibold uppercase tracking-[0.22em] text-white/60">{project.group || project.category}</p>
          <div className="mt-2 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl tracking-[-0.04em] md:text-3xl">{project.title}</h2>
              <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-white/60">{project.location}</p>
            </div>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-white/30 transition group-hover:rotate-45 group-hover:bg-white group-hover:text-black" aria-hidden="true">↗</span>
          </div>
        </div>
      </article>
    </Link>
  );
}
