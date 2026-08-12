import { architectureProjects } from './architecture-projects';

const interiorEntries = [
  { title: 'The Grain Room', location: 'Bengaluru, India', category: 'Retail', image: 'https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=2000&q=90' },
  { title: 'Forum 18', location: 'Hyderabad, India', category: 'Retail', image: 'https://images.unsplash.com/photo-1489515217757-5fd1be406fef?auto=format&fit=crop&w=2000&q=90' },
  { title: 'North Desk', location: 'Mumbai, India', category: 'Workplace', image: 'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=2000&q=90' },
  { title: 'House of Quiet', location: 'Coimbatore, India', category: 'Homes', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=90' },
  { title: 'Monsoon Suites', location: 'Mysuru, India', category: 'Hotels', image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=2000&q=90' },
  { title: 'Courtside Club', location: 'Chennai, India', category: 'Leisure', image: 'https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=2000&q=90' },
];

const interiorGallery = [
  'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1497366412874-3415097a27e7?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=2000&q=90',
  'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=2000&q=90',
];

function slugify(title) {
  return title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export const interiorProjects = interiorEntries.map((project, index) => ({
  ...project,
  projectSlug: slugify(project.title),
  group: 'Interiors',
  year: String(2020 + (index % 6)),
  status: 'Completed',
  area: `${(1.8 + index * 0.7).toFixed(1)}k sq ft`,
  client: 'Private client',
  description: `${project.title} explores warmth, tactility and carefully framed light. A restrained palette allows the daily life of the space to remain at the centre of the design.`,
  quote: 'The most memorable rooms make space for life, not just objects.',
  gallery: [project.image, ...interiorGallery.slice(index % 2, index % 2 + 3)],
}));

export const projects = [...architectureProjects, ...interiorProjects];

export function getProject(projectSlug) {
  return projects.find((project) => project.projectSlug === projectSlug);
}

export function getRelatedProjects(project, count = 3) {
  const sameGroup = projects.filter((candidate) => candidate.projectSlug !== project.projectSlug && candidate.group === project.group);
  return sameGroup.slice(0, count);
}
