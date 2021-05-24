import React, { ReactElement } from 'react';
import { Destination } from '../data/data';

export interface DestinationCardProps {
  destination: Destination;
}

export function DestinationCard({ destination }: DestinationCardProps): ReactElement | null {
  return (
    <div className="flex items-center overflow-hidden bg-white shadow-lg rouded-lg">
      <img className="flex-shrink-0 w-32 h-32" src={destination.imageUrl} alt={destination.imageAlt} />
      <div className="px-6 py-4">
        <h3 className="text-lg font-semibold text-gray-800">{destination.city}</h3>
        <p className="text-gray-600">${destination.averagePrice} / night average</p>
        <div className="mt-4">
          <a href="#" className="text-sm font-semibold text-indigo-500 hover:text-indigo-400">
            Explore {destination.propertyCount} properties
          </a>
        </div>
      </div>
    </div>
  );
}
