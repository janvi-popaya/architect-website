import Link from 'next/link';

export default function ProjectNotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#11110f] px-5 text-center text-white">
      <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-white/45">404 / Project not found</p>
      <h1 className="mt-6 text-6xl tracking-[-0.06em] md:text-8xl">This project is off the drawing board.</h1>
      <Link href="/projects" className="mt-10 rounded-full border border-white/30 px-6 py-3 text-[10px] font-semibold uppercase tracking-[0.18em] transition hover:bg-white hover:text-black">Return to projects</Link>
    </main>
  );
}
