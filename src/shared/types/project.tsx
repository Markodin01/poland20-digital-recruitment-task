import { StaticImageData } from 'next/image';

export interface Project {
  id: number;
  category: string;
  backgroundClass: string;
  image: StaticImageData;
}