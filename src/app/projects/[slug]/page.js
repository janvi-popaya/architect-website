import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter, SiteHeader } from '@/components/site-frame';
import { ProjectCard } from '@/components/projects/project-card';
import { getProject, getRelatedProjects, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.projectSlug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} — AXIS`,
    description: project.description,
  };
}

function DetailRow({ label, children }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-black/15 py-4">
      <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">{label}</dt>
      <dd className="text-right text-sm">{children}</dd>
    </div>
  );
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();
  const relatedProjects = getRelatedProjects(project);

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#11110f]">
      <SiteHeader />

      <section className="relative min-h-[82vh] overflow-hidden bg-black text-white">
        <img src={project.gallery[0]} alt={project.title} className="absolute inset-0 h-full w-full object-cover opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/35" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-[1600px] flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14">
          <div className="mb-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65">
            <Link href="/projects" className="transition hover:text-white">Projects</Link><span>/</span><span>{project.group}</span>
          </div>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="text-[17vw] leading-[.78] tracking-[-0.075em] md:col-span-9 md:text-[9.5vw]">{project.title}</h1>
            <p className="border-l border-white/35 pl-4 text-xs uppercase leading-5 tracking-[0.15em] text-white/70 md:col-span-3">{project.location}<br />{project.year}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">The project</p>
            <p className="mt-6 max-w-3xl text-3xl leading-[1.08] tracking-[-0.045em] md:text-5xl">{project.description}</p>
          </div>
          <dl className="md:col-span-4 md:col-start-9">
            <DetailRow label="Location">{project.location}</DetailRow>
            <DetailRow label="Typology">{project.category}</DetailRow>
            <DetailRow label="Year">{project.year}</DetailRow>
            <DetailRow label="Area">{project.area}</DetailRow>
            <DetailRow label="Status">{project.status}</DetailRow>
          </dl>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-28">
        <div className="mx-auto grid max-w-[1600px] gap-5 md:grid-cols-12 md:gap-7">
          {project.gallery.slice(1).map((image, index) => (
            <figure key={image} className={`${index === 0 ? 'md:col-span-8' : index === 1 ? 'md:col-span-4 md:pt-28' : 'md:col-span-12'} overflow-hidden rounded-[24px] bg-black/5`}>
              <img src={image} alt={`${project.title} — view ${index + 2}`} className={`w-full object-cover ${index === 2 ? 'aspect-[16/8]' : 'aspect-[4/5]'}`} />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#11110f] px-5 py-20 text-white md:px-10 md:py-32">
        <blockquote className="serif mx-auto max-w-5xl text-center text-4xl italic leading-[1.08] tracking-[-0.04em] text-white/85 md:text-7xl">“{project.quote}”</blockquote>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto max-w-7xl">
          <div className="flex items-end justify-between gap-6 border-b border-black/15 pb-6">
            <div><p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Continue exploring</p><h2 className="mt-3 text-4xl tracking-[-0.05em] md:text-6xl">More projects</h2></div>
            <Link href="/projects" className="hidden border-b border-black/40 pb-1 text-[10px] font-semibold uppercase tracking-[0.18em] md:block">View all ↗</Link>
          </div>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {relatedProjects.map((related) => <ProjectCard key={related.projectSlug} project={related} />)}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
