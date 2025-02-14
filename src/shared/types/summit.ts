import { StaticImageData } from 'next/image';

export interface SummitFeature {
	id: string;
	title: string;
	description: string;
    icon: StaticImageData;
}