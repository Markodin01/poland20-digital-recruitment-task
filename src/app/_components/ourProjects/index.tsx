import Image from 'next/image'
import { projects } from '@/data/projects'
import type { Project } from '@/shared/types/project'

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
  <div

    // tutaj powinienem dodac animacje końcową..
    className={`group relative h-72 rounded-3xl p-6 ${project.backgroundClass} animate-fade-in hover:animate-card-hover overflow-hidden`}
    style={{
      animationDelay: `${index * 150}ms`,
    }}
  >
    <Image
      src={project.image}
      alt={ "Project image"}
      fill
      priority={index < 3}
      className="rounded-3xl object-cover transition-transform duration-300 group-hover:scale-105"
    />

    {/* to nie działa ale próbowałem lol */}
    <div className="relative z-10">
      <div className="opacity-0 animate-slide-up">
        <p className="text-sm text-white">
          {project.category}
        </p>
      </div>
    </div>
  </div>
)

const OurProjects = () => (
  <section className="container mx-auto px-4 py-16">
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project, index) => (
        <ProjectCard key={project.id} project={project} index={index} />
      ))}
    </div>
  </section>
)

export default OurProjects