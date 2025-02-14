'use client';

import React from 'react';
import Image from 'next/image';
import H4 from '@/components/heading/H4';
import summitFeatures from '@/data/summits.ts';
import type { SummitFeature } from '@/shared/types/summit';

interface FeatureCardProps {
  feature: SummitFeature;
}

const FeatureCard = ({ feature }: FeatureCardProps) => (
  <div
    className="group cursor-pointer rounded-3xl bg-plBlue/40 p-8 backdrop-blur-sm
      transition-all duration-350 hover:bg-plBlue/50"
  >
    <div 
      className="mb-6 transform transition-transform duration-250 
        group-hover:scale-110 group-hover:-translate-y-1"
    >
      <Image
        src={feature.icon}
        alt={feature.title}
        width={48}
        height={48}
      />
    </div>
    
    <H4 className="mb-4">
      {feature.title}
    </H4>
    
    <p className="text-sm">
      {feature.description}
    </p>
  </div>
);

const Summit = () => {
  return (
      <div className="container mx-auto px-4">
        <div className="mb-12">
          <h2 className="mb-4 font-autonomous text-4xl text-plWhite">
            Summit 2024
          </h2>
          <p className="text-plWhite/80">
            Dlaczego nie może Cię zabraknąć na naszej jubileuszowej konferencji?
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {summitFeatures.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
  );
};

export default Summit;