import { projects } from '@/data/projects';
import type { Project } from '@/shared/types/project';

interface ProjectCardProps {
	project: Project;
	index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
	return (
		<div
			className={`relative h-72 overflow-hidden rounded-3xl p-6 ${project.backgroundClass} group animate-fade-in cursor-pointer opacity-0 hover:shadow-lg hover:shadow-plPink/20`}
			style={{
				animationDelay: `${index * 150}ms`,
				animationFillMode: 'forwards',
			}}
		>
			<div className="absolute inset-0 bg-gradient-to-t from-plBlue/80 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

			<div className="absolute inset-0 bg-[length:200%_100%] bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-gradient-shine" />

			<div className="relative z-10 flex h-full flex-col justify-end">
				<div className="transform space-y-1 transition-all duration-300 group-hover:translate-y-[-8px]">
					<h3 className="font-autonomous font-bold text-2xl text-plWhite opacity-90 transition-opacity group-hover:opacity-100">{project.title}</h3>
					{project.subtitle && (
						<p className="transform font-lato text-plWhite/80 opacity-0 transition-all delay-75 duration-300 group-hover:opacity-100">{project.subtitle}</p>
					)}
					<p className="transform pt-1 font-lato text-plWhite/60 text-sm opacity-0 transition-all delay-100 duration-300 group-hover:opacity-100">{project.category}</p>
				</div>
			</div>
		</div>
	);
};

const OurProjects = () => {
	return (
		<section className="container mx-auto px-4 py-16">
			<div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
				{projects.map((project, index) => (
					<ProjectCard key={project.id} project={project} index={index} />
				))}
			</div>
		</section>
	);
};

export default OurProjects;
