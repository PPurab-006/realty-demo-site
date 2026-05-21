import { notFound } from 'next/navigation';
import { projects } from '@/data/projects';
import ProjectDetailClient from './ProjectDetailClient';
import type { Metadata } from 'next';

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};

  return {
    title: `${project.name} | Prestige Landmarks`,
    description: project.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailClient project={project} />;
}
