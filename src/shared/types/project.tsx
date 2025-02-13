import type { StaticImageData } from 'next/image';

export interface Project {
	id: number;
	title: string;
	subtitle: string;
	category: string;
	image: StaticImageData;
	backgroundClass: string;
	isGlobal?: boolean;
}
