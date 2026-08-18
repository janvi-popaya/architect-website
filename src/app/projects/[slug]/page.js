import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SiteFooter, SiteHeader } from '@/components/site-frame';
import { getProject, projects } from '@/data/projects';

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.projectSlug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) return { title: 'Project not found' };
  return {
    title: `${project.title} — Joey's Atelier`,
    description: project.description,
  };
}

function DetailRow({ label, children }) {
  return (
    <div className="flex items-baseline justify-between gap-6 border-b border-black/15 py-4">
      <dt className="text-[9px] font-semibold uppercase tracking-[0.2em] text-black/45">{label}</dt>
      <dd className="max-w-[58%] text-right text-sm">{children}</dd>
    </div>
  );
}

export default async function ProjectDetailPage({ params }) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  return (
    <main className="min-h-screen bg-[#f4efe6] text-[#11110f]">
      <SiteHeader />

      <section className="relative min-h-[82vh] overflow-hidden bg-black text-white">
        <Image
          src={project.heroImage}
          alt={project.title}
          fill
          priority
          sizes="100vw"
          className="object-cover opacity-75"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/10 to-black/35" />
        <div className="relative mx-auto flex min-h-[82vh] max-w-[1600px] flex-col justify-end px-5 pb-10 pt-28 md:px-10 md:pb-14">
          <div className="mb-8 flex items-center gap-3 text-[9px] font-semibold uppercase tracking-[0.22em] text-white/65">
            <Link href="/projects" className="transition hover:text-white">Projects</Link><span>/</span><span>{project.group}</span>
          </div>
          <div className="grid gap-8 md:grid-cols-12 md:items-end">
            <h1 className="text-[16vw] leading-[.82] tracking-[-0.075em] md:col-span-9 md:text-[8.5vw]">{project.title}</h1>
            <p className="border-l border-white/35 pl-4 text-xs uppercase leading-5 tracking-[0.15em] text-white/70 md:col-span-3">{project.location}<br />{project.year}</p>
          </div>
        </div>
      </section>

      <section className="px-5 py-16 md:px-10 md:py-28">
        <div className="mx-auto grid max-w-7xl gap-12 md:grid-cols-12">
          <div className="md:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">The project</p>
            <p className="mt-6 max-w-3xl text-3xl leading-[1.08] tracking-[-0.045em] md:text-5xl">{project.projectText[0]}</p>
            <div className="mt-9 max-w-2xl space-y-5 text-sm leading-7 text-black/62 md:text-[15px]">
              {project.projectText.slice(1).map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </div>
          </div>
          <dl className="md:col-span-4 md:col-start-9">
            <DetailRow label="Location">{project.location}</DetailRow>
            <DetailRow label="Project type">{project.category}</DetailRow>
            <DetailRow label="Year">{project.year}</DetailRow>
            <DetailRow label="Area">{project.area}</DetailRow>
            <DetailRow label="Status">{project.status}</DetailRow>
            <DetailRow label="Architect / Designer">{project.architect}</DetailRow>
            <DetailRow label="Photography">{project.photography}</DetailRow>
          </dl>
        </div>
      </section>

      <section className="px-5 pb-16 md:px-10 md:pb-28">
        <div className="mx-auto max-w-[1600px] columns-1 gap-5 md:columns-2 md:gap-7">
          {project.gallery.map((image, index) => (
            <figure key={image.src} className="mb-5 break-inside-avoid overflow-hidden rounded-[24px] bg-black/5 md:mb-7">
              <Image
                src={image.src}
                alt={`${project.title} — interior view ${index + 1}`}
                width={image.width}
                height={image.height}
                sizes="(max-width: 767px) 100vw, 50vw"
                className="h-auto w-full"
              />
            </figure>
          ))}
        </div>
      </section>

      <section className="bg-[#ded6c8] px-5 py-16 md:px-10 md:py-24">
        <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-12 md:items-center">
          <div className="md:col-span-4">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-black/45">Layout plan</p>
            <h2 className="mt-4 text-4xl tracking-[-0.05em] md:text-6xl">{project.planTitle}</h2>
            <p className="mt-5 max-w-sm text-sm leading-7 text-black/60">{project.planDescription}</p>
          </div>
          <figure className="overflow-hidden rounded-[28px] border border-black/10 bg-white md:col-span-7 md:col-start-6">
            <Image
              src={project.layoutPlan}
              alt={`${project.title} layout plan`}
              width={project.layoutPlanWidth}
              height={project.layoutPlanHeight}
              sizes="(max-width: 767px) 100vw, 58vw"
              className="h-auto w-full"
            />
          </figure>
        </div>
      </section>

      <section className="bg-[#11110f] px-5 py-20 text-white md:px-10 md:py-32">
        <blockquote className="mx-auto max-w-5xl text-center font-serif text-4xl italic leading-[1.08] tracking-[-0.04em] text-white/85 md:text-7xl">&ldquo;{project.quote}&rdquo;</blockquote>
      </section>

      <SiteFooter />
    </main>
  );
}
