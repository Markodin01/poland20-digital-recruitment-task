import { edu, nomadPodcast, work20 } from '@/app/_components/ourProjects/assets';
import type { Project } from '@/shared/types/project.tsx';

export const projects: Project[] = [
	{
		id: 1,
		title: '#NOMAD',
		subtitle: 'PODCAST SEASON 5',
		category: 'Nomad Podcast',
		image: nomadPodcast,
		backgroundClass: 'bg-gradient-to-br from-[#2D1B69] to-black',
	},
	{
		id: 2,
		title: 'WORK 2.0',
		subtitle: 'WORKSHOP',
		category: 'Work 2.0',
		image: work20,
		backgroundClass: 'bg-gradient-to-br from-[#1B1464] to-black',
	},
	{
		id: 3,
		title: 'EDU 2.0',
		subtitle: 'AMBASSADORS',
		category: 'Edu 2.0',
		image: edu,
		backgroundClass: 'bg-gradient-to-br from-[#2D1B69] to-black',
	},
];
