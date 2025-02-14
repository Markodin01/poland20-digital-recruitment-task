import { edu, nomadPodcast, work20 } from '@/app/_components/ourProjects/assets';
import type { Project } from '@/shared/types/project.tsx';
export const projects: Project[] = [
  {
    id: 1,
    category: "Nomad Podcast",
    image: nomadPodcast,
    backgroundClass: "bg-gradient-to-br from-purple to-black"
  },
  {
    id: 2,
    category: "Work 2.0",
    image: work20,
    backgroundClass: "bg-gradient-to-br from-purple to-black"
  },
  {
    id: 3,
    category: "Edu 2.0",
    image: edu,
    backgroundClass: "bg-gradient-to-br from-purple to-black",
  }
];