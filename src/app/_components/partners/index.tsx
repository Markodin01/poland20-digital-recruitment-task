import PartnerLogo from '@/components/PartnerLogo';
import H4 from '@/components/heading/H4';
import type { ImageSource } from '@/components/image';

import { currentPartners } from './assets/current';
import { honoraryPatrons } from './assets/honorary';
import { institutionalPartners } from './assets/institutional';
import { mediaPatrons } from './assets/media';
import { previousPartners } from './assets/previous';
import { strategicPartners } from './assets/strategic';

interface PartnerSectionProps {
  title: string;
  partners: ImageSource[];
}

const PartnerSection = ({ title, partners }: PartnerSectionProps) => (
  <div className="mb-12">
    <H4 className="text-plWhite mb-6 font-autonomous">
      {title}
    </H4>
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-6">
      {partners.map((logo, index) => (
        <div 
          key={`partner-${index}`}
          className="flex items-center justify-center"
        >
          <PartnerLogo
            src={logo}
            removePaddingY={false}
          />
        </div>
      ))}
    </div>
  </div>
);

export default function Partners() {
  return (
      <div className="container mx-auto">
        <h2 className="font-autonomous text-4xl text-plWhite mb-12">
          Partnerzy Poland 2.0 Summit
        </h2>

        <PartnerSection
          title="Partnerzy strategiczni"
          partners={strategicPartners}
        />

        <PartnerSection
          title="Patronat honorowy"
          partners={honoraryPatrons}
        />

        <PartnerSection
          title="Partnerzy"
          partners={currentPartners}
        />

        <PartnerSection
          title="Partnerzy instytucjonalni"
          partners={institutionalPartners}
        />

        <PartnerSection
          title="Patronaty medialne"
          partners={mediaPatrons}
        />

        <PartnerSection
          title="Poprzedni partnerzy"
          partners={previousPartners}
        />
      </div>
  );
}