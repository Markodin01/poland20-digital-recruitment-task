import { conversation, development, graduateCap, person, puzzle, workshop } from '@/app/_components/summit/assets'
import type { SummitFeature } from '@/shared/types/summit';

const summitFeatures: SummitFeature[] = [
  {
    id: 'ambition',
    title: 'Spotkanie z ambicją i kreatywnością',
    description: 'Dołącz do wspólnoty ambitnych polskich studentów z uczelni z całego świata i zbuduj nowe znajomości!',
    icon: puzzle
  },
  {
    id: 'panels',
    title: 'Panele dyskusyjne z ekspertami',
    description: 'Uczestnicz w dyskusjach z światowej klasy ekspertami, naukowcami oraz liderami biznesu, którzy debatują o najistotniejszych problemach naszych czasów i wpływie technologii na ich rozwiązania.',
    icon: person
  },
  {
    id: 'workshops',
    title: 'Interaktywne warsztaty',
    description: 'Weź udział w warsztatach prowadzonych przez przedstawicieli wiodących funduszy inwestycyjnych i międzynarodowych korporacji.',
    icon: workshop
  },
  {
    id: 'career',
    title: 'Rozwój kariery',
    description: 'Pokaż się ze swojej najlepszej strony i zdobądź potencjalne praktyki albo inne okazję rozwoju swojej kariery w jednej z obecnych na konferencji firm!',
    icon: development
  },
  {
    id: 'education',
    title: 'Edukacja za granicą',
    description: 'Dowiedz się jak możemy pomóc Ci studiować na najlepszych uczelniach na świecie!',
    icon: graduateCap
  },
  {
    id: 'networking',
    title: 'Networking i rozrywka',
    description: 'Nie przegap okazji do spotkań z innymi studentami i prelegentami podczas bankietu oraz uroczystego balu- idealna szansa na wymianę myśli, zawarcie nowych znajomości i niezapomnianą zabawę.',
    icon: conversation
  }
];

export default summitFeatures;